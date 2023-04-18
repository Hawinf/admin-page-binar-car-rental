import { useDispatch, useSelector } from 'react-redux'
import { regisAction } from '../../redux/actions/regisAction'
import LoginImage from '../../assets/images/loginimage.png'
import LoginLogo from '../../assets/images/Rectangle62.png'
import './Register.css'
import { useDebugValue, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {
    const {regisReducer} = useSelector(state => state)
    // console.log(regisReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegis = () => {
        const payload = {
            email: email,
            password: password,
            role: 'Admin',
        }
        dispatch(regisAction(payload))
    }
    const handleRedirect = () => {
        setTimeout(() => {
            if (!!regisReducer.message.length) {
                navigate('/login')
            }
            
        }, 2000)
    }

    useEffect(() => {
        handleRedirect();
    },[regisReducer.message])
    // console.log(regisReducer.message)

    return (
        <div className='wrapper-login'>
            <div className='login-leftside'>
                <img className='loginimage' src={LoginImage}/>
            </div>
            <div className='login-rightside'>
                <img className='loginlogo' src={LoginLogo}/>
                <h1 className='judul-login'>Welcome, Admin BCR</h1>
                <p className='email-password'>Email</p>
                <input onChange={inputEmail} className='input' placeholder='Example@gmail.com' />
                <p className='email-password'>Password</p>
                <input onChange={inputPassword} className='input' placeholder='Password 6+ Character' />
                <div>
                    <button onClick={handleRegis} className='btn btn-primary w-100 mt-4'>Register</button>
                </div>
                <p className='text-center mt-3'>Have an account?
                        <Link to={'/login'}> Sign In</Link>   
                </p>
            </div>
        </div>
    )
}

export default Register