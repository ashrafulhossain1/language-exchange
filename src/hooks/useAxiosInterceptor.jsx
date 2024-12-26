import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://language-express-server-a-10.vercel.app',
    withCredentials: true
})


const useAxiosInterceptor = () => {
    return axiosInstance;
};

export default useAxiosInterceptor;