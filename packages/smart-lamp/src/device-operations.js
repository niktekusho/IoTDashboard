const { ActiveDeviceOperations, ActiveDeviceOperationDescriptor } = require('device-info');

const operations = new ActiveDeviceOperations();

const switchOperation = new ActiveDeviceOperationDescriptor({ name: 'Switch' });

operations.addOperation(switchOperation);

module.exports = operations;
