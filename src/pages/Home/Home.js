import HomeCarousel from './HomeCarousel/HomeCarousel'
import HomeIntroduce from './HomeIntroduce/HomeIntroduce'
import CourseList from './CourseList/CourseList'
import CountUpHome from './CountUp/CountUp'
export default function Home() {
    return (
        <div className='w-full' style={{ minHeight: 700 }}>
            <HomeCarousel />
            <HomeIntroduce />
            <CourseList />
            <CountUpHome />
        </div>
    )
}
