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
    pass



food = Category('Food')
food.deposit(1000, 'deposit')
food.check_funds(999)
food.withdraw(100000.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
#food.get_balance()
clothing = Category('Clothing')
food.transfer(50, clothing)
print(food)
