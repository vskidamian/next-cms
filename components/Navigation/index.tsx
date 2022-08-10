import { useRouter } from 'next/router'
import Link from "next/link";
import { MenuAlt1Icon } from '@heroicons/react/solid'
import { useState, useEffect, useRef } from 'react';

const _navigationLinks = [{ path: '/offer', label: 'Oferta' }, { path: '/contact', label: 'Kontakt' }];

export const Content = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const hamburger = useRef<SVGSVGElement>(null);
    const router = useRouter();

    const handleMenuBurgerClick = () => {
        setActiveMenu((prev) => !prev);
    };

    useEffect(() => {
        if (activeMenu) {
            console.log('ok')
            const handleClickOutside = (event: MouseEvent): void => {
                if (hamburger.current && !hamburger.current.contains(event.target as HTMLElement)) {
                    setActiveMenu(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [hamburger, activeMenu]);

    return (
        <>
            <div className="hidden items-center flex-1 ml-auto mr-24 justify-end sm:flex">
                {_navigationLinks.map((link, index) => (
                    <h3 className={`text-xl ml-16 leading-5 ${router.pathname === link.path && 'underline underline-offset-[-20px] text-primary dark:text-primaryDark'}`} key={index} >
                        <Link href={link.path}>
                            <a>{link.label}</a>
                        </Link>
                    </h3>
                ))
                }
            </div>
            <div className="flex items-center flex-1 ml-auto justify-end">
                <MenuAlt1Icon ref={hamburger} onClick={handleMenuBurgerClick} className="h-8 w-8 hover:text-primary dark:hover:text-primaryDark" />
                {activeMenu && <>ELOOO</>}
            </div >
        </>
    )
}

export default Content
