/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import photo1 from "../images/bible.jpeg";
import photo2 from "../images/handsup.jpeg";
import photo3 from "../images/whatjesusdo.jpeg";
import photo4 from "../images/praising God.jpeg";
import photo5 from "../images/bible reading.jpeg";
import photo6 from "../images/church reading.jpeg";
import star from "../images/Star 1.png";
import frame from "../images/Frame 23.png";
import manpraying from "../images/man praying.jpg";
import radioprogram from "../images/microphone-1562354.jpg";
import camerastudio from "../images/man-filming-with-professional-camera.jpg";
import prayerharvest from "../images/praying.jpg";
import schoolevangelism from "../images/school evangelism.jpg";
import charity from "../images/children-1388705.jpg";
import darlington from "../images/Darlington.jpg";

export default function Bodysection() {
    const Features = [
        { src: photo1, alt: "feature1" },
        { src: photo2, alt: "feature2" },
        { src: photo3, alt: "feature3" },
        { src: photo4, alt: "feature4" },
        { src: photo5, alt: "feature5" },
        { src: photo6, alt: "feature6" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Features.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    return (
        <>
            <div className="px-24 w-full justify-center flex flex-col items-center">
                <div className="relative">
                    {/* Desktop view */}
                    <div className="hidden lg:grid md:grid grid-cols-6 gap-[10px] mt-14 relative">
                        <Image src={star} alt="star" className="w-[100px] absolute transform -translate-x-1/2 -translate-y-1/2" />
                        <div className="col-span-2 h-[272px] rounded-[20px]">
                            <Image src={photo1} alt="" className="h-[272px] w-full rounded-[20px]" />
                        </div>
                        <div className="col-span-2 h-[272px] rounded-[20px]">
                            <Image src={photo2} alt="" className="h-[272px] w-full rounded-[20px]" />
                        </div>
                        <div className="col-span-2 h-[272px] rounded-[20px]">
                            <Image src={photo3} alt="" className="h-[272px] w-full rounded-[20px]" />
                        </div>

                        {/* Row 2: Image 4, 5 (centered), 6 */}
                        <div className="col-span-1 h-[272px] rounded-[20px]">
                            <Image src={photo4} alt="" className="h-[272px] w-full rounded-[20px]" />
                        </div>
                        <div className="col-start-2 col-span-4 h-[272px] rounded-[20px]">
                            <Image src={photo5} alt="" className="h-[272px] w-full rounded-[20px]" />
                        </div>
                        <div className="col-span-1 h-[272px] rounded-[20px] relative">
                            <Image src={photo6} alt="" className="h-[272px] w-full rounded-[20px]" />
                            <Image src={frame} alt="frame" className="absolute w-[100px] right-0 transform translate-x-1/2 -translate-y-1/2 z-[-1]" />
                        </div>
                    </div>

                    {/* Mobile view */}
                    <div className="lg:hidden sm:overflow-x-auto xs:overflow-x-auto mt-10">
                        <div className="flex transition-transform duration-500 ease-in-out w-[380px] xs:w-[350px] " style={{ transform: `translateX(-${currentIndex * 380}px)` }}>
                            {Features.map((feature, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <Image src={feature.src} alt={feature.alt} className="w-[380px] h-[200px]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* About us */}
                <div id="about-us" className="flex flex-col items-center lg:mt-10">
                    <button className="text-black rounded-[10px] bg-customSkyblue mt-6 px-3 py-2 w-[250px] xs:w-[150px]">About us</button>
                    <div className="sm:w-[380px] xs:w-[350px] lg:w-full lg:text-[18px] mt-3 lg:mt-5">
                        Avant-Garde International Ministries(AGIM) is a dynamic Christian ministry committed to raising an end-time army of soul
                        Winners and mature disciples in Christ. With a mandate to equip the body of Christ and bring millions of souls into God's harvest,
                        AGIM is passionate about fulfilling the great commission by empowering believers to actively engage in soul-winning, discipleship, and 
                        spiritual growth.
                    </div>
                    <button id="expressions" className="text-black rounded-[10px] bg-customSkyblue mt-6 px-3 py-2 w-[250px] xs:w-[200px]">Expressions of AGIM</button>
                </div>
                
                
            </div>
            <div className="lg:w-full lg:p-20 xs:p-1 sm:p-2">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px]">
                        <div className="flex flex-col lg:justify-center ">
                            <div className="text-customSkyblue font-bold text-[20px] lg:text-2xl sm:mt-4 xs:mt-4 ">The Midday Prayers</div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px]">An online 30-minute prayer session that gathers believers daily to pray for their spiritual growth and personal well-being. Taking
                                place Monday to Friday at 12pm WAT, this powerful sessionn has been a blessing to numerous believers, strengthening their faith and 
                                deepening their relationship with God. Join us at this spiritual altar as we pray together for God's guidance and grace. 
                            </div>
                        </div>
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[380px] xs:px-10 sm:px-10 ">
                            <Image src={manpraying} alt="" className="xs:w-[300px] sm:w-[300px]  rounded-2xl" />
                        </div>
                    </div>
            </div>
            <div className="bg-customSkyblue lg:w-full lg:p-20 xs:p-1 sm:p-2">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px] lg:gap-[50px]">
                        
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[390px] xs:px-10 sm:px-12 ">
                            <Image src={radioprogram} alt="" className="xs:w-[300px] sm:w-[380px]  rounded-2xl" />
                        </div>
                        <div className="flex flex-col lg:justify-center xs:px-3 ">
                            <div className="text-customDarkblue font-bold text-[20px] lg:text-2xl sm:mt-4 xs:mt-4 ">Yonder Hour</div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px] text-white xs:mb-3 sm:mb-3"> 
                                A weekly 15-minute radio program broadcasted through our partner stations. Yonder Hour is designed
                                to ignite the flame of revival in the hearts of believers. Through teaching and prayer, this program
                                stirs up a deep hunger for God. His presence, and His harvest. Tune in every week to be inspired and
                                equipped for the work of the Lord.
                            </div>
                        </div>
                    </div>
            </div>
            <div className="lg:w-full lg:p-20 xs:p-1 sm:p-2">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px]">
                        <div className="flex flex-col lg:justify-center ">
                            <div className="text-customSkyblue font-bold text-[20px] lg:text-2xl sm:mt-4 xs:mt-4 ">The Mega Harvest Prayers</div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px]">
                                Every Friday at 10pm WAT, believers gather online for a powerful prayer session dedicated to revival and the salvation
                                of lost souls. Mega Harvest Prayers unite men and women with a stared burden for God's harvest, interceding for a great
                                revival within the church and for millions of souls to come to Christ.
                            </div>
                        </div>
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[380px] xs:px-10 sm:px-10 ">
                            <Image src={prayerharvest} alt="" className="xs:w-[300px] sm:w-[300px]  rounded-2xl" />
                        </div>
                    </div>
            </div>
            <div className="bg-customGreen lg:w-full lg:p-20 xs:p-1 sm:p-2">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px] lg:gap-[50px]">
                        
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[390px] xs:px-10 sm:px-12 ">
                            <Image src={schoolevangelism} alt="" className="xs:w-[300px] sm:w-[380px]  rounded-2xl" />
                        </div>
                        <div className="flex flex-col lg:justify-center xs:px-3 ">
                            <div className="text-customSkyblue font-bold text-[20px] lg:text-2xl sm:mt-4 xs:mt-4 ">The School of Evangelism</div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px] text-white xs:mb-3 sm:mb-3"> 
                                AGIM's School of Evangelism is dedicated to training over 1 million Soul Winners and Evangelists for Christ.
                                With 40 comprehensive courses on Evangelism and Discipleship, students are equipped with practical skills to win and
                                disciple souls. Through Yonderconnect.com, students actively document their weekly evangelism and soul-winning efforts,
                                fulfilling their calling to bring the Gospel to all nations.
                            </div>
                        </div>
                    </div>
            </div>
            <div className="lg:w-full lg:p-20 xs:p-1 sm:p-2">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px]">
                        <div className="flex flex-col lg:justify-center ">
                            <div className="text-customSkyblue font-bold text-[20px] lg:text-2xl sm:mt-4 xs:mt-4 ">The House of Bread (HOB)</div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px]">
                                HOB is the charity and evangelistic outreach arm of AGIM. This initiative targets both rural and urban communities by providing
                                food, healthcare, and spiritual nourishment. By mobilizing soul winners from different denominations and partnering with churches,
                                HOB reaches out to the lost, sharing the love of Christ through practical means. HOB also provides food banks and pastries in selected
                                neighborhoods, helping to meet physical and spiritual needs.

                            </div>
                        </div>
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[380px] xs:px-10 sm:px-10 ">
                            <Image src={charity} alt="" className="xs:w-[300px] sm:w-[300px]  rounded-2xl" />
                        </div>
                    </div>
            </div>
            <div className="bg-customDarkblue lg:w-full lg:p-20 xs:p-1 sm:p-2">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px] lg:gap-[50px]">
                        
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[390px] xs:px-10 sm:px-12 ">
                            <Image src={camerastudio} alt="" className="xs:w-[300px] sm:w-[380px]  rounded-2xl" />
                        </div>
                        <div className="flex flex-col lg:justify-center xs:px-3 ">
                            <div className="text-customSkyblue font-bold text-[20px] lg:text-2xl sm:mt-4 xs:mt-4 ">Living Spring Studio</div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px] text-white xs:mb-3 sm:mb-3"> 
                                Living Springs Studio is AGIM's upcoming world-class facility dedicated to producing and streaming
                                Christian-based programs. Operating 24/7 online, this platform will showcase believers' gifts and talents
                                through various shows, while spreading the Gospel across the globe. The studio will serve as a place of inspiration
                                and creativity for Christian content creation.
                            </div>
                        </div>
                    </div>
            </div>
            <div id="our-leaders" className="flex flex-col items-center">
                <button className="text-black rounded-[10px] bg-customSkyblue mt-6 px-3 py-2 w-[250px] xs:w-[200px]">Meet Our Leaders</button>
                <div className="w-full mt-3 lg:mb-4 lg:px-24 xs:w-[350px] sm:w-[380px]">
                    Pastor Darlign Onyeagoro and his wife, Vivian Onyeagoro, coordinate the various expressions and activities of AGIM. Pastor Darlington has
                    been given a clear mandate from God to equip the body of Christ and bring about the manifestation of the Sons of God. His passion for end-time
                    revival drives him to inspire believers to step out of the four walls of the church and into the world to fulfill their divine assignment in soul-
                    winning and discipleship.

                    Pastor Darlington belives that the church's primary mission is beyond the phyical church building- it is in the field, where souls are won and
                    discipled.
                </div>
                <div className="xs:w-[300px] lg:w-[400px] lg:h-[500px] xs:h-[520px] sm:w-[350px] sm:h-[600px] rounded-3xl mt-4">
                   <Image src={darlington} alt="darlington" className=" rounded-2xl"/>
                </div>
            </div>
            <div className="lg:w-full lg:mt-40 lg:p-20 xs:p-1 sm:p-2 bg-customSlightblue">
                    <div className="lg:grid lg:grid-cols-2 lg:mt-[100px]">
                        <div className="flex flex-col lg:justify-center ">
                            <div className="text-black lato sm:text-[30px] xs:w-[350px]  W-[400px] font-bold text-[20px] lg:text-5xl sm:mt-4 xs:mt-4 ">Join the Movement:
                                Advance God's Kingdom with AGIM
                            </div>
                            <div className="sm:w-[380px] xs:w-[350px] lg:mt-6 lg:w-[400px]">
                                Become part of a global mission to win souls, disciple nations and
                                transform communities. Whether through prayer, evangelism, or outreach
                                there's a role for you. Let's work together to spread the Gospel and bring
                                lasting impact for God's glory.
                            </div>
                        </div>
                        <div className="sm:mt-4 xs:mt-4 xs:mb-4 sm:mb-4 xs-w-[200px] sm:w-[380px] xs:px-10 sm:px-10 ">
                            <Image src={charity} alt="" className="xs:w-[300px] sm:w-[300px]  rounded-2xl" />
                        </div>
                    </div>
            </div>
        </>
    );
}
