import { makeRequest } from "./makeRequest";

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