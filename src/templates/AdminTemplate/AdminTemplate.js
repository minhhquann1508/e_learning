import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../redux/types/Constant'
import AdminHeader from '../../pages/Admin/Header/AdminHeader';

let loaiNguoiDung = localStorage.getItem(USER_LOGIN);
if (loaiNguoiDung !== null) {
    loaiNguoiDung = JSON.parse(localStorage.getItem(USER_LOGIN)).maLoaiNguoiDung;
}

export default function AdminTemplate() {
    const navigate = useNavigate();
    useEffect(() => {
        if (loaiNguoiDung !== 'GV') {
            navigate('/login')

        }
    }, [])
    return (
        <Fragment>
            <AdminHeader />
            <Outlet />
        </Fragment>
    )
}
