/* export const BASE_URL = 'https://api.gato.students.nomoredomains.rocks';

async function makeRequest(url, method, body, token) {

	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}

	if (token !== undefined) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const config = {
		method,
		headers
	}

	if (body !== undefined) {
		config.body = JSON.stringify(body);
	}

	const response = await fetch(`${BASE_URL}${url}`, config);

	return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
} */
import { makeRequest } from "./makeRequest";

export function register(password, email) {
	return makeRequest('/signup', 'POST', { password, email });
}

export function authorize(password, email) {
	return makeRequest('/signin', 'POST', { password, email });
}