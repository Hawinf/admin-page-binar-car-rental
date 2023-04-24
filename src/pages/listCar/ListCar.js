import Dashboard from '../dashboard/Dashboard'
import Vector1 from '../../assets/images/Vector1.png'
import Car from '../../assets/images/car.png'
import FiDelete from '../../assets/images/fi_trash-2.png'
import FiEdit from '../../assets/images/fi_edit.png'
import FiPlus from '../../assets/images/fi_plus.png'
import Category from '../../assets/images/fi_users.png'
import Update from '../../assets/images/fi_clock.png'
import './ListCar.css'

const ListCar = () => {
    return (
        <div>
            <Dashboard />
            <div className='dashboard-middle'>
                <p className='dashboard-title'>CARS</p>
                <p className='dashboard-option'>List Car</p>
            </div>

            <div className='dashboard-main'>
                <div className='dashboard-main-judul'>
                    <p className='judul-kiri'>Cars</p>
                    <img className='main-judul-sign' src={Vector1} />
                    <p className='judul-kanan'>List Car</p>
                </div>
            </div>

            <div className='add-list-cars'>
                <h1 className='list-car-judul'>List Car</h1>
                <button className='tomboh-add'>Add New Car</button>
            </div>

            <div className='option-button'>
                <button className='option-button-1'>All</button>
                <button className='option-button-2'>2 - 4 People</button>
                <button className='option-button-2'>4 - 6 People</button>
                <button className='option-button-2'>6 - 8 People</button>
            </div>

            <div className='card-list-cars'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={Car} />
                    </div>
                    <div className='card-details'>
                        <p className='nama-mobil'>Nama Mobil</p>
                        <h5 className='harga-sewa'>Harga Mobil Per Hari</h5>
                        <div className='kategori'>
                            <img className='kategori-image' src={Category} />
                            <p className='kategori-mobil'>Kategory</p>
                        </div>
                        <div className='kategori'>
                            <img className='kategori-image' src={Update} />
                            <p className='update-mobil'>Update at...</p>
                        </div>
                    </div>
                    <div className='card-button'>
                        <div className='button-delete'>
                            <img src={FiDelete} />
                            <button className='button-delete-1'>Delete</button>
                        </div>
                        <div className='button-edit'>
                            <img src={FiEdit} />
                            <button className='button-edit-1'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListCar