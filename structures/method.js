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

export default Method;
