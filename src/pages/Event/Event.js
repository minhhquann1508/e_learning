import React from 'react'
import { ERROR_IMG_PAGE } from '../../util/constant/constant'
import { NavLink } from 'react-router-dom'

export default function Event() {
    return (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src={ERROR_IMG_PAGE} alt="error page" className="w-100 h-80 dark:text-gray-600" />
                <p className="text-3xl">Thông tin đang được cập nhật</p>
                <NavLink to='/home' className='text-lg text-bold rounded-md bg-purple-600 px-5 py-2 text-white'>Trở về trang chủ</NavLink>
            </div>
        </section>
    )
}
