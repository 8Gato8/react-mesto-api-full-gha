export async function makeRequest(url, method, body, token) {

	const BASE_URL = 'https://api.gato.students.nomoredomains.rocks';

	const headers = {
		'Content-Type': 'application/json'
	}

	if (token !== undefined) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const config = {
		method,
		headers,
	}

	if (body !== undefined) {
		config.body = JSON.stringify(body);
	}

	const response = await fetch(`${BASE_URL}${url}`, config);

	return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}