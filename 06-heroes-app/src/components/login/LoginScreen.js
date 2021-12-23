import React, { useReducer, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { authReducer } from '../auth/authReducer'
import { types } from '../types/types'

export const LoginScreen = () => {
    const navigate = useNavigate()
    const { user, dispatch } = useContext(AuthContext)
    const handleLogin = () => {
        console.log('handleLogin!')
        const action = {
            type: types.login,
            payload: {
                name: 'cristopher molina'
            }
        }
        dispatch(action)
        const lastPath = localStorage.getItem('lastPath') || '/marvel'
        navigate(lastPath, {
            replace: true
        })
    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }>
                    Login
                </button>
        </div>
    )
}
