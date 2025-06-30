class Category:
    def __init__(self,category):
        self.category = category
        self.ledger = []

    def __str__(self):
        title = f"*************{self.category}*************"
        output = title
        
        for item in self.ledger:
            desc_len = len(item['description'][:23])
            amount_len = len(f"{item['amount']:.2f}")
            
        # used :.2f to make it two decimal places
            output+=f"\n{item['description'][:23]}{' '*(30-(desc_len+amount_len))}{item['amount']:.2f}"
        output+=f'\nTotal: {self.get_balance()}'
            

        return output
    
    # to deposit money
    def deposit(self,amount,description=''):
        self.ledger.append({'amount':amount,'description':description})
    # to withdraw from the deposit *fix
    def withdraw(self,amount,description=''):
        if self.check_funds(amount): 
            self.ledger.append({'amount':-(amount),'description':description})
            return True
        return False
    # get balance of the amount by iterating
    def get_balance(self):
        return sum(amount['amount'] for amount in self.ledger)
    # transfer amount from category to category *fix
    def transfer(self,amount,category):
        if self.check_funds(amount):
            self.withdraw(amount,f'Transfer to {category.category}')
            category.deposit(amount,f'Transfer from {self.category}')
            return True
        return False
    # to check funds
    def check_funds(self,amount):
        return amount <= self.get_balance()

#bar chart 
def create_spend_chart(categories):
    title = 'Percentage spent by category'
    bar = {
       i:[] for i in range(100,-1,-10)
         }
    
    #obtain the total and each category spendings
    total = 0
    category_spent={}
    for category in categories:
        category_expense = sum(abs(amount['amount']) for amount in category.ledger if amount['description'] != 'deposit')
        total+=category_expense
    
    #display each category spendings
    for category in categories:
        category_expense = sum(abs(amount['amount']) for amount in category.ledger if amount['description'] != 'deposit')
        perc = int((category_expense / total) * 100)
        #imp
        perc = perc - (perc % 10)
        category_spent[category.category]= perc
    
    
    for category,percentage in category_spent.items():
        for key in bar:
            if key <=percentage:
                bar[key].append('o')
            else:
                bar[key].append(' ')

    # string repr of bar
    output = title
    for key,val in bar.items():
        len_of_key = len(str(key))
        output += f'\n{" "*(3-len_of_key)}{key}| ' + '  '.join(val) + '  '

    # to show category
    output += f'\n{" "*4}{"-"*((len(categories)*3)+1)}\n'
    #********************************************
    #very important prints the col of category
    max_word = max(len(category) for category in category_spent)
    
    string_categories = []
    for category in category_spent:
        if len(category) < max_word:
            for i in range(len(category),max_word):
                category+=' '
        string_categories.append(category)
    
          
    # each row
    for i in range(max_word):
        
       row = '  '.join(category[i] for category in string_categories)
       row+='  '
       if i == (max_word-1):
           output+=f'{" "*5}{row}'
       else:
            output+=f'{" "*5}{row}\n'
    return output
        


food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(25.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
print(food)
auto = Category('Auto')

auto.deposit(100, 'initial deposit')
auto.withdraw(20,'autoing')
print(create_spend_chart([food,clothing,auto]))