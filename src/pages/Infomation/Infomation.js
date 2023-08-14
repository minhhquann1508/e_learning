import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Infomation() {
    const navigate = useNavigate()
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-800 text-white">
                <div className="container flex flex-col mx-auto lg:flex-row lg:justify-between">
                    <div className="flex w-full lg:2/3 flex-col p-6 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leadi">UDELEARN - ĐÀO TẠO CHUYÊN GIA LẬP TRÌNH</h2>
                        <p className="mt-4 mb-8 text-lg">Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp. Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.</p>
                        <button onClick={() => {
                            navigate('/category/bestseller')
                        }}
                            className="self-start px-10 py-3 text-lg font-bold text-white bg-purple-600 rounded-3xl dark:bg-red-400 dark:text-gray-900">Get started</button>
                    </div>
                    <div classname="bg-gray-800 w-full lg:1/3">
                        <img src='/InfoImg/computer.png' alt="anh" />
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="py-10 m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100" style={{ border: '1px solid black' }}>
                <div className="container mx-auto py-10 p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">ĐIỂM ƯU VIỆT</h2>
                    <p className="dark:text-gray-400 text-xl underline text-purple-600 font-bold">CHỈ CÓ TẠI UDELEARN</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-start justify-center p-4">
                        <h3 className="my-3 text-3xl font-extrabold">Học theo lộ trình, có định hướng</h3>
                        <div className="space-y-1 leadi">
                            <p>CyberSoft sẽ định hướng và đưa ra các lộ trình học tập cho nghề bạn theo đuổi. Phát triển năng lực và niềm đam mê cảm hứng lập trình của bạn.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4">
                        <h3 className="my-3 text-3xl font-extrabold">Nền tảng, tư duy, cốt lõi trong lập trình</h3>
                        <div className="space-y-1 leadi">
                            <p>CyberSoft cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4">
                        <h3 className="my-3 text-3xl font-extrabold">Mài giũa bạn qua kinh nghiệm, dự án thực tế</h3>
                        <div className="space-y-1 leadi">
                            <p>Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4">
                        <h3 className="my-3 text-3xl font-extrabold">Teamwork, Scrum - Agile. Mentor tận tâm</h3>
                        <div className="space-y-1 leadi">
                            <p>Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong qui trình Scrum, Agile. Được Mentor hỗ trợ tân tâm, nhiệt tình.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4">
                        <h3 className="my-3 text-3xl font-extrabold">Công nghệ mới, chuyên sâu, thực tế</h3>
                        <div className="space-y-1 leadi">
                            <p>Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4">
                        <h3 className="my-3 text-3xl font-extrabold">Trao tay chìa khóa thành công toàn diện</h3>
                        <div className="space-y-1 leadi">
                            <p>Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: 'url("https://cybersoft.edu.vn/wp-content/uploads/2022/11/cover_4-1.jpg")', backgroundAttachment: 'fixed', minHeight: '400px', width: '100%' }}>
            </section>

            {/* REVIEW */}
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-800">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold text-white">Đánh giá của người dùng</h2>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900 bg-white">
                                        <p>“Kiến thức mà tôi được học ở đây đáp ứng tất cả mong đợi của tôi đối với những gì tôi muốn học về lập trình, tôi cảm thấy rất hài lòng. Ngoài học lý thuyết, tôi đã được vận dụng kiến thức đã học qua các dự án coding nhờ đó mà công việc tại FPT Software của tôi đã trở nên rất hiệu quả. Khi bước vào FPT Software mình được giao làm dự án về Angular. Rất may ngay khi học tại Cybersoft mình đã được thầy cô chỉ dạy rất kỹ về Angular, nên mình nắm bắt công việc rất nhanh. Ngoài ra, các kiến thức nền mà Cybersoft dạy mình cũng rất kỹ, nên bây giờ học framework hay library nào mình cũng không sợ.”</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Lê Nhật Minh</p>
                                                <p className="text-sm dark:text-gray-400">Khóa Front End</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900 bg-white">
                                        <p>Ngoài những kiến thức mới, mình được tìm hiểu thêm những cách code hay hơn, không bị rập khuôn như trước. Và việc hệ thống hóa kiến thức được học tại trung tâm cũng rất tốt, từ khi ghi nhớ được những thứ mình đã học, biết cách ứng dụng, nhớ lâu do thực hành nhiều qua các dự án đã khiến mình tự tin hơn rất nhiều.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Nguyễn Minh Quân</p>
                                                <p className="text-sm dark:text-gray-400">Khóa Back End</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900 bg-white">
                                        <p>Điều mình hài lòng nhất ở CyberSoft Academy đó là sự tận tình của các GV đứng lớp, kinh nghiệm thực tế của họ và mentor giúp ích rất nhiều trong việc tiếp thu, thực hành bám sát cho học viên. Kiến thức chuyên môn tại CyberSoft mà mình cảm thấy tâm đắc nhất có lẽ là cách viết code. Ngay từ đầu bạn được làm việc với phong cách viết code rõ ràng, có tổ chức, không tùy tiện. Từ đó hình thành thói quen clean code, nên cho dù làm việc với các công nghệ mới, hay dự án lớn thì bạn vẫn có thể kiểm soát được code của mình và fix chúng nếu cần thiết. Mình áp dụng vào clean code khiến công việc kiểm soát code, fix bug dễ dàng hơn.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Nguyễn Minh Thông</p>
                                                <p className="text-sm dark:text-gray-400">Khóa Tư Duy</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900 bg-white">
                                        <p>Điều mình thích nhất ở CyberSoft Academy đó là giảng viên rất tận tình, không ngại chỉ dẫn học viên của mình, ngay cả khi mình không theo kịp bài cũng vẫn sẽ có video cho mình xem lại, vì vậy rất dễ ôn tập và nắm chắc bài học. Những kiến thức mình học được tại đây hầu như đều rất thực tế và mang tính ứng dụng rất cao, mình được thực hành nhiều nên có thể áp dụng vào công việc rất tốt. Mình đã vận dụng kiến thức đó trong lúc phỏng vấn nên mình đã pass công ty chỉ bằng 1 lần pv duy nhất đúng với mức lương mong muốn.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-400">Khóa Design</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* các giảng viên */}
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Các giảng viên tiêu biểu</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <p className="text-xl font-semibold leadi">Lê Quang Hiếu</p>
                            <p className="dark:text-gray-400">GV.Front End</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <p className="text-xl font-semibold leadi">Nguyễn Hữu Viết Ngọc</p>
                            <p className="dark:text-gray-400">GV.Back End</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <p className="text-xl font-semibold leadi">Trần Thế Sang</p>
                            <p className="dark:text-gray-400">GV.Design</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <p className="text-xl font-semibold leadi">Lý Ngọc Như</p>
                            <p className="dark:text-gray-400">GV.Tư duy lập trình</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
