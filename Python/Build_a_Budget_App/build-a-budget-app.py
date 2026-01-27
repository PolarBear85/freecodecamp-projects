class Category:
    def __init__(self,name):
        self.ledger = []
        self.name = name

    def check_ledger(self):
        print(self.ledger)

    def deposit(self, amount,description=""):
        self.ledger.append(
            {'amount':amount,
            'description':description}
        )
        print(f"{amount} deposited")
    
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
        print(f"Can we transfer? {can_transfer}")
        if can_transfer:
            print("Start withdraw")
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
print(food.check_funds(999))
#print(food.withdraw(100000.15, 'groceries'))
#food.withdraw(15.89, 'restaurant and more food for dessert')
#food.get_balance()
clothing = Category('Clothing')
food.transfer(50, clothing)
clothing.check_ledger()
food.check_ledger()
