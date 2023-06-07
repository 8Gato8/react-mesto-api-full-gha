import { makeRequest } from "./makeRequest";

export const BASE_URL = 'https://api.gato.students.nomoredomains.rocks';

export function register(password, email) {
	return makeRequest('/signup', 'POST', { password, email });
}

export function authorize(password, email) {
	return makeRequest('/signin', 'POST', { password, email });
}