const AllDevicesRoute = require('./AllDevicesRoute');
const DeviceDetailRoute = require('./DeviceDetailRoute');
const DeviceClassesRoute = require('./DeviceClassesRoute');
const DevicesByClassRoute = require('./DevicesByClassRoute');

function routes(settings) {
	const allDevices = new AllDevicesRoute(settings);
	const deviceDetail = new DeviceDetailRoute(settings);
	const deviceClasses = new DeviceClassesRoute(settings);
	const devicesByClass = new DevicesByClassRoute(settings);

	return [
		allDevices,
		deviceDetail,
		deviceClasses,
		devicesByClass,
	];
}

module.exports = routes;
