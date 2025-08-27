import Image from 'next/image'
import InstagramIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/facebookIcon";
import LinkedInIcon from "@/components/icons/linkedInIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import LocationEyed from "@/components/icons/locationEyed";
import '@/app/globals.css'
export default function Footer() {
    const navlinks = ['Home', 'About us ', 'resources']
    return (
        <main className={`bg-[#282828] gap-[15px] flex flex-col p-2 text-white font-thin px-1 sm:pl-3 w-full`}>
            <nav className={'h-[45px] w-[125px]'}>
                <Image src={'/footerLogo.svg'} alt={''} width={1} height={1} className={'object-contain w-full h-full'}/>
            </nav>
            <section
                className={'flex flex-col md:flex-row w-full justify-start  md:justify-center md:items-center w-full  md:px-[20px] text-nowrap' +
                    ' font-bold uppercase text-white  text-[0.6rem] md:text-[0.55rem] lg:text-[0.8rem] pl-2 md:pl-0 text-start  md:text-center '}>
                {
                    navlinks.map((data, index)=>(
                        <p key={index} className={'md:border-[0_1px_0_0] border-white  sm:px-3 md:px-4 h-full flex items-center'}>
                            {data}
                        </p>
                    ))
                }
                <div className={'flex gap-1 items-center'}>
                    <p className={'md:px-3 text-start sm:text-center'}>
                        Connect with ABR
                    </p>
                    <section className={'flex gap-[5px] iconsBox h-full items-center'}>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LocationEyed/>
                        <LinkedInIcon/>
                    </section>
                </div>
            </section>
            <footer className={'flex gap-[10px] md:gap-[15px] text-[0.5rem] md:text-[0.65rem] pl-2 footer_bottom'}>
                <h5 className={'capitalize'}>. &copy; copyright 2021. All Rights Reserved.</h5>
                <p>Terms & Conditions</p>
                <p>Privacy policy</p>
            </footer>
        </main>
    )
}