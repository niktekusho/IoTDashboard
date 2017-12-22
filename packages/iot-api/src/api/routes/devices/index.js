const AllDevicesRoute = require('./AllDevicesRoute');
const DeviceDetailRoute = require('./DeviceDetailRoute');
const DeviceClassesRoute = require('./DeviceClassesRoute');
const DevicesByClassRoute = require('./DevicesByClassRoute');
const DeviceServiceStatusRoute = require('./DeviceServiceStatusRoute');

function routes(settings) {
	const allDevices = new AllDevicesRoute(settings);
	const deviceDetail = new DeviceDetailRoute(settings);
	const deviceClasses = new DeviceClassesRoute(settings);
	const devicesByClass = new DevicesByClassRoute(settings);
	const deviceServiceStatus = new DeviceServiceStatusRoute(settings);

	return [
		allDevices,
		deviceDetail,
		deviceClasses,
		devicesByClass,
		deviceServiceStatus,
	];
}

module.exports = routes;
