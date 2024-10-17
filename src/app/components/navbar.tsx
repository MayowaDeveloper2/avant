/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from "react";
import Image from "next/image";
import avant_garde from "../images/Avant Garde Ministries-01.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    const handlemenubar = () => {
        setisOpen(!isOpen);
    }



    return (
        <div>
            <nav className="flex fixed z-50 w-full bg-customAsh justify-between px-24 sm:pr-10 sm:pl-1 xs:pr-10 xs:pl-1 items-center h-[60px]">
                <div>
                    <Image src={avant_garde} alt="" className="w-[200px] h-[50px]"/>
                </div>
                <ul className="lg:flex gap-20 text-[14px] text-customAshdark hidden ml-10">
                    <li>
                      <a href="#about-us" className="hover:text-blue-500">About us</a>
                    </li>
                    <li>
                      <a href="#expressions" className="hover:text-blue-500">Expressions</a>
                    </li>
                    <li>
                      <a href="#our-leaders" className="hover:text-blue-500">Our Leaders</a>
                    </li>
                    <li>
                      <a href="#contact-us" className="hover:text-blue-500">Contact us</a>
                    </li>
                    
                </ul>
                
                <div onClick={handlemenubar}>
                    {isOpen ? <IoMdClose className="lg:hidden text-3xl text-black font-bold" /> : <RiMenu3Fill  className="lg:hidden text-black text-3xl font-bold"/>}
                </div>
                <div className="hidden lg:block">
                    <button className="bg-customSkyblue text-black rounded-lg px-4 py-2 w-[100px]">Join us</button>
                </div>
            </nav>
            <div className={`fixed bg-customAsh z-50 h-screen top-14 left-0 w-[300px] text-white ps-2 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
                <ul className="text-black">
                    <li>
                      <a href="#about-us" className="hover:text-blue-500">About us</a>
                    </li>
                    <li>
                      <a href="#expressions" className="hover:text-blue-500">Expressions</a>
                    </li>
                    <li>
                      <a href="#our-leaders" className="hover:text-blue-500">Our Leaders</a>
                    </li>
                    <li>
                      <a href="#contact-us" className="hover:text-blue-500">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};