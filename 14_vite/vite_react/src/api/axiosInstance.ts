import axios from 'axios'

// create an instance of axios, config basic request parameters
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, 
})

// request Interceptor: You can add authentication tokens and other additional request headers here.
axiosInstance.interceptors.request.use(
  (config) => {
    // add token
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // request error handler
    return Promise.reject(error)
  }
)

// response Interceptor: Process response data or handle error messages here.
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data  // response data
  },
  (error) => {
    // handle errors uniformly.
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default axiosInstance