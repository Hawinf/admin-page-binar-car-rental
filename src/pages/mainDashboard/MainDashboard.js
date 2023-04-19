import Dashboard from '../dashboard/Dashboard'
import Vector1 from '../../assets/images/Vector1.png'
import './MainDashboard.css'

const MainDashboard = () => {
    return (
        <div className='maindashboard-wrapper'>
            <Dashboard />
            <div className='dashboard-middle'>
                <p className='dashboard-title'>DASHBOARD</p>
                <p className='dashboard-option'>Dashboard</p>
            </div>

            <div className='dashboard-main'>
                <div className='dashboard-main-judul'>
                    <p className='judul-kiri'>Dashboard</p>
                    <img className='main-judul-sign' src={Vector1} />
                    <p className='judul-kanan'>Dashboard</p>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard
