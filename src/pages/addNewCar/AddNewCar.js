import Dashboard from '../dashboard/Dashboard'
import Vector1 from '../../assets/images/Vector1.png'
import './AddNewCar.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddCar } from '../../redux/actions/carAction'

const AddNewCar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    console.log(state, 'this is state result')

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const klikAddCar = () => {
        const formData = new FormData();
            formData.append('name', name)
            formData.append('category', category)
            formData.append('price', price)
            formData.append('image', image)

            dispatch(handleAddCar(formData))
    }

    useEffect(() => {
        if(state.carReducers.message !== '') {
            alert(state.carReducers.message)
        }
        handleRedirect()
    },[state.carReducers.message])

    const handleRedirect = () => {
        setTimeout(() => {
            if(state.carReducers.message !== '') {
                navigate('/list-cars')
            }
        }, 1000)
    }

    return (
        <div className='wrapper-addnewcar'>
            <Dashboard />

            <div className='dashboard-middle'>
                <p className='dashboard-title'>CARS</p>
                <p className='dashboard-option'>List Car</p>
            </div>

            <div className='dashboard-main'>
                <div className='dashboard-main-judul'>
                    <p className='judul-kiri'>Cars</p>
                    <img className='main-judul-sign' src={Vector1} />
                    <p className='judul-kiri'>List Car</p>
                    <img className='main-judul-sign' src={Vector1} />
                    <p className='judul-kanan'>List Car</p>
                </div>
            </div>

            <div className='add-list-cars mt-5'>
                <h1 className='list-car-judul'>Add New Car</h1>
            </div>

            <div className='main-input'>
                <div className='input-data'>
                    <p className='input-title'>Nama/Tipe Mobil*</p>
                    <input onChange={handleName} className='input-card' placeholder='Input Nama/Tipe Mobil'/>
                </div>
                <div className='input-data'>
                    <p className='input-title'>Harga*</p>
                    <input onChange={handlePrice} className='input-card' placeholder='Input Harga Sewa Mobil'/>
                </div>
                <div className='input-data'>
                    <p className='input-title'>Foto*</p>
                    <input onChange={handleImage} type='file' placeholder='Upload Foto Mobil' />
                </div>
                <div className='input-data'>
                    <p className='input-title'>Kategory</p>
                    <select onClick={handleCategory} placeholder='Kategory'>
                        <option value='small'>
                            2 - 4 Orang
                        </option>
                        <option value='medium'>
                            4 - 6 Orang
                        </option>
                        <option value='large'>
                            6 - 8 Orang
                        </option>
                    </select>
                </div>
                <div className='input-data'>
                    <p className='input-title'>Created at</p>
                    <p>-</p>
                </div>
                <div className='input-data'>
                    <p className='input-title'>Updated at</p>
                    <p>-</p>
                </div>
                <div className='cancel-save'>
                    <Link to={'/list-cars'} className='cancel-tombol'>
                        Cancel
                    </Link>
                    <button onClick={klikAddCar} className='save-tombol'>
                        Save
                    </button>
                </div>
            </div>
            

        </div>
    )
}

export default AddNewCar