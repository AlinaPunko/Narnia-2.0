import api from 'helpers/requestHelper';
import serviceUrls from 'constants/serviceUrls';

function signUp(data) {
    return api.post(serviceUrls.userUrls.signUp, data);
}

function signUpAdmin(data) {
    return api.post(serviceUrls.userUrls.signUpAdmin, data);
}


export default { signUp, signUpAdmin };
