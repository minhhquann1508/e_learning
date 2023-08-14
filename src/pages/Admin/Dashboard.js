import { useEffect } from "react"
import { getProfileUserAction } from "../../redux/actions/ManageUserAction/ManageUserAction"
import { useDispatch, useSelector } from "react-redux"

export const Dashboard = () => {
    const dispatch = useDispatch()
    let { userProfile } = useSelector(state => state.ManageUserReducer)
    useEffect(() => {
        dispatch(getProfileUserAction())
    }, [])
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Chào mừng trở lại {userProfile.hoTen}</h1>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">Họ tên</label>
                                <input disabled='true' style={{ border: '1px solid black' }} id="firstname" type="text" value={userProfile?.hoTen} className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm">Tài khoản</label>
                                <input disabled='true' value={userProfile.taiKhoan} style={{ border: '1px solid black' }} id="lastname" type="text" placeholder="Last name" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm">Email</label>
                                <input disabled='true' value={userProfile.email} style={{ border: '1px solid black' }} id="email" type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm">Số điện thoại</label>
                                <input disabled='true' value={userProfile.soDT} style={{ border: '1px solid black' }} id="address" type="text" placeholder="" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm">Mật khẩu</label>
                                <input disabled='true' value={userProfile.matKhau} style={{ border: '1px solid black' }} id="city" type="text" placeholder="" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">Mã nhóm</label>
                                <input disabled='true' value={userProfile.maNhom} style={{ border: '1px solid black' }} id="state" type="text" placeholder="" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">Loại người dùng</label>
                                <input disabled='true' value={userProfile.maLoaiNguoiDung} style={{ border: '1px solid black' }} id="zip" type="text" placeholder="" className="w-full px-3 py-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}