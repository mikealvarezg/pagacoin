import axios from 'axios';
import Swal from 'sweetalert2';

const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
    (config) => {
        config.params = { ...config.params }
        return { ...config };
    },
    (error) => {
        console.log('Request error', error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.data) {
                Swal.fire({
                    title: error.response.data.error,
                    text: error.response.data.message,
                    icon: 'error',
                })
            } else {
                Swal.fire({
                    title: error.response.status,
                    icon: 'error',
                })
            }
        } else if (error.request) {
            Swal.fire({
                text: 'The request was made but no response was received',
                icon: 'error',
            })
        } else {
            Swal.fire({
                text: 'Something happened in setting up the request',
                icon: 'error',
            })
        }
        return Promise.reject(error);
    }
);

export const pagacoinAPI = instance;