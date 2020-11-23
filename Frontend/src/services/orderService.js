import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

async function add(order) {
    const result = await api.post(serviceUrls.orderUrls.add, order);
    return result;
}

async function getPending() {
    const result = await api.get(serviceUrls.orderUrls.getPending);
    return result;
}

async function getAll() {
    const result = await api.get(serviceUrls.orderUrls.getAll);
    return result;
}

async function getByUserId(id) {
    const result = await api.get(serviceUrls.orderUrls.getByUserId(id));
    return result;
}

async function UpdateStatus(order) {
    const result = await api.put(serviceUrls.orderUrls.updateStatus, order);
    return result;
}

export default {
    add, getPending, getByUserId, getAll, UpdateStatus
};
