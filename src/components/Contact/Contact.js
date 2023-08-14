import { useFormik } from 'formik'
import { values } from 'lodash';
import React, { Fragment } from 'react'
import Swal from 'sweetalert2'
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Không bỏ trống'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Không bỏ trống'),
    content: Yup
        .string()
        .required('Không bỏ trống'),
});
export default function Contact() {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            content: '',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            formik.resetForm()
            Swal.fire({
                icon: 'success',
                title: 'Thành công',
                text: 'Chúng tôi sẽ sớm liên hệ với bạn',
            })
        }
    })
    return (
        <Fragment>
            <section className="container py-20  dark:bg-gray-800 dark:text-gray-50" >
                <div className="grid py-10 max-w-full grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x" style={{ border: '1px solid black' }}>
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Liên hệ tư vấn</h1>
                        <p className="pt-2 pb-4">Điền các thông tin cần thiết để được tư vấn hỗ trợ</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+8412345678</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>udelearn@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col py-6 space-y-6 md:py-6 md:px-6">
                        <label className="block">
                            <span className="mb-1">Họ tên</span>
                            <input type="text" placeholder="Leroy Jenkins" onChange={formik.handleChange} value={formik.values.fullName} name='fullName' style={{ border: '1px solid black' }} className="block w-full py-2 px-4 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
                            {formik.touched.fullName && formik.values.fullName ? '' : <div className='text-red-600 my-1'>{formik.errors.fullName}</div>}
                        </label>
                        <label className="block">
                            <span className="mb-1">Địa chỉ email</span>
                            <input type="email" placeholder="leroy@jenkins.com" onChange={formik.handleChange} value={formik.values.email} name='email' style={{ border: '1px solid black' }} className="block w-full py-2 px-4 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
                            {formik.touched.email && formik.values.email ? '' : <div className='text-red-600 my-1'>{formik.errors.email}</div>}

                        </label>
                        <label className="block">
                            <span className="mb-1">Nội dung</span>
                            <textarea rows="3" style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.content} name='content' className="p-3 block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
                            {formik.touched.content && formik.values.content ? '' : <div className='text-red-600 my-1'>{formik.errors.content}</div>}
                        </label>
                        <button type="submit" className="text-white font-bold bg-purple-600 self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ri dark:bg-red-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}
