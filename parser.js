const pythonCode = `
def check_even_numbers(numbers):
    even_numbers = []
    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)
    return even_numbers

numbers_list = [1, 2, 3, 4, 5, 6]
result = check_even_numbers(numbers_list)
print("Even numbers are:", result)
`;


let pythonArr = pythonCode.split("\n");

let methods = [];
let main = [];

class Method {
	constructor(name, params, code) {
		this.name = name;
		this.params = params;
		this.code = code;
	}

	toJSON() {
		return {
			"name": this.name,
			"params": this.params,
			"code": this.code,
		}
	}
	
}

const parseMethod = (start) => {
	let name;
	let params;
	let code = [];
	name = pythonArr[start].slice(4, pythonArr[start].indexOf('('));
	params = pythonArr[start].slice(pythonArr[start].indexOf('(') + 1, pythonArr[start].indexOf(')')).split(", ");
	for (let line = start + 1; line < pythonArr.length; line++) {
		if (!pythonArr[line].startsWith(" ")) {
			break;
		}
		else {
			code.push(pythonArr[line]);
		}
	}
	return new Method(name, params, code);
}

let methodStarts = [];

for (let line = 0; line < pythonArr.length; line++) {
	if (pythonArr[line].startsWith("def ")) {
		methodStarts.push(line);
	}
	else if (!pythonArr[line].startsWith(" ")) {
		main.push(pythonArr[line]);	
	}
}

for (let i = 0; i < methodStarts.length; i++) {
	methods.push(parseMethod(methodStarts[i]));
}

methods.push(new Method("main", [], main));

for (let i = 0; i < methods.length; i++) {
	console.log(methods[i].toJSON());
}
