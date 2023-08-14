import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewTeacherAction, deletedUserAction, getUserByPageAction } from "../../redux/actions/Admin/AdminUserAction";
import { DeleteOutlined } from "@ant-design/icons";
import * as Yup from 'yup';
import { Modal } from 'antd';
import { useFormik } from "formik";
const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().
        min(3, 'Tài khoản quá ngắn')
        .required('Không bỏ trống trường này'),
    matKhau: Yup.string().
        min(3, 'Mật quá ngắn')
        .required('Không bỏ trống trường này'),
    hoTen: Yup.string().
        required('Không bỏ trống trường này'),
    soDT: Yup.string()
        .min(10, ' Số điện thoại phải đủ 10 ký tự số')
        .max(10, ' Số điện thoại phải đủ 10 ký tự số')
        .required('Không bỏ trống trường này'),
    maLoaiNguoiDung: Yup.string().
        required('Không bỏ trống trường này'),
    maNhom: Yup.string().
        required('Không bỏ trống trường này'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Không bỏ trống trường này')
});
export const UserTab = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [group, setGroup] = useState('GP01');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            email: '',
            soDT: '',
            maLoaiNguoiDung: 'GV',
            maNhom: 'GP01',
            matKhau: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            dispatch(addNewTeacherAction(values, setIsModalOpen, setIsFormSubmitted, formik.resetForm))
        },
    })
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        formik.handleSubmit();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { userByPage } = useSelector(state => state.AdminTabReducer)
    const Pagination = (data) => {
        let content = [];
        for (let index = 1; index <= data?.totalPages; index++) {
            if (index === data?.currentPage) {
                content.push(
                    <button key={index} type="button"
                        onClick={() => {
                            setPage(index)
                        }}
                        className="bg-black text-white inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800" title="Page 2">{index}</button>
                )
            }
            else {
                content.push(
                    <button key={index} type="button"
                        onClick={() => {
                            setPage(index)
                        }}
                        className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800 " title="Page 2">{index}</button>
                )
            }
        }
        return content;
    }
    const deleteUser = (taiKhoan) => {
        dispatch(deletedUserAction(taiKhoan))
            .then(() => {
                dispatch(getUserByPageAction(group, page, 20, ''))
            })

    }
    useEffect(() => {
        dispatch(getUserByPageAction(group, page, 20, ''))
    }, [page, group]);
    useEffect(() => {
        if (isFormSubmitted) {
            dispatch(getUserByPageAction(group, page, 20, ''));
            setIsFormSubmitted(false); // Đặt lại biến cờ thành false sau khi đã xử lý xong
        }
    }, [isFormSubmitted]);
    const renderTableContent = () => {
        if (userByPage?.items.length === 0) {
            return (
                <tr>
                    Không có người dùng phù hợp
                </tr>
            )
        }
        else {
            return userByPage?.items.map((user, index) => {
                return (
                    <tr key={index}>
                        <td className="px-3 py-2">
                            <p>{user.taiKhoan ? user.taiKhoan : ''}</p>
                        </td>
                        <td className="px-3 py-2">
                            <p className="dark:text-gray-400">{user.hoTen ? user.hoTen : 'Error'}</p>
                        </td>
                        <td className="px-3 py-2">
                            <p>{user.soDT ? user.soDT : 'Error'}</p>
                        </td>
                        <td className="px-3 py-2">
                            <p>{user.maNhom ? user.maNhom : group}</p>
                        </td>
                        <td className="px-3 py-2">
                            <p>{user.email ? user.email : ''}</p>
                        </td>
                        <td className="px-3 py-2">
                            <button type="button" title="Open details"
                                onClick={() => {
                                    deleteUser(user.taiKhoan)
                                }}
                                className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
                                <DeleteOutlined style={{ backgroundColor: '#dc2626', color: '#fff' }} className="px-2 py-1 text-lg rounded-lg" />
                            </button>
                        </td>
                    </tr>
                )
            })
        }
    }


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <span className="mx-2 text-lg font-bold">Mã nhóm:</span>
                    <select style={{ border: '1px solid black' }} className='mx-2 py-1 px-1' onChange={(e) => {
                        const groupValue = e.target.value;
                        setGroup(groupValue)
                    }}>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                        <option value="GP03">GP03</option>
                        <option value="GP04">GP04</option>
                        <option value="GP05">GP05</option>
                    </select>
                    <input style={{ border: '1px solid black' }} type="search" name="search"
                        onChange={(e) => {
                            dispatch(getUserByPageAction(group, page, 20, e.target.value))
                        }}
                        placeholder="Search..." className="w-32 py-1 px-1 pl-2 text-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                </div>
                <button className="bg-black text-white py-2 px-3 rounded-full text-md" onClick={showModal}>Thêm giảng viên</button>
                <Modal title="Thêm giảng viên" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <section className="dark:bg-gray-800 dark:text-gray-50">
                        <form onSubmit={formik.handleSubmit} className="flex flex-col mx-auto space-y-12">
                            <fieldset className="grid grid-cols-4 gap-6 py-6 rounded-md shadow-sm dark:bg-gray-900">
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="firstname" className="text-sm">Tài khoản</label>
                                        <input style={{ border: '1px solid black' }} name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} id="firstname" type="text" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                        {formik.touched.taiKhoan === true && formik.errors.taiKhoan === '' ? '' : <div className="text-red-600">{formik.errors.taiKhoan}</div>}
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="lastname" className="text-sm">Mật khẩu</label>
                                        <input style={{ border: '1px solid black' }} name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} id="lastname" type="password" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                        {formik.touched.matKhau === true && formik.errors.matKhau === '' ? '' : <div className="text-red-600">{formik.errors.matKhau}</div>}
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="email" className="text-sm">Họ tên</label>
                                        <input style={{ border: '1px solid black' }} name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} id="email" type="text" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                        {formik.touched.hoTen === true && formik.errors.hoTen === '' ? '' : <div className="text-red-600">{formik.errors.hoTen}</div>}
                                    </div>
                                    <div className="col-span-3">
                                        <label for="address" className="text-sm">Số điện thoại</label>
                                        <input style={{ border: '1px solid black' }} name="soDT" id="address" onChange={formik.handleChange} value={formik.values.soDT} type="text" placeholder="" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                        {formik.touched.soDT === true && formik.errors.soDT === '' ? '' : <div className="text-red-600">{formik.errors.soDT}</div>}
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="city" className="text-sm">Mã nhóm</label>
                                        <select name="maNhom" style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.maNhom} className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900">
                                            <option value="GP01">GP01</option>
                                            <option value="GP02">GP02</option>
                                            <option value="GP03">GP03</option>
                                            <option value="GP04">GP04</option>
                                            <option value="GP05">GP05</option>
                                        </select>
                                        {formik.touched.maNhom === true && formik.errors.maNhom === '' ? '' : <div className="text-red-600">{formik.errors.maNhom}</div>}
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label for="state" className="text-sm">Email</label>
                                        <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.email} name="email" id="state" type="email" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                        {formik.touched.email === true && formik.errors.email === '' ? '' : <div className="text-red-600">{formik.errors.email}</div>}
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                </Modal>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                    <colgroup>
                        <col className="w-5"></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col className="w-5"></col>
                    </colgroup>
                    <thead>
                        <tr className="dark:bg-gray-700">
                            <th className="p-3">Tài khoản</th>
                            <th className="p-3">Họ tên</th>
                            <th className="p-3">SĐT</th>
                            <th className="p-3">Mã nhóm</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">
                                Tùy chọn
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                        {renderTableContent()}
                    </tbody>
                </table>
                <div className="mt-10 flex justify-center space-x-1 dark:text-gray-100">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    {Pagination(userByPage)}
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}