import {Link} from "react-router-dom";
import {Button} from "./ui/button.tsx";
import {footerLinksData} from "../assets/staticData/staticData.ts";


export default function Footer() {
    return (
        <footer className="bg-[#22222A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className='flex flex-col justify-between'>
                        <div>
                            <img src='/images/footerLogo.svg' alt="GiftList" className="w-[123px] h-[21px]"/>
                            <p className="mt-2 text-[15px] font-normal text-white">Gifting made easy.</p>
                        </div>
                        <div>
                            <div className="flex space-x-4 mt-4">
                                <img src='/images/Twitter.svg' alt="Twitter" className="w-[24px] h-[24px]"/>
                                <img src='/images/Facebook.svg' alt="Twitter" className="w-[24px] h-[24px]"/>
                                <img src='/images/TikTok.svg' alt="Twitter" className="w-[24px] h-[24px]"/>
                                <img src='/images/Instagram.svg' alt="Twitter" className="w-[24px] h-[24px]"/>
                            </div>
                            <p className="text-gray-400 mt-4 text-sm">© {new Date().getFullYear()} GiftList. All rights Reserved</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold">About GiftList</h3>
                            <ul className="mt-4 space-y-2">
                                {footerLinksData[0]?.aboutGiftList &&
                                    footerLinksData[0].aboutGiftList.map((item) => (
                                        <li key={item.id}>
                                            <Link className="hover:text-gray-300 text-[15px] font-normal" to="#">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Help</h3>
                            <ul className="mt-4 space-y-2">
                                {footerLinksData[1]?.help &&
                                    footerLinksData[1].help.map((item) => (
                                        <li key={item.id}>
                                            <Link className="hover:text-gray-300 text-[15px] font-normal" to="#">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <Button variant='ghost' className='w-[50%]'>Log in</Button>
                        <Button variant='secondary' className='w-[50%] mt-2'>Sign Up</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}





