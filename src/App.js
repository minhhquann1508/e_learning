import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import Infomation from './pages/Infomation/Infomation'
import Category from './pages/Category/Category'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/Login/Login';
import FormTemplate from './templates/FormTemplate/FormTemplate';
import Register from './pages/Register/Register';
import User from './pages/User/User';
import Detail from './pages/Detail/Detail'
import Loading from './components/Loading/Loading';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Admin from './pages/Admin/Admin';
import Search from './pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route element={<HomeTemplate />} >
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='category/:type' element={<Category />} />
          <Route path='event' element={<Event />} />
          <Route path='infomation' element={<Infomation />} />
          <Route path='user/:userName' element={<User />} />
          <Route path='search/:keyword' element={<Search />} />
          <Route path='detail/:courseId' element={<Detail />} />
        </Route>
        <Route element={<FormTemplate />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route >
        <Route element={<AdminTemplate />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
