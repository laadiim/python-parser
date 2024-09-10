const pythonCode = `
def check_even_numbers(numbers):
    even_numbers = []
    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)
    return even_numbers

def func(foo, bar):
    print(foo + bar)

numbers_list = [1, 2, 3, 4, 5, 6]
result = check_even_numbers(numbers_list)
print("Even numbers are:", result)
`;

export default pythonCode;
