import axios, { Axios } from "axios"

export const loginAction = (payload) => (dispatch) => {
    axios 
        .post('https://bootcamp-rent-cars.herokuapp.com/admin/auth/login', payload)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.access_token)
            dispatch({
                type: 'LOGIN',
                payload: true,
            })
            // console.log(res)
        })
        // console.log(res)
        .catch((err) => console.log(err))
}

export const handleLogOut = (payload) => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: 'LOGOUT',
        payload: false
    })
}