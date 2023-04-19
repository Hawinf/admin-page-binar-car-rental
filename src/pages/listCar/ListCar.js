import Dashboard from '../dashboard/Dashboard'
import Vector1 from '../../assets/images/Vector1.png'
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
                <h1>List Car</h1>
                <button>Add New Car</button>
            </div>

        </div>
    )
}

export default ListCar