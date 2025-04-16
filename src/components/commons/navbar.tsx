import Image from "next/image";
import {useRouter} from "next/navigation";
import '@/app/globals.css'
import {useEffect, useRef, useState} from "react";
export default function Navbar(){

    const sidebarRef = useRef(null)
    const [isOpen, toggleSidebar] = useState<boolean>(false)
    const navigate = useRouter()
    const navlinks = ['Home', 'Company', 'Resources', 'Contact us', 'Advertise']

    useEffect(() => {
        const handleCLickOutside=(event)=>{
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)){
                toggleSidebar(false);
            }
        }
        document.addEventListener('mousedown', handleCLickOutside)
        return () => {
            document.removeEventListener('mousedown',handleCLickOutside)
        };
    }, []);

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
                <div >
                    <Image src={'/searchIcon.svg'} alt=''
                           width={20} height={20} className='h-[15px] w-[15px]' />
                    <input type="text" placeholder="Search" />
                </div>
            </section>
            <aside className={`${isOpen?'hidden':''} flex cursor-pointer md:hidden`} onClick={()=>{toggleSidebar(true)}}>
                <Image src={'/hamburger.svg'} alt={''} height={20} width={20} c/>
            </aside>
            <aside className={`${isOpen ? 'translate-x-0' : 'translate-x-full'}  
            fixed inset-0 bg-opacity-20 backdrop-blur-sm z-40 transition-opacity duration-300 transition-transform`}
                   onClick={() => toggleSidebar(false)}
            >
                <main ref={sidebarRef}
                    className={`sidebar fixed h-screen top-0 right-0 bg-white backdrop-blur-30 shadow-lg z-50 p-4 `}>
                    <aside className={' pl-3 flex flex-col gap-[15px]'}>
                        <p className={'cursor-pointer hover:bg-gray-300 hover:border-[1px] border-black h-[35px] w-[35px] text-center rounded-[50%] font-thin'}>X</p>
                        <ul className={'flex flex-col gap-[10px] justify-start text-black'}>
                            {
                                navlinks.map((data) => (
                                    <p key={data} className={'cursor-pointer font-bold text-[1rem]'}>
                                        {data}
                                    </p>
                                ))
                            }
                        </ul>
                        <main className={'sidebar_main'} style={{backgroundColor:'#a2a2a2'}}>
                                <Image src={'/searchIcon.svg'} alt=''
                                       width={20} height={20} className='object-contain w-[20px] h-[20px]' />
                            <input type="text" placeholder="Search" className={'outline-0 border-0 w-[80%]'}/>
                        </main>
                    </aside>
                </main>
            </aside>
        </nav>
        )
}