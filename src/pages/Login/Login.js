import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/ManageUserAction/ManageUserAction';
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        onSubmit: async (values) => {
            dispatch(loginAction(values));
            navigate(-1)
        },
    })
    return (
        <div className='container flex justify-center' style={{ paddingTop: '96px', minHeight: 500 }}>
            <div className='my-28'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-black" style={{ minWidth: 350 }}>
                    <h1 className="text-4xl font-bold text-center">Đăng nhập</h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-400">Tài khoản</label>
                            <input onChange={formik.handleChange} type="text" name="taiKhoan" id="username" placeholder="Username" className=" border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-400">Mật khẩu</label>
                            <input onChange={formik.handleChange} type="password" name="matKhau" id="password" placeholder="Password" className="border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                        </div>
                        <button type='submit' className="block w-full p-3 text-center rounded-lg bg-purple-600 text-white font-bold">Đăng nhập</button>
                    </form>
                    <p className="text-sm text-center sm:px-6 dark:text-gray-400">Bạn chưa có tài khoản?
                        <NavLink rel="noopener noreferrer" to='/register' className="underline text-purple-600">Đăng ký ngay</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}
