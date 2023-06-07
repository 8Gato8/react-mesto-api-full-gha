import { makeRequest } from "./makeRequest";

/* export function getBackendUserInfo(token) {
  return makeRequest('/users/me', 'GET', undefined, token);
} */

export function getUserInfo(token) {
  return makeRequest('/users/me', 'GET', undefined, token);
}

export function editUserInfo(newName, newJob, token) {
  return makeRequest('/users/me', 'PATCH', { name: newName, about: newJob }, token);
}

export function updateAvatar(avatar, token) {
  return makeRequest('/users/me/avatar', 'PATCH', { avatar }, token);
}

export function getInitialCards(token) {
  return makeRequest('/cards', 'GET', undefined, token);
}

export function postNewCard(card, token) {
  return makeRequest('/cards', 'POST', card, token);
}

export function deleteCard(cardId, token) {
  return makeRequest(`/cards/${cardId}`, 'DELETE', { cardId }, token);
}

export function likeCard(cardId, token) {
  return makeRequest(`/cards/${cardId}/likes`, 'PUT', { cardId }, token);
}

export function deleteLike(cardId, token) {
  return makeRequest(`/cards/${cardId}/likes`, 'DELETE', { cardId }, token);
}

/* export class Api {

  constructor({ baseUrl, headers }) {

    this._baseUrl = baseUrl;
    this._headers = headers;

  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getBackendUserInfo() {

    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  }

  editUserInfo(newName, newJob) {

    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        about: newJob
      })
    })
  }

  updateAvatar(avatar) {

    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      })
    })
  }

  getInitialCards() {

    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
  }

  postNewCard({ name, link }) {

    return this._request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      })
    })
  }

  deleteCard(cardId) {

    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  likeCard(cardId) {

    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
  }

  deleteLike(cardId) {

    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

} */

/* const api = new Api({
  baseUrl: 'https://api.gato.students.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'String'
  }
});

export default api; */