/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link component
import avant from "../images/Avant Garde Ministries-01 2.png";
import facebook from "../images/facebook-rounded-border-svgrepo-com.svg";
import instagram from "../images/instagram-rounded-border-svgrepo-com.svg";
import youtube from "../images/youtube-rounded-border-svgrepo-com.svg";
import twitter from "../images/twitter-rounded-border-svgrepo-com.svg";

export default function Footer() {
  const [showModal, setShowModal] = useState(false); 

  const handleDonateClick = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <footer id="contact-us" className="bg-customDarkblue lg:px-[100px] px-[15px] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-20">
        <div>
          <Image className="w-[200px] h-[80px]" src={avant} alt="Logo" />
          <div className="text-white mt-4">
            Equipping Believers Through Teachings, Prayers and Evangelism
          </div>
        </div>
        <div className="text-white">
          <span className="font-semibold text-[24px]">About Us</span>
          <div className="mt-4">Our Mission</div>
          <div className="mt-2">Our Vision</div>
          <div className="mt-2">Our Leaders</div>
        </div>
        <div className="text-white">
          <span className="text-white font-semibold text-[24px]">Get Involved</span>
          <div className="mt-4">Partnership</div>
          <div className="mt-2 cursor-pointer" onClick={handleDonateClick}>
            Donate
          </div>
          <div className="mt-2">Volunteer</div>
          <div className="mt-2">Prayer Support</div>
        </div>
        <div className="text-white">
          <span className="text-white font-semibold text-[24px]">Connect With Us</span>
          <div className="mt-4 flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61559931431384" target="_blank">
              <div className="w-[20px] h-[20px]">
                <Image src={facebook} alt="facebook" className="w-full h-full" />
              </div>
            </Link>
            <Link href="https://x.com/avantgardemin" target="_blank">
              <div className="w-[20px] h-[20px]">
                <Image src={twitter} alt="twitter" className="w-full h-full" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/p/C7eY0aUoofZ/" target="_blank">
              <div className="w-[20px] h-[20px]">
                <Image src={instagram} alt="instagram" className="w-full h-full" />
              </div>
            </Link>
            <Link href="https://youtube.com/@avantgardeministries" target="_blank">
              <div className="w-[20px] h-[20px]">
                <Image src={youtube} alt="youtube" className="w-full h-full" />
              </div>
            </Link>
          </div>
          <div className="mt-2">info@agim.org</div>
          <div className="mt-2">08032532634</div>
          <div className="mt-2">09053889020</div>
        </div>
      </div>
      <hr className="mt-10"></hr>
      <div className="text-white mt-4">
        ©2024 Avant-Garde International Ministries (AGIM) All rights reserved.
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[300px] md:w-[500px] text-center">
            <h2 className="text-xl font-semibold mb-4 text-black">Ministry Account</h2>
            <p className="mb-4 text-black">
              GTBANK- Avant Garde International Ministries- 0953536112
            </p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
