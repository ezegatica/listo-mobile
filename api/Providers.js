//Esta en proceso no funca todabía
import React from 'react'
import { AuthProvider } from './auth'
import { Routes } from '../routes/routes'

export const Providers = ({ }) => {
    return (
        <AuthProvider><Routes /></AuthProvider>
    )
}