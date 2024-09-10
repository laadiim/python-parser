import Method from "./structures/method.js";
import pythonCode from "./python.js";

let pythonArr = pythonCode.split("\n");

let methods = [];
let main = [];
const varSet = new Set();


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
