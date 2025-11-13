"use client";
import { useEffect, useState, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { FaPlay, FaPause } from "react-icons/fa";

const TestimonialSection = () => {
  const galleries = [
    { video: "/images/rebootslider.mp4", text: "Dr Sridev Shatri" },
    { video: "/images/rebootslider.mp4", text: "Klayan Badhopadhaya" },
    { video: "/images/rebootslider.mp4", text: "Dr. Saikat Paul" },
    { video: "/images/rebootslider.mp4", text: "Anirban Banerjee" },
    { video: "/images/rebootslider.mp4", text: "Rohit Sharma" },
    { video: "/images/rebootslider.mp4", text: "Virat Kohli" },
    { video: "/images/rebootslider.mp4", text: "Sougat Chatergee" },
    { video: "/images/rebootslider.mp4", text: "Saniya Mirza" },
    { video: "/images/rebootslider.mp4", text: "Tom Cruise" },
  ];

  const [slidesToShow, setSlidesToShow] = useState(5);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) setSlidesToShow(1);
      else if (window.innerWidth <= 460) setSlidesToShow(2);
      else if (window.innerWidth <= 860) setSlidesToShow(3);
      else if (window.innerWidth <= 1024) setSlidesToShow(4);
      else setSlidesToShow(5);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlayClick = (index: number) => {
    
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      videoRefs.current[playingIndex].pause();
    }


    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }

    if (playingIndex === index) {
      setPlayingIndex(null);
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
      return;
    }


    videoRefs.current[index].play();
    setPlayingIndex(index);
  };

  const handleVideoEnded = (index: number) => {
    setPlayingIndex(null);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (

   <>
   
   <>
  <section className="max-w-[1200px] mx-auto lg:p-8 p-4">

    <div className="flex flex-col gap-6 justify-center items-left">
      <h4>Testimonial</h4>
      <h1 className="text-custom-black text-xl md:text-2xl lg:text-3xl font-semibold">
        Why Choose{" "}
        <span className="bg-linear-to-r from-custom-darkblue to-custom-green bg-clip-text text-transparent">
          Business
        </span>{" "}
        With Us?
      </h1>
    </div>
  </section>

 
  <div className="w-full bg-[linear-gradient(to_right,rgba(231, 254, 255, 0.87),#f5bdf9de)] py-8" >
    <div className="max-w-[1200px] mx-auto px-4">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesToShow}
        spaceBetween={-10}
        coverflowEffect={{
          rotate: 20,
          stretch: -20,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {galleries.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative overflow-hidden group rounded-lg"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el!)}
              src={item.video}
              className="w-[20rem] h-[22rem] min-w-full object-cover transition-transform duration-300 group-hover:scale-105"
              muted
              loop
              playsInline
              onEnded={() => handleVideoEnded(index)}
            />

            <div
              className="absolute bottom-3 left-3 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm cursor-pointer"
              onClick={() => handlePlayClick(index)}
            >
              <div className="bg-defined-orange w-7 h-7 rounded-full flex items-center justify-center">
                {playingIndex === index ? (
                  <FaPause className="text-white text-xs ml-[2px]" />
                ) : (
                  <FaPlay className="text-white text-xs ml-[2px]" />
                )}
              </div>
              <p className="font-medium">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</>

   
   </> 
   
  );
};

export default TestimonialSection;
