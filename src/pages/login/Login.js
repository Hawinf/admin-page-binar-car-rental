import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { loginAction } from '../../redux/actions/loginAction'
import { useNavigate } from 'react-router-dom'
import LoginImage from '../../assets/images/loginimage.png'
import LoginLogo from '../../assets/images/Rectangle62.png'
import './Login.css'

const Login = () => {

    const {loginReducer} = useSelector(state => state)

    console.log(loginReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [em, setEm] = useState('')
    const [pass,  setPass] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    },[])

    const handleRedirect = () => {
        setTimeout(() => {
            if (loginReducer.message === true) {
                navigate('/discovery')
            }
        }, 2000)
    }

    useEffect(() => {
        handleRedirect()
    },[loginReducer.message])

    const inputEm = (e) => {
        setEm(e.target.value)
    }
    const inputPass = (e) => {
        setPass(e.target.value)
    }
    const handleLogin = () => {
        const payload = {
            email: em,
            password: pass
        }
        dispatch(loginAction(payload))
    }


    return (
        <div className='wrapper-login'>
            <div className='login-leftside'>
                <img className='loginimage' src={LoginImage}/>
            </div>
            <div className='login-rightside'>
                <img className='loginlogo' src={LoginLogo}/>
                <h1 className='judul-login'>Welcome, Admin BCR</h1>
                <p className='email-password'>Email</p>
                <input className='input' onChange={inputEm} placeholder='Example@gmail.com' />
                <p className='email-password'>Password</p>
                <input className='input' onChange={inputPass} placeholder='Password 6+ Character' />
                <div>
                    <button onClick={handleLogin}  className='btn btn-primary w-100 mt-4'>Log In</button>
                    { loginReducer.isLogin ? <h1>Success To Log In</h1> : null}
                </div>
            </div>
        </div>
    )
}

export default Login