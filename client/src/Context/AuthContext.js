import { createContext, useCallback, useEffect, useState } from "react";
import { api } from "../Api/api";
import { useFetcher, useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [ user , setUser ] = useState(null);
    const [ error , setError ] = useState(null);
    const navigate = useNavigate();
    const [ registerInfo, setRegisterInfo ] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [ loginUserInfo, setLoginUserInfo ] = useState({
        email: "",
        password: ""
    })

    console.log(loginUserInfo);
    useEffect(()=>{
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
    },[])


    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    },[])

    const updateloginUserInfo = useCallback((info) => {
        setLoginUserInfo(info)
    },[])

    const logoutUser = () => {
        localStorage.removeItem("User")
        setUser(null)
    }

    const registerUser = useCallback(async () => {

        await api.post('user/register', registerInfo).then((response) => {
            setError(null)
            setRegisterInfo({
                name: "",
                email: "",
                password: ""
             })
            // navigate('/login')
            localStorage.setItem("User" , JSON.stringify(response.data))
            setUser(response.data)
        })
        .catch((error) => {
            console.log(error.response.data);
            setError(error.response.data)
        })
    },[registerInfo])

    const loginUser = useCallback(async () => {

        await api.post('user/login', loginUserInfo).then((response) => {
            setError(null)
            setLoginUserInfo({
                email: "",
                password: ""
             })
            // navigate('/login')
            localStorage.setItem("User" , JSON.stringify(response.data))
            setUser(response.data)
        })
        .catch((error) => {
            console.log(error.response.data);
            setError(error.response.data)
        })
    },[loginUserInfo])

    return (
        <AuthContext.Provider value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            error,
            logoutUser,
            loginUser,
            updateloginUserInfo,
            loginUserInfo
         }}>
            {children}
        </AuthContext.Provider>
    )
}