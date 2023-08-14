import React from 'react'
import { Carousel } from 'antd';
const renderCarousel = () => {
    let content = []
    for (let i = 1; i <= 3; i++) {
        if (i === 3) {
            content.push(
                <div key={i}>
                    <div style={{ backgroundImage: `url("/CarouselImg/carousel_${i}.png")`, width: '100%', height: '500px', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    </div>
                </div>
            )
        }
        else {
            content.push(
                <div key={i}>
                    <div style={{ backgroundImage: `url("/CarouselImg/carousel_${i}.jpg")`, width: '100%', height: '500px', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    </div>
                </div>
            )
        }
    }
    return content;
}
export default function HomeCarousel() {
    return (
        <Carousel autoplay='true'>
            {renderCarousel()}
        </Carousel>
    )
}
