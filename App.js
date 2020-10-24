import React from 'react'
import { Routes } from './routes/routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { AppRegistry } from 'react-native'
export default function App() {
    return (
        <Routes />
    )
}
