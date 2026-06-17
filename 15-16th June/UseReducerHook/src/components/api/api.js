import axios from 'axios';
 
const api=axios.create(
    {
        baseURL: 'http://localhost:4000',
    }
)
 
api.interceptors.request.use(
    (config)=>{
        const token='admin123'
        if(token){
            config.headers['Authorization']=`Bearer ${token}`;
        }
        console.log('Request has been sent ',config )
        return config;
    }
)
 
export default api;