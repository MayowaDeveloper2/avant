/* eslint-disable react/no-unescaped-entities */ 
'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ava from "../images/ava.png";

export default function Hero() {
    const [currentText, setCurrentText] = useState("teaching");
    const texts = ["teaching", "prayer", "evangelism"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [texts]);

    return (
        <div className="flex flex-col items-center xs:pt-10 sm:pt-10">
            <div className="text-[64px] sm:text-[40px] xs:text-[30px] text-black bricolage text-center mt-6">
                Equipping believers through
            </div>

            {/* Parent div with relative positioning */}
            <div className="relative w-[426.25px] h-[60px] sm:w-[300px] sm:h-[40px] xs:w-[250px] xs:h-[35px] border-2 items-center text-center mx-auto">
                {/* Text inside the parent div */}
                <div className="bricolage text-5xl sm:text-3xl xs:text-2xl text-customSkyblue ">
                    {currentText}
                </div>

                {/* Top-left rectangle */}
                <div className="absolute top-0 left-0 bg-customDarkblue w-3 h-3 sm:w-2 sm:h-2 xs:w-2 xs:h-2 transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* Top-right rectangle */}
                <div className="absolute top-0 right-0 bg-customDarkblue w-3 h-3 sm:w-2 sm:h-2 xs:w-2 xs:h-2 transform translate-x-1/2 -translate-y-1/2"></div>

                {/* Bottom-left rectangle */}
                <div className="absolute bottom-0 left-0 bg-customDarkblue w-3 h-3 sm:w-2 sm:h-2 xs:w-2 xs:h-2 transform -translate-x-1/2 translate-y-1/2"></div>

                {/* Bottom-right rectangle */}
                <div className="absolute bottom-0 right-0 bg-customDarkblue w-3 h-3 sm:w-2 sm:h-2 xs:w-2 xs:h-2 transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="text-center text-black w-[500px] sm:w-[350px] xs:w-[300px] text-[14px] lg:text-[18px] mt-6">
                At Avant-garde, we welcome you to grow in your faith, connect with others, and find purpose. No matter where you are in life, you belong here.
            </div>
            <button className="text-black rounded-[10px] bg-customSkyblue mt-6 px-3 py-2 w-[250px] xs:w-[150px]">
                Join us
            </button>
        </div>
    );
}
