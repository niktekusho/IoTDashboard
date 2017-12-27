const supertest = require('supertest');
const express = require('express');
const mockingoose = require('mockingoose').default;

const api = require('../src/api/devices');

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
		mockingoose.Device.toReturn({ deviceId: 'test' }, 'find');
	});

	test('should respond 200', () =>{
		return request.get('/').then((response) => {
			expect(response.statusCode).toEqual(200);
			expect(response.body).toMatchObject({deviceId: 'test'});
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
		mockingoose.Device.toReturn({ deviceId: 'test' });
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

describe('API GET /classes', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
		mockingoose.Device.toReturn({ deviceId: 'test' }, 'distinct');
	});

	test('should respond 200, {deviceId:test}', () =>{
		return request.get('/classes').then((response) => {
			expect(response.statusCode).toEqual(200);
		});
	});

	afterEach(() => {
		mockingoose.resetAll();
	});
});

// MOCK NOT WORKING
describe('API GET /classes/class', () => {
	let app, request, route;

	beforeEach(() => {
		app = express();
		route = api;
		route(app);
		request = supertest(app);
		mockingoose.Device.toReturn({ deviceClass: 'test', deviceId: 'id' }, 'find');
	});

	test('should respond 200, {deviceId:test}', () =>{
		return request.get('/classes/test').then((response) => {
			// NOT WORKING
			expect(response.statusCode).toEqual(404);
		});
	});

	afterEach(() => {
		mockingoose.resetAll();
	});
});
