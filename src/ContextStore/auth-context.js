import { createContext, useState } from "react";
const users = [
    {
        userId:'admin',
        name:'Admin',
        email:'admin@gmail.com',
        password:'admin@123',
        role:'admin'
    },
    {
        userId:'moh1',
        name:'moh 1',
        email:'moh1@gmail.com',
        password:'moh1@123',
        role:'employee'
    },
    {
        userId:'moh2',
        name:'moh 2',
        email:'moh2@gmail.com',
        password:'moh2@123',
        role:'employee'
    },
    {
        userId:'customer1',
        name:'Customer 1',
        email:'customer1@gmail.com',
        password:'customer1@123',
        role:'customer'
    },
    {
        userId:'customer2',
        name:'Customer 2',
        email:'customer2@gmail.com',
        password:'customer2@123',
        role:'customer'
    }
]
const checkUserData = (userData) =>{

    const isUserEmailExist = users.find(user=>user.email === userData.email)
    const isUserPasswordEXist = users.find(user=>user.password===userData.password)
    let token;
    let role;
    if(isUserEmailExist && isUserPasswordEXist)
    {
        token = users.find(user=>user.email === userData.email).userId
        role = users.find(user=>user.email === userData.email).role
        localStorage.setItem('role',role)
    }
    return {
        token:token,
        role:role
    }
}

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token')
    const initialRole = localStorage.getItem('role')
    const [token,setToken]  = useState(initialToken)
    const [role,setRole] = useState(initialRole)

    const loginHandler = (userData) =>{
        const token = checkUserData(userData)
        
        setToken(token.token)
        setRole(token.role)
       
        localStorage.setItem('token',token.token)
        localStorage.setItem('role',token.role)
    }

    const loguotHandler = () =>{
        setToken(null)
        setRole(null)
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    const contextValues = {
        token:token,
        login:loginHandler,
        logout:loguotHandler,
        isLoggedIn:!!token,
        role:role
    }

    return <AuthContext.Provider value={contextValues}>{props.children}</AuthContext.Provider>
}

const AuthContext = createContext({
    login:(token)=>{},
    logout:()=>{},
    token:'',
    isLoggedIn:false,
    role:''
})

export default AuthContext;
