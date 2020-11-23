export default {
    bookUrls: {
        getAllBooks: '/api/Books',
        add: '/api/Books/Add',
        update: '/api/Books/Update',
        getBookById: (id) => `/api/Books/GetById?id=${id}`,
        addComment: '/api/Books/AddComment',
        rateBook: '/api/Books/Rate',
        getUserRates: (bookId, userId) => `/api/Books/GetUserRates?bookId=${bookId}&userId=${userId}`
    },
    favoriteBookUrls: {
        addFavorite: '/api/FavoriteBooks/Add',
        getFavoritesByUserId: (userId) => `/api/FavoriteBooks/GetByUserId?id=${userId}`,
        deleteFavorite: '/api/FavoriteBooks/Delete'
    },
    authorUrls: {
        get: '/api/Authors',
        getById: (id) => `/api/Authors/GetById?id=${id}`,
        add: '/api/Authors/Add',
        update: '/api/Authors/Update'
    },
    userUrls: {
        getUser: (id) => `/api/User/GetById?id=${id}`,
        updateUser: '/api/User/Update',
        signIn: '/api/User/Login',
        signUp: '/api/User/Register',
        signUpAdmin: '/api/User/Register-Admin',
        signOut: '/api/User/Logout'
    },
    orderUrls: {
        add: '/api/Orders/Add',
        getByUserId: (userId) => `/api/Orders/GetByUserId?id=${userId}`,
        getPending: 'api/Orders/Pending',
        getAll: 'api/Orders',
        updateStatus: 'api/Orders/UpdateStatus'
    }
};
