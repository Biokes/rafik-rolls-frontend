import React from 'react'
import Image from 'next/image';
export default function TwitterIcon() {
    return (
        <div className={'cursor-pointer'}>
            <Image src={'/twitter.svg'} alt={''} height={20} width={20}/>
        </div>
    )
}
