import Dashboard from '../dashboard/Dashboard'
import Vector1 from '../../assets/images/Vector1.png'
import Car from '../../assets/images/car.png'
import FiDelete from '../../assets/images/fi_trash-2.png'
import FiEdit from '../../assets/images/fi_edit.png'
import { Link, useParams } from 'react-router-dom';
import { handleEdit } from '../../redux/actions/carAction'
import { useState } from 'react'
import './Edit.css'
import { useDispatch, useSelector } from 'react-redux'

const Edit = () => {

    const {state} = useSelector(state => state)
    console.log(state)

    const dispatch = useDispatch()
    const {id} = useParams()

    const [nameCar, setNameCar] = useState('')
    const [categoryCar, setCategoryCar] = useState('')
    const [priceCar, setPriceCar] = useState('')
    const [imageCar, setImageCar] = useState(null)

    const handleName = (e) => {
        setNameCar(e.target.value)
    }
    const handleCategory = (e) => {
        setCategoryCar(e.target.value)
    }
    const handlePrice = (e) => {
        setPriceCar(e.target.value)
    }
    const handleImage = (e) => {
        setImageCar(e.target.files[0])
    }

    const klikEdit = () => {
        const formData = new FormData()
            formData.append('name', nameCar)
            formData.append('price', priceCar)
            formData.append('category', categoryCar)
            formData.append('image', imageCar)

            dispatch(handleEdit(id, formData))
    }

    return (
        <div className='wrapper-edit'>
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
                    <p className='judul-kanan'>Edit Car</p>
                </div>
            </div>

            <div className='add-list-cars mt-5'>
                <h1 className='list-car-judul'>Edit Car</h1>
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
                    <button onClick={klikEdit} className='save-tombol'>
                        Save
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Edit