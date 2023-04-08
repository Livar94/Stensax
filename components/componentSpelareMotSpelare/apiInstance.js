// apiInstance.js
import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://192.168.0.6:8080',
    timeout: 20000, // Set the timeout to 10 seconds (10000 ms)
});

export default apiInstance;
