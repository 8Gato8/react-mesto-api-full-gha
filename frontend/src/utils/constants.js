export function checkIfCardIsLiked(card, currentUser) {
  return card.likes.some(id => id === currentUser._id);
}