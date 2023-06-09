import Rectangle62 from '../../assets/images/Rectangle62.png'
import Rectangle63 from '../../assets/images/Rectangle63.png'
import Fimenu from '../../assets/images/fi_menu.png'
import Fitruck from '../../assets/images/fi_truck.png'
import Group from '../../assets/images/Group2.png'
import Vector from '../../assets/images/Vector.png'
import Vector1 from '../../assets/images/Vector1.png'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='wrapper-dashboard'>

            <div className='dashboard-top'>
                <div className='dashboard-logo'>
                    <Link to='/dashboard'>
                        <img className='logo-1' src={Rectangle62} />
                    </Link>
                    <button className='tombol-1'>
                        <img className='logo-2' src={Fimenu} />
                    </button>
                </div>
                <div className='dashboard-search'>
                    <input className='search' placeholder='Search' />
                    <button className='tombol-0'>Search</button>
                    <p className='first-letter'>H</p>
                    <p className='user'>User Email</p>
                    <img className='vector' src={Vector} />
                </div>
            </div>

            <div className='dashboard-left text-center'>
                <div className='logo-3'>
                    <Link to='/dashboard'>
                        <button className='tombol-2'>
                            <img src={Rectangle63} />
                        </button>
                    </Link>
                </div>
                <div className='logo-3'>
                    <Link to='/dashboard'>
                        <button className='tombol-2'>
                            <img src={Group} />
                        </button>
                    </Link>
                </div>
                <div className='logo-3'>
                    <Link to='/list-cars'>
                        <button className='tombol-2'>
                            <img src={Fitruck} />
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Dashboard