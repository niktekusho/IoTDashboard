class ActiveDeviceOperationDescriptor {
	constructor({ name, args }) {
		// operation name
		this.name = name;

		// operation arguments/parameters
		this.args = args;
	}
}

module.exports = ActiveDeviceOperationDescriptor;
