export default {
    title: {
        fieldName: 'Title',
        rule: 'required'
    },
    price: {
        fieldName: 'Name',
        rule: 'required|numeric|min:0,num'
    },
    publishingYear: {
        fieldName: 'Publishing year',
        rule: 'required|numeric|min:0,num|max:2020,num'
    },
    image: {
        fieldName: 'Image',
        rule: 'required'
    },
    description: {
        fieldName: 'Description',
        rule: 'required'
    },
    pagesCount: {
        fieldName: 'PagesCount',
        rule: 'required|numeric|min:0,num'
    },
    count: {
        fieldName: 'Count',
        rule: 'required|numeric|min:0,num'
    }
};
