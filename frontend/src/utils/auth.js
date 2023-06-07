import { makeRequest } from "./makeRequest";

export function register(password, email) {
	return makeRequest('/signup', 'POST', { password, email });
}

export function authorize(password, email) {
	return makeRequest('/signin', 'POST', { password, email });
}
