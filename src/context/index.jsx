import React,
{
    createContext,
    useContext,
    useState,
    
} from 'react'

const AuthContext = createContext("");

function AuthProvider({ children }) {

    const [user, setUser] = useState({});

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}