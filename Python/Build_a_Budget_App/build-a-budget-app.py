class Category:
    def __init__(self,name):
        self.ledger = []

    def deposit(self, amount,description=""):
        self.ledger.append(
            {'amount':amount,
            'description':description}
        )
        print(self.ledger)
    
    def withdraw(self,amount,description=""):
        total = self.get_balance()


        self.ledger.append(
            {'amount': -abs(amount),
            'description':description}
        )
        
        if amount > total:
            return False
        else:
            return True
        
        
    def get_balance(self):
        #print("in balance")
        amounts = [item['amount'] for item in self.ledger]
        #print(amounts)
        return sum(amounts)


def create_spend_chart(categories):
    pass



food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
food.get_balance()