import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProviderWrapper = (props) => {

    const [loggedUser, setLoggedUser] = useState(null)

    return (
        <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }