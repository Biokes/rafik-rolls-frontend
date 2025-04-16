'use client'
import React from 'react'
import Navbar from "@/components/commons/navbar";
import Footer from "@/components/commons/footer";
import {Categories} from "@/types";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CategoriesPage() {


    function Explore({exploreData}: { exploreData: Categories[] }) {
        return (
            <main className={'flex flex-col py-[3rem]  px-[20px] sm:px-[2rem] lg:px-[80px]'}>
                <p className={'text-[#5a5a5a] font-[800] text-[1rem] md:text-[24px]'}>Explore other categories</p>
                <li className={'flex flex-wrap justify-center md:justify-between items-center w-full gap-[20px] py-[30px] sm:py-[35px]'}>
                    {exploreData.map((data, index) => (
                        <div key={index}
                            className="relative group h-[170px] w-[80%] sm:h-[150px] sm:w-[270px] md:w-[320px] lg:w-[270px] rounded overflow-hidden bg-cover transition-all duration-500"
                            style={{backgroundImage: `url(${data.imageUrl})`, fontFamily: 'Montserrat'}}
                        >
                            <div
                                className="absolute inset-0 pointer-events-none transition-all duration-500 z-0"
                                style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,3) 100%)'}}
                            />
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                                style={{background: 'radial-gradient(circle, rgba(255,255,255,0.01) 15%, rgba(0,0,0,0.5) 85%)'}}
                            />
                            <p className="absolute bottom-2 left-3 z-10 text-white font-bold">{data.text}</p>
                            <div className="absolute font-[800] bottom-[12px] right-[30px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <FaLongArrowAltRight  width={30}   style={{ color: 'white',transform: 'scale(1.15)'}}/>
                            </div>
                        </div>
                    ))}
                </li>
            </main>
        )
    }

    return (
        <div>
            <Navbar/>
            <Explore exploreData={[
                {imageUrl: '/categories_dummy.jpg', text: 'News & Storytelling'},
                {imageUrl: '/categories_dummy.jpg', text: 'Entertainment & Lifestyle'},
                {imageUrl: '/categories_dummy.jpg', text: 'Tech, Sport & Business'},
                {imageUrl: '/categories_dummy.jpg', text: 'Other podcasts'},
            ]}/>
            <Footer/>
        </div>
    )
}
