import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signInUserAction } from '../../redux/actions/ManageUserAction/ManageUserAction';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()
        .min(2, 'Tài khoản quá ngắn')
        .max(50, 'Tài khoản quá dài')
        .required('Không bỏ trống'),
    matKhau: Yup.string()
        .min(2, 'Mật khẩu quá ngắn')
        .required('Không bỏ trống'),
    soDT: Yup.string()
        .min(10, 'Số điện thoại phải đủ 10 ký tự')
        .max(10, 'Số điện thoại phải đủ 10 ký tự')
        .required('Không bỏ trống'),
    hoTen: Yup.string()
        .required('Không bỏ trống'),
    email: Yup.string().email('Email không hợp lệ').required('Không bỏ trống'),
    maNhom: Yup.string().required('Không bỏ trống'),
});
export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            dispatch(signInUserAction(values))
        },
    });
    return (
        <div className='container flex justify-center' style={{ paddingTop: '96px', minHeight: 500 }}>
            <div className='my-28'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 border-black" style={{ minWidth: 400 }}>
                    <h1 className="text-4xl font-bold text-center">Đăng ký</h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div className='flex justify-between gap-6'>
                            <div className="space-y-1 text-sm">
                                <label for="username" className="block">Tài khoản</label>
                                <input type="text" name="taiKhoan" placeholder="Username"
                                    onChange={formik.handleChange}
                                    value={formik.values.taiKhoan}
                                    className=" border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                                {formik.touched.taiKhoan && formik.errors.taiKhoan ? '' : <div className='text-red-600'>{formik.errors.taiKhoan}</div>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label for="password" className="block">Mật khẩu</label>
                                <input type="password" name="matKhau" id="password" placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.matKhau}
                                    className="border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                                {formik.touched.matKhau && formik.errors.matKhau ? '' : <div className='text-red-600'>{formik.errors.matKhau}</div>}
                            </div>
                        </div>
                        <div className='flex justify-between gap-6'>
                            <div className="space-y-1 text-sm">
                                <label for="username" className="block">Số điện thoại</label>
                                <input type="text" name="soDT" placeholder="+84..."
                                    value={formik.values.soDT}
                                    onChange={formik.handleChange}
                                    className=" border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                                {formik.touched.soDT && formik.errors.soDT ? '' : <div className='text-red-600'>{formik.errors.soDT}</div>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label for="username" className="block">Họ tên</label>
                                <input type="text" name="hoTen" placeholder="Full name"
                                    value={formik.values.hoTen}
                                    onChange={formik.handleChange}
                                    className=" border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                                {formik.touched.hoTen && formik.errors.hoTen ? '' : <div className='text-red-600'>{formik.errors.hoTen}</div>}
                            </div>
                        </div>
                        <div className='flex justify-between gap-6'>
                            <div className="space-y-1 text-sm" style={{ width: '50%' }}>
                                <label for="username" className="block">Mã nhóm</label>
                                <select name="maNhom"
                                    onChange={formik.handleChange}
                                    value={formik.values.maNhom}
                                    className=" border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600">
                                    <option value="GP01">GP01</option>
                                    <option value="GP02">GP02</option>
                                    <option value="GP03">GP03</option>
                                    <option value="GP04">GP04</option>
                                    <option value="GP04">GP05</option>
                                </select>
                                {formik.touched.maNhom && formik.errors.maNhom ? '' : <div className='text-red-600'>{formik.errors.maNhom}</div>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block">Email</label>
                                <input type="email" name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="abc@gmail.com" className=" border-2 border-black w-full px-4 py-3 rounded-md focus:outline-purple-600" />
                                {formik.touched.email && formik.errors.email ? '' : <div className='text-red-600'>{formik.errors.email}</div>}
                            </div>
                        </div>
                        <button type='submit' className="block w-full p-3 text-center rounded-lg bg-purple-600 text-white font-bold">Đăng ký</button>
                    </form>
                    <p className="text-sm text-center sm:px-k">Bạn đã có tài khoản?
                        <NavLink rel="noopener noreferrer" to='/register' className="underline text-purple-600">Đăng nhập</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}
