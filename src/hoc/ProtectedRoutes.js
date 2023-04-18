
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const Navigate = useNavigate()

    // PART 1
    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLogin(false);
            setLoading(false);
        } else {
            setIsLogin(true);
            setLoading(false)
        }
    }, [isLogin]);

    // PART 2
    if (loading) {
        return 'loading';
    }

    // PART 3 
    return isLogin ? <Outlet /> : <Navigate to='/login' />
}
