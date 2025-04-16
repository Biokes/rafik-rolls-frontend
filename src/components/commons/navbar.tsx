import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Navbar(){
    const navigate = useRouter()
    const navlinks = ['Home', 'Company', 'Resources', 'Contact us', 'Advertise']
    return (
        <nav className={'header'}>
            <section onClick={() => navigate.push('/')} className='w-[108px] h-[51px] '>
                <Image src={'/ABR Logo 1.svg'} alt="" height={120} width={120} className="w-full h-full" />
            </section>
            <section>
                <li>
                    {
                        navlinks.map((data) => (
                            <p key={data}>
                                {data}
                            </p>
                        ))
                    }
                </li>
                <div>
                    <Image src={'/searchIcon.svg'} alt=''
                           width={20} height={20} className='h-[20px] w-[20px]' />
                    <input type="text" placeholder="Search" />
                </div>
            </section>
        </nav>
        )
}