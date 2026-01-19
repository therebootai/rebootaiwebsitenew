"use client";
import ContactIcon from "@/icons/ContactIcon";
import PlayBtnIcon from "@/icons/PlayBtnIcon";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay, FaXmark } from "react-icons/fa6";

export type VideoContentType = {
  video?: string;
  text?: string;
};

export type imgcontent = {
  imgsrc?: string;
  alt?: string;
};

const ServicePage1stSection = ({
  heading,
  description,
  videoContent,
  imgcontent,
  audiosrc
}: {
  heading: string;
  description: string;
  videoContent?: VideoContentType;
  imgcontent?: imgcontent;
  audiosrc?:string
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleAudioPlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      if (audio.duration && audio.duration > 0) {
        const percent = (audio.currentTime / audio.duration) * 100;
        setProgress(percent);
      }
    };

    const onEnd = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className=" w-full max-w-[1200px] lg:pt-16 lg:p-8  p-4 flex flex-col lg:flex-row gap-4">
          <div className=" w-full lg:w-[60%] flex flex-col gap-4">
            <h1 className="xl:text-3xl text-2xl font-semibold w-fit flex flex-row gap-2 items-center  bg-linear-to-r  from-custom-darkblue  to-custom-green  bg-clip-text  text-transparent">
              {heading}
            </h1>
            <div className=" text-sm/[22px] text-custom-textgray" dangerouslySetInnerHTML={{__html:description}}>
              
            </div>
            <div
              onClick={handleAudioPlay}
              className={`relative w-fit ml-4 pl-10 px-6 h-[3rem] rounded-full flex items-center cursor-pointer overflow-hidden transition-colors duration-300   bg-custom-darkblue/10
    ${isPlaying ? "text-white " : "text-custom-darkblue "}
  `}
            >
              <div
                className="absolute left-0 top-0 h-full bg-custom-darkblue transition-all duration-100 ease-linear pointer-events-none z-0"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute -left-0 border-white border-2 rounded-full bg-white z-10">
                <div className="border-2 border-custom-darkblue rounded-full size-[3rem] bg-radial from-white via-custom-lightblue/10 to-custom-lightblue/60 flex justify-center items-center">
                  {isPlaying ? (
                    <FaPause className="size-[1.2rem] text-custom-darkblue" />
                  ) : (
                    <FaPlay className="size-[1.2rem] text-custom-darkblue ml-1" />
                  )}
                </div>
              </div>

              <span className="relative z-10 font-medium px-6">
                Listen with below content
              </span>
              <audio ref={audioRef} preload="metadata">
                <source
                  src={audiosrc}
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className=" w-full lg:w-[40%] flex flex-col gap-4">
            <div
              onClick={() => setShowVideo(true)}
              className=" relative h-auto lg:h-[85%]"
            >
              <Image
                src={imgcontent?.imgsrc || "/images/service.png"}
                alt={imgcontent?.alt || "img"}
                width={741}
                height={451}
                className=" h-full w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 w-full flex justify-center items-center">
                <button
                  onClick={() => setShowVideo(true)}
                  className="relative size-[3rem] bg-custom-black/90 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full insideshadowbtn animate-spin [animation-duration:7s]"></div>

                  <FaPlay className="relative z-10 text-white text-base ml-1" />
                </button>
              </div>
            </div>
            <button className=" h-[3rem] lg:h-[15%] flex gap-2 text-white text-base font-medium justify-center items-center bg-linear-to-r from-custom-darkblue via-custom-mediumblue to-custom-lightblue rounded-lg">
              <ContactIcon className=" size-[1.5rem]" /> Contact Us Today!
            </button>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div
            className="absolute inset-0"
            onClick={() => setShowVideo(false)}
          ></div>

          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center p-4 bg-zinc-900 text-white">
              <span className="font-semibold text-lg">
                {videoContent?.text}
              </span>
              <button
                onClick={() => setShowVideo(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <FaXmark className="size-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                src={videoContent?.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicePage1stSection;
