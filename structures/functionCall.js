import Expression from "./expression";

class FunctionCall {
	/**
	* Initialize functionCall
	*
	* @param {string} toCall - Name of the method to call
	* @param {Expression[]} params - Parameters of the call
	*/
	constructor(toCall, params) {
		this.toCall = toCall;
		this.params = params;
	}
}

export default FunctionCall;
