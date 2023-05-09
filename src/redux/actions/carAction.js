import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const getCars = (configurasi) => (dispatch) => {
    axios
        .get('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car', configurasi)
        .then((res) => {
            console.log(res)
            dispatch({
                type: 'GET_ALL_CARS',
                payload: res.data.cars,
            })
        })
        .catch((err) => console.log(err))
}

export const handleAddCar = (formData) => dispatch => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            access_token : token
        }
    }
    axios
        .post('https://bootcamp-rent-cars.herokuapp.com/admin/car',formData, config)
        .then((res) => {
            console.log(res)

            dispatch({
                type: 'ADD_NEW_CAR',
                payload : res.statusText
            })
        })
        .catch((err) => console.log(err))
}