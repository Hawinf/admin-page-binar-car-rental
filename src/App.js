import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './hoc/ProtectedRoutes';
import Discover from './pages/discover/Discover';
import CarList from './pages/carList/CarList';
import CarDetail from './pages/carDetail/CarDetail';
import AddNewCar from './pages/addNewCar/AddNewCar';
import Edit from './pages/edit/Edit';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Routes>
        <Route element={<ProtectedRoute />}>
            <Route path='/discovery' element={<Discover />} />
            <Route path='/car-list' element={<CarList />} />
            <Route path='/car-detail' element={<CarDetail />} />
            <Route path='/add-new-car' element={<AddNewCar />} />
            <Route path='/edit-car' element={<Edit />} />
        </Route>
        
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
