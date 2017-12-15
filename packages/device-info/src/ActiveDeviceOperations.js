class ActiveDeviceOperations {
	constructor() {
		this.operations = [];
	}

	addOperation(operationDescriptor) {
		this.operations.push(operationDescriptor);
	}

	clearOperations() {
		this.operations.length = 0;
	}

	removeLastOperation() {
		this.operations.pop();
	}

	toJson() {
		return JSON.stringify(this.operations);
	}
}

module.exports = ActiveDeviceOperations;
