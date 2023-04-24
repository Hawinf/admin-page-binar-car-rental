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
                <h1 className='list-car-judul'>List Car</h1>
                <button className='tomboh-add'>Add New Car</button>
            </div>

            <div className='option-button'>
                <button className='option-button-1'>All</button>
                <button className='option-button-2'>2 - 4 People</button>
                <button className='option-button-2'>4 - 6 People</button>
                <button className='option-button-2'>6 - 8 People</button>
            </div>

        </div>
    )
}

export default ListCar