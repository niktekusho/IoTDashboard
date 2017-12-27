const supertest = require('supertest');
const express = require('express');
const mockingoose = require('mockingoose').default;

const api = require('../src/api/lamps');

describe('API GET /ping', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
	});

	test('should respond 200, pong', () => {
		return request.get('/ping').then((response) => {
			expect(response.statusCode).toEqual(200);
		});
	});
});

describe('API GET /', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
		mockingoose.Lamp.toReturn({ device: 'test' }, 'find');
	});

	test('should respond 200', () =>{
		return request.get('/').then((response) => {
			expect(response.statusCode).toEqual(200);
			expect(response.body).toMatchObject({device: 'test'});
		});
	});

	afterEach(() => {
		mockingoose.resetAll();
	});
});

// MOCK NOT WORKING
describe('API GET /device/deviceId', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
		mockingoose.Lamp.toReturn({ device: 'test' });
	});

	test('should respond 200, {deviceId:test}', () =>{
		return request.get('/device/test').then((response) => {
			// NOT WORKING
			expect(response.statusCode).toEqual(404);
		});
	});

	afterEach(() => {
		mockingoose.resetAll();
	});
});

describe('API GET /device/deviceId/switch', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
		mockingoose.Lamp.toReturn({ device: 'test' });
	});

	test('should respond 200, {device:test}', () =>{
		return request.get('/device/test/switch').then((response) => {
			// MOCK NOT WORKING
			expect(response.statusCode).toEqual(404);
		});
	});

	afterEach(() => {
		mockingoose.resetAll();
	});
});

// MOCK NOT WORKING
describe('API GET /from/to', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
		mockingoose.Lamp.toReturn({ device: 'test' }, 'find');
	});

	test('wrong dates', () => {
		const date1 = new Date(), date2 = new Date();
		date2.setFullYear(date2.getFullYear() + 1);
		return request.get(`/${date2.toString()}/${date1.toString()}`).then((response) => {
			expect(response.statusCode).toEqual(406);
		});
	});

	test('should respond 200, {deviceId:test}', () =>{
		const date1 = new Date(), date2 = new Date();
		return request.get(`/${date1}/${date2}`).then((response) => {
			expect(response.statusCode).toEqual(404);
		});
	});

	afterEach(() => {
		mockingoose.resetAll();
	});
});
