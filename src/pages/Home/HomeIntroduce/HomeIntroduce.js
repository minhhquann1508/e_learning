import React from 'react'
import { CheckOutlined } from '@ant-design/icons';
import './HomeIntroduce.css'
export default function HomeIntroduce() {
    return (
        <div className='grid grid-cols-3 gap-6 container py-24'>
            <div style={{ border: '1px solid #ccc' }} className='introduce-item py-10 px-5'>
                <h2 className='font-bold text-2xl py-2'>KHOÁ HỌC</h2>
                <hr style={{ height: 5 }} />
                <p className='py-3'>
                    Học qua dự án thực tế,học đi đôi với hành, không lý thuyết lan man,
                    phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực
                    tế để học viên học xong làm được ngay
                </p>
                <ul>
                    <li className='my-3'><CheckOutlined /> Hơn 1000 bài tập và dự án thực tế</li>
                    <li className='my-3'><CheckOutlined /> Công nghệ cập nhật mới nhất</li>
                    <li className='my-3'><CheckOutlined /> Hình ảnh, ví dụ, bài giảng sinh động trực quan</li>
                    <li className='my-3'><CheckOutlined /> Tư duy phân tích, giải quyết vấn đề trong dự án</li>
                    <li className='my-3'><CheckOutlined /> Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</li>
                    <li className='my-3'><CheckOutlined /> Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</li>
                </ul>
            </div>
            <div className='flex flex-col justify-between items-center gap-5'>
                <div style={{ border: '1px solid #ccc', width: '100%', height: '50%' }} className='introduce-item py-10 px-5'>
                    <h2 className='font-bold text-2xl py-2'>LỘ TRÌNH PHÙ HỢP</h2>
                    <hr style={{ height: 5 }} />
                    <ul>
                        <li className='my-3'><CheckOutlined /> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</li>
                        <li className='my-3'><CheckOutlined /> Học, luyện tập code, kỹ thuật phân tích, soft skill</li>
                        <li className='my-3'><CheckOutlined /> Huấn luyện để phát triển năng lực và niềm đam mê lập trình</li>
                    </ul>
                </div>
                <div style={{ border: '1px solid #ccc', width: '100%', height: '50%' }} className='introduce-item py-5 px-5'>
                    <h2 className='font-bold text-2xl py-2'>HỆ THỐNG HỌC TẬP</h2>
                    <hr style={{ height: 5 }} />
                    <ul>
                        <li className='my-3'><CheckOutlined /> Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</li>
                        <li className='my-3'><CheckOutlined /> Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</li>
                        <li className='my-3'><CheckOutlined /> Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-5' >
                <div style={{ border: '1px solid #ccc', width: '100%', height: '50%' }} className='introduce-item py-10 px-5'>
                    <h2 className='font-bold text-2xl py-2'>GIẢNG VIÊN</h2>
                    <hr style={{ height: 5 }} />
                    <ul>
                        <li className='my-3'><CheckOutlined /> Tương tác cùng mentor và giảng viên qua phần thảo luận</li>
                        <li className='my-3'><CheckOutlined /> Review code và đưa ra các nhận xét góp ý</li>
                        <li className='my-3'><CheckOutlined /> Chấm điểm tương tác thảo luận giữa các học viên</li>
                    </ul>
                </div>
                <div style={{ border: '1px solid #ccc', width: '100%', height: '50%' }} className='introduce-item py-5 px-5'>
                    <h2 className='font-bold text-2xl py-2'>CHỨNG NHẬN</h2>
                    <hr style={{ height: 5 }} />
                    <ul>
                        <li className='my-3'><CheckOutlined /> Chấm bài và có thể vấn đáp trực tuyến để review</li>
                        <li className='my-3'><CheckOutlined /> Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</li>
                        <li className='my-3'><CheckOutlined /> Kết nối CV của bạn đến với các đối tác của V learning</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
