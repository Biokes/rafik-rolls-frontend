import React from 'react'
import Image from "next/image";

export default function InstagramIcon() {
    return (
        <div className={'cursor-pointer w-[20px] h-[20px]'}>
            <Image src={'/instagram.svg'} alt={''} height={20} width={20} className={'object-center object-cover w-full h-full'}/>
        </div>
    )
}
