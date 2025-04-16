import React from 'react'
import Image from "next/image";

export default function InstagramIcon() {
    return (
        <div className={'cursor-pointer'}>
            <Image src={'/instagram.svg'} alt={''} height={20} width={20}/>
        </div>
    )
}
