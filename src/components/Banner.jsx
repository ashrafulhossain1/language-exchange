import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import React from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css'; // আপনার স্টাইলিং ফাইল
// Import required modules
// import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-[250px] sm:h-[400px] md:h-[65vh]">
              {/* Semi-Transparent Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"></div>
              {/* Image */}
              <img
                className="w-full h-full object-cover"
                src="https://www.fnu.edu/wp-content/smush-webp/2023/10/Study_in_group_in_the_HHS_library-1.jpg.webp"
                alt="Language Tutors"
              />
              {/* Content */}
              <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-30 text-white px-4 w-full md:w-5/12 user-select">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Find Expert Language Tutors Online
                </h2>
                <p className="mt-2 text-base sm:text-lg">
                  Learn any language from certified tutors in one-on-one personalized sessions.
                </p>
                <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <a href="#start-learning">Start Learning</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
  
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-[250px] sm:h-[400px] md:h-[65vh]">
              {/* Semi-Transparent Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"></div>
              {/* Image */}
              <img
                className="w-full h-full object-cover"
                src="https://bridge.edu/tefl/blog/wp-content/uploads/2021/11/7.png.webp"
                alt="Interactive Learning"
              />
              {/* Content */}
              <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-30 text-white px-4 w-full md:w-5/12 user-select">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Interactive Learning Made Easy
                </h2>
                <p className="mt-2 text-base sm:text-lg">
                  Enhance your language skills with engaging lessons and live practice sessions.
                </p>
                <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <a href="#join-now">Join Now</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
  
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-[250px] sm:h-[400px] md:h-[65vh]">
              {/* Semi-Transparent Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"></div>
              {/* Image */}
              <img
                className="w-full h-full object-cover"
                src="https://sanako.com/wp-content/uploads/2023/05/iStock-1177608272.jpg"
                alt="Global Learning Community"
              />
              {/* Content */}
              <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-30 text-white px-4 w-full md:w-5/12 user-select">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Join a Global Learning Community
                </h2>
                <p className="mt-2 text-base sm:text-lg">
                  Connect with learners and tutors worldwide to achieve your language goals.
                </p>
                <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <a href="#explore-tutors">Explore Tutors</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Banner;