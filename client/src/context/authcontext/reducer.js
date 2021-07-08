// import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : ''

export const initialState = {
  user: '' || user,
  isLogged: user ? true : false,
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_REGISTER':
      return {
        ...initialState,
        loading: true,
      }

    case 'REGISTER_SUCCESS':
      return {
        ...initialState,
        // user: action.payload.user,
        // isLogged: true,
        loading: false,
      }

    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true,
      }

    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        isLogged: true,
        loading: false,
      }

    case 'LOGOUT':
      return {
        ...initialState,
        user: '',
        isLogged: false,
      }

    case 'REGISTER_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }

    case 'LOGOUT_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
