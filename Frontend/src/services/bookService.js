import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function getAll() {
    const books = await api.get(serviceUrls.bookUrls.getAllBooks);
    return books;
}

async function getById(id) {
    const book = await api.get(serviceUrls.bookUrls.getBookById(id));
    return book;
}

async function add(item) {
    const result = await api.post(serviceUrls.bookUrls.add, item);
    return result;
}

async function update(item) {
    const result = await api.put(serviceUrls.bookUrls.update, item);
    return result;
}

async function rate(item) {
    const result = await api.post(serviceUrls.bookUrls.rateBook, item);
    return result;
}

async function getUserRates(bookId, userId) {
    const result = await api.get(serviceUrls.bookUrls.getUserRates(bookId, userId));
    return result;
}

async function addComment(comment) {
    const result = await api.post(serviceUrls.bookUrls.addComment, comment);
    return result;
}

export default {
    getAll,
    getById,
    add,
    update,
    addComment,
    rate,
    getUserRates
};
