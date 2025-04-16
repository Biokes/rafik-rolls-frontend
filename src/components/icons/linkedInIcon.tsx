import React from 'react'
import Image from "next/image";

export default function LinkedInIcon() {
    return (
        <div className={'cursor-pointer'}>
            <Image src={'/linkedin.svg'} alt={''} height={20} width={20}/>
        </div>
    )
}
