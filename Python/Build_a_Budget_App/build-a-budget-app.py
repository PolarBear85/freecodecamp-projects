import math

class Category:
    def __init__(self,name):
        self.ledger = []
        self.name = name

    def check_ledger(self):
        print(self.ledger)

    def __str__(self):
        header = self.name[:30].center(30,"*")
        print_out = header + "\n"
        for item in self.ledger:
            description = item['description'][:23]
            amount = item['amount']
            print_out += f"{description:<23}{amount:>7.2f}\n"
        total = self.get_balance()
        print_out += f"Total: {total}"

        return print_out

        



    def deposit(self, amount,description=""):
        self.ledger.append(
            {'amount':amount,
            'description':description}
        )

    
    def withdraw(self,amount,description=""):
        valid_transfer = self.check_funds(amount)
        if valid_transfer:
            self.deposit(-amount,description)
        return valid_transfer
        
        
    def get_balance(self):
        amounts = [item['amount'] for item in self.ledger]
        return sum(amounts)

    def transfer(self,amount,category):
        can_transfer = self.check_funds(amount)
        if can_transfer:
            self.withdraw(amount,f"Transfer to {category.name}")
            category.deposit(amount,f"Transfer from {self.name}")
            return can_transfer
        else:
            return can_transfer

        
    def check_funds(self,amount):
        funds = self.get_balance()
        return funds>=amount

def create_spend_chart(categories):
    total_by_category = []
    total_spend = 0
    longest_category = 0
    graph_data = ""
    graph_data += "Percentage spent by category\n"

### populate the total spend and the spend by category
    for category in categories:
        this_spend = 0
        this_ledger = category.ledger
        for spend in this_ledger:
            if spend['amount'] < 0:
                this_spend += abs(spend['amount'])
                total_spend += abs(spend['amount'])

        total_by_category.append(
            {'category':category.name,
            'total spend': this_spend})

### Calculate the percentage for each category and the longest category name
    for spend_data in total_by_category:
        current_spend = spend_data['total spend']
        percentage_spend = round((current_spend/total_spend)*10)*10
        spend_data['percentage']=percentage_spend
        if len(spend_data['category']) > longest_category:
            longest_category = len(spend_data['category'])

    print("Longest category is ", longest_category)

###Add the vertical axis to the graph string

    graph_top = 100
    while graph_top > 0:
        graph_data+=f"{graph_top:>3}|"
        graph_top -= 10
        for item in total_by_category:
            if item['percentage'] >= graph_top:
                graph_data+=" o "
            else:
                graph_data+="   "
        graph_data+="\n"
    
    

###add horizontal axis to the graph string
    graph_data += "\n\n"
    graph_data +="    "
    graph_data += "---"*len(total_by_category)
    graph_data+= "\n"

### Add horizonal labels to graph data

    carriage = 0

    while carriage <= longest_category:
        graph_data+="    "

        for item in total_by_category:
            item_name = item['category']
            if carriage < len(item_name):
                
                graph_data+=f" {item_name[carriage]} "
            else:
                graph_data+="   "
        graph_data+="\n"
        carriage+=1


    print(graph_data)
    return(graph_data)  
#build the vertical axis labels
#build the horizontal bar
#build the category labels
#populate the data


food = Category('Food')
food.deposit(1000, 'deposit')
food.check_funds(999)
food.withdraw(100000.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
food.get_balance()
clothing = Category('Clothing')
food.transfer(50, clothing)
print(food)
