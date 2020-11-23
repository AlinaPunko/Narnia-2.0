function isFavorite(book, favoriteBooks) {
    const isInFavoriteBooks = (element) => element.id === book.id;
    return favoriteBooks.some(isInFavoriteBooks);
}

export default { isFavorite };
