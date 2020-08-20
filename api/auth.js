//este archivo es para fijarme si el usuario esta logeado ya sea despues de cerrar y abrir 
//la aplicación. 
//est en proceso no funca todavia
import React, { useState, createContext } from 'react'
import { AsyncStorage } from 'react-native'

export const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                /*const fakeUser = { mail: ' Shlamovitzd@gmail.com' }
                setUser(fakeUser)
                AsyncStorage.setItem('user', JSON.stringify(fakeUser))*/
                return 'hola';
            },
            logout: () => {
                AsyncStorage.removeItem('user')
                setUser(null)
            },
        }}>
            {children}
        </AuthContext.Provider>
    )
}