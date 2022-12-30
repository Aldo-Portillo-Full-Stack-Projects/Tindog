import axios from "axios"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
 
export const registerUser = async (userData) => {
    try{    
        const response = await axios.post(`${BACKEND_URL}/api/user/register`, userData, {withCredentials: true});
        if (response.statusText === "OK") {
            console.log("Registered Successfully")
        }
        return response.data
    } catch(err){
        const message = (err.response && err.response.data && err.response.data.message)|| err.message || err.toString();
        console.log(message)
        
    }
}

export const loginUser = async (userData) => {
    try{    
        const response = await axios.post(`${BACKEND_URL}/api/user/login`, userData);
        if (response.statusText === "OK") {
            console.log("Login Successful")
        }
        return response.data
    } catch(err){
        const message = (err.response && err.response.data && err.response.data.message)|| err.message || err.toString();
        console.log(message)
        
    }
}

export const logoutUser = async () => {
    try{    
        await axios.get(`${BACKEND_URL}/api/user/logout`);
    } catch(err){
        const message = (err.response && err.response.data && err.response.data.message)|| err.message || err.toString();
        console.log(message)
        
    }
}

export const getLoginStatus = async () => {
    try{    
        const response = await axios.get(`${BACKEND_URL}/api/user/loggedin`);
        return response.data
    } catch(err){
        const message = (err.response && err.response.data && err.response.data.message)|| err.message || err.toString();
        console.log(message)
        
    }
}

//Get user Profile

export const getUser = async () => {
    try{    
        const response = await axios.get(`${BACKEND_URL}/api/user/getuser`);
        return response.data
    } catch(err){
        const message = (err.response && err.response.data && err.response.data.message)|| err.message || err.toString();
        console.log(message)
        
    }
}