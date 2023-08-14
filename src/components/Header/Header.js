import React, { Fragment } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, USER_LOGIN } from '../../redux/types/Constant';
const items = [
    {
        label: 'Khóa học Frontend',
        key: 'FrontEnd',
    },
    {
        label: 'Khóa học Backend',
        key: 'BackEnd',
    },
    {
        label: 'Khóa học FullStack',
        key: 'FullStack',
    },
    {
        label: 'Khóa học tư duy',
        key: 'TuDuy',
    },
    {
        label: 'Khóa học Design',
        key: 'Design',
    },
];
export default function Header() {
    const navigate = useNavigate();
    const onClick = ({ key }) => {
        navigate(`/category/${key}`)
    };
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    const renderOptionUser = () => {
        if (userLogin === null) {
            return (
                <Fragment>
                    <NavLink to='/login' type="button" style={{ border: '1px solid #000', color: '#000' }} className="px-4 py-2 font-semibold">Đăng nhập</NavLink>
                    <NavLink to='/register' type="button" style={{ border: '1px solid #fff', color: '#fff' }} className="px-4 py-2 font-semibold bg-black">Đăng ký</NavLink>
                </Fragment>
            )
        }
        else {
            if (userLogin.maLoaiNguoiDung === 'GV') {
                return (
                    <Fragment>
                        <NavLink to='/admin' className='bg-black text-white flex justify-center items-center px-3 py-2 rounded-full' style={{ border: '1px solid black' }}>
                            Chuyển đến trang admin
                        </NavLink>
                        <button type="button" style={{ border: '1px solid black' }}
                            onClick={() => {
                                localStorage.removeItem(USER_LOGIN);
                                localStorage.removeItem(ACCESS_TOKEN);
                                navigate('/')
                                window.location.reload()
                            }}
                            className="px-4 py-2 font-bold rounded-full dark:border-gray-100 dark:text-gray-100">Đăng xuất</button>
                    </Fragment>
                )
            }
            else {
                return (
                    <Fragment>
                        <NavLink to={`user/${userLogin.taiKhoan}`} className='bg-black flex justify-center items-center text-white w-10 h-10 rounded-full' style={{ border: '1px solid black' }}>
                            <i className="fa-solid fa-user"></i>
                        </NavLink>
                        <button type="button" style={{ border: '1px solid black' }}
                            onClick={() => {
                                localStorage.removeItem(USER_LOGIN);
                                localStorage.removeItem(ACCESS_TOKEN);
                                navigate('/')
                                window.location.reload()
                            }}
                            className="px-4 py-2 font-bold rounded-full dark:border-gray-100 dark:text-gray-100">Đăng xuất</button>
                    </Fragment>
                )
            }
        }
    }
    return (
        <header className="p-4 w-full z-10" style={{ boxShadow: '0 3px 5px rgba(0,0,0,0.3)', backgroundColor: '#fff', position: 'fixed', top: 0, left: 0 }}>
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink rel="noopener noreferrer" exact to='home' aria-label="Back to homepage" className="flex items-center p-2 font-bold text-2xl">
                    UDELEARN
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="text-center flex items-center px-4 -mb-1">
                            <Dropdown
                                menu={{
                                    items: items.map(item => ({ label: item.label, key: item.key })),
                                    onClick,
                                }}
                            >
                                <NavLink
                                    to="/categories"
                                    onClick={e => e.preventDefault()}
                                >
                                    <Space>
                                        <NavLink extact to='category/bestseller'>Danh sách khóa học</NavLink>
                                        <DownOutlined />
                                    </Space>
                                </NavLink>
                            </Dropdown>
                        </a>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" exact to='event' className="text-center flex items-center px-4 -mb-1 dark:text-violet-400 dark:border-violet-400">Sự kiện</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" exact to='infomation' className="text-center flex items-center px-4 -mb-1">Về chúng tôi</NavLink>
                    </li>
                </ul>
                <div className="flex items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                                </svg>
                            </button>
                        </span>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            navigate(`/search/${e.target.elements.search.value}`)
                        }}>
                            <input style={{ border: '1px solid black' }} type="search" name="search"
                                placeholder="Search..." className="w-32 py-3 pl-10 text-sm rounded-full sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                        </form>
                    </div>
                    {renderOptionUser()}
                </div>
                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
