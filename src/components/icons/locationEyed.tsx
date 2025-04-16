import React from 'react'
import Image from "next/image";

export default function LocationEyed() {
    return (
        <div className={'cursor-pointer'}>
            <Image src={'/location.svg'} alt={''} height={20} width={20}/>
        </div>
    )
}
