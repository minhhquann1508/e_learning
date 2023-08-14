import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cancleRegisterCourseAction, getProfileUserAction, updateUserProfile } from '../../redux/actions/ManageUserAction/ManageUserAction';
import Swal from 'sweetalert2'
import { ERROR_IMG } from '../../util/constant/constant';
export default function User() {
    const [collapsed, setCollapsed] = useState(false);
    const [edit, setEdit] = useState(false)
    const [inputValue, setInputValue] = useState({});
    let { selectedUserKey, userProfile } = useSelector(state => state.ManageUserReducer)
    const dispatch = useDispatch()
    const { userName } = useParams();
    const { Content, Sider } = Layout;
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
            onClick: () => dispatch({
                type: 'CHANGE_USER_TAB',
                key: key
            })
        };
    }
    const items = [
        getItem('Dashbroad', '1', <UserOutlined />),
        getItem('Cart', '2', <ShoppingCartOutlined />),
    ];
    //Gọi api để lấy thông tin profile user khi vào trang
    useEffect(() => {
        dispatch(getProfileUserAction())
    }, [])

    useEffect(() => {
        setInputValue(userProfile);
    }, [userProfile]);

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleAllowEditEvent = () => {
        setEdit(!edit)
    }

    const handleSubmitEvent = (e) => {
        e.preventDefault()
        dispatch(updateUserProfile(inputValue))
    }
    //render ra phần dashboard
    const renderDashboard = () => {
        return (
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={handleSubmitEvent} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                                <img src="https://source.unsplash.com/random/300x300/?1" alt="avatar" className="object-cover object-center rounded-full w-52 h-52 dark:bg-gray-500" />
                                <div className="mt-6 mb-2">
                                    <h2 className="text-xl font-semibold tracki">{userProfile.hoTen} / {userProfile.taiKhoan}</h2>
                                </div>
                                <p className="dark:text-gray-100">Thông tin liên quan</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">Username</label>
                                <input type="text" name='taiKhoan'
                                    value={inputValue.taiKhoan || ''}
                                    onChange={handleChangeValue}
                                    disabled='true'
                                    className="w-full rounded-md px-4 py-3" style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm">Password</label>
                                <input type="text" name='matKhau'
                                    value={inputValue.matKhau || ''}
                                    onChange={handleChangeValue}
                                    disabled={!edit}
                                    className="w-full rounded-md px-4 py-3" style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-span-full">
                                <label for="email" className="text-sm">Email</label>
                                <input type="email" name='email'
                                    value={inputValue.email || ''}
                                    onChange={handleChangeValue}
                                    disabled='true'
                                    className="w-full rounded-md px-4 py-3" style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm">Full name</label>
                                <input type="text" name='hoTen'
                                    value={inputValue.hoTen || ''}
                                    onChange={handleChangeValue}
                                    disabled={!edit}
                                    className="w-full rounded-md px-4 py-3" style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm">Phone Number</label>
                                <input type="text" name='soDT'
                                    value={inputValue.soDT || ''}
                                    onChange={handleChangeValue}
                                    disabled={!edit}
                                    className="w-full rounded-md px-4 py-3" style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">Group ID</label>
                                <select className="w-full rounded-md px-4 py-3"
                                    value={inputValue.maNhom || ''}
                                    onChange={handleChangeValue}
                                    disabled={!edit}
                                    name='maNhom'
                                    style={{ border: '1px solid black' }} >
                                    <option value="" disabled='true'>Group ID:{userProfile.maNhom}</option>
                                    <option value="">GP01</option>
                                    <option value="">GP02</option>
                                    <option value="">GP03</option>
                                    <option value="">GP04</option>
                                    <option value="">GP05</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">Type of user</label>
                                <input type="text" name='maLoaiNguoiDung' value={inputValue.maLoaiNguoiDung} disabled className="w-full rounded-md px-4 py-3" style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-start-6 flex justify-end">
                                {!edit ?
                                    <button type="submit"
                                        onClick={handleAllowEditEvent}
                                        className="bg-black text-white px-4 py-2 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Chỉnh sửa</button>
                                    :
                                    <button type="button"
                                        onClick={handleAllowEditEvent}
                                        className="bg-black text-white px-4 py-2 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Lưu</button>
                                }
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>

        )
    }
    //render ra phần cart
    const renderCart = () => {
        return (
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                {userProfile.chiTietKhoaHocGhiDanh?.length > 0 ? <h2 className="text-xl font-semibold">Your cart</h2> : <h2 className="text-xl font-semibold">You don't have any courses yet</h2>}
                <ul className="flex flex-col divide-y divide-gray-700">
                    {userProfile.chiTietKhoaHocGhiDanh?.map((course, index) => {
                        return (
                            <li key={index} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img style={{ border: '1px solid black' }} className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={course.hinhAnh} onError={(e) => e.target.src = ERROR_IMG} alt={course.tenKhoaHoc} />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-semibold leadi sm:pr-8">{course.tenKhoaHoc}</h3>
                                                <p className="leadi sm:pr-8">{course.moTa.slice(0, 100)}</p>
                                            </div>
                                        </div>
                                        <div className="flex text-sm divide-x">
                                            <button type="button" className="px-2 py-1 rounded-md bg-black text-white"
                                                onClick={() => {
                                                    let info = {
                                                        maKhoaHoc: course.maKhoaHoc,
                                                        taiKhoan: userProfile.taiKhoan
                                                    }
                                                    Swal.fire({
                                                        title: 'Bạn chắc chứ ?',
                                                        text: "Bạn có muốn hủy ghi danh khóa học này không ?",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#5624d0',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Đồng ý',
                                                        cancelButtonText: 'Không',
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            dispatch(cancleRegisterCourseAction(info))
                                                            Swal.fire(
                                                                'Hoàn tất !',
                                                                'Hủy ghi danh thành công',
                                                                'success'
                                                            )
                                                            dispatch(getProfileUserAction())
                                                        }
                                                    })
                                                }}
                                                fdprocessedid="ixbpw">
                                                <i class="fa-solid fa-trash"></i>
                                                <span className='mx-1'>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    }
    return (
        <Fragment>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider style={{ backgroundColor: '#fff' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>{userName}</Breadcrumb.Item>
                        </Breadcrumb>
                        {selectedUserKey === '1' && (
                            <div
                                style={{
                                    padding: 24,
                                    background: '#fff',
                                }}
                            >
                                {renderDashboard()}
                            </div>
                        )}
                        {selectedUserKey === '2' && (
                            <div
                                style={{
                                    padding: 24,
                                    background: '#fff',
                                }}
                            >
                                {renderCart()}
                            </div>
                        )}
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    )
}
