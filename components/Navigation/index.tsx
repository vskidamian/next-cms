import { useRouter } from 'next/router'
import Link from "next/link";
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';

const _navigationLinks = [{ path: '/offer', label: 'Oferta' }, { path: '/contact', label: 'Kontakt' }];

type ContentProps = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>
    handleClick: () => void
}

export const Content = ({ handleClick, isActive, setIsActive }: ContentProps) => {
    const hamburger = useRef<SVGSVGElement>(null);
    const router = useRouter();

    return (
        <>
            <div className="hidden items-center flex-1 ml-auto mr-24 justify-end md:flex">
                {_navigationLinks.map((link, index) => (
                    <h3 className={`text-xl ml-16 leading-5 ${router.pathname === link.path && 'underline underline-offset-[-20px] text-primary dark:text-primaryDark'}`} key={index} >
                        <Link href={link.path}>
                            <a>{link.label}</a>
                        </Link>
                    </h3>
                ))
                }
            </div>
            <div className="flex items-center flex-1 ml-auto justify-end md:hidden">
                {isActive ? <XIcon ref={hamburger} onClick={handleClick} className="h-8 w-8  hover:text-primary dark:hover:text-primaryDark z-50" />
                    : <MenuAlt1Icon ref={hamburger} onClick={handleClick} className="h-8 w-8 hover:text-primary dark:hover:text-primaryDark z-50" />}
            </div >
            <div className={`fixed w-screen h-screen z-40 top-0 left-0 bg-white py-16 ease-in-out duration-500 ${isActive ? "translate-x-0 " : "translate-x-full"} dark:bg-black md:hidden`}>
                <ul className='flex flex-col items-center h-[calc(100vh-4rem)] overflow-y-auto'>
                    {_navigationLinks.map((link, index) => (
                        <li className={`text-center my-2 p-5 w-full text-xl leading-5 ${router.pathname === link.path && 'text-primary dark:text-primaryDark'}`} key={index} >
                            <Link href={link.path} >
                                <a onClick={() => setIsActive(false)} className='block w-full'>{link.label}</a>
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>

        </>
    )
}

export default Content
