def say_hello():
    print("Hello from my first function!")


def greet(name):
    return "Hello " + name + "!"


def calculate_total(price, quantity):
    total = price * quantity
    return total


say_hello()
say_hello()

user_name = input("What is your name? ")
print(greet(user_name))

price = float(input("Enter the price of one item: "))
quantity = int(input("How many items? "))

print("Total:", calculate_total(price, quantity))
