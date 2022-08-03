import { useRouter } from 'next/router'
import Link from "next/link";

const _navigationLinks = [{ path: '/offer', label: 'Oferta' }, { path: '/contact', label: 'Kontakt' }];

export const Content = () => {
    const router = useRouter();

    return (
        <div className="flex items-center flex-1 ml-auto mr-24 justify-end">
            {_navigationLinks.map((link, index) => (
                <h3 className={`text-xl ml-16 leading-5 ${router.pathname === link.path && 'underline underline-offset-[-20px] text-primary dark:text-primaryDark'}`} key={index} >
                    <Link href={link.path}>
                        <a>{link.label}</a>
                    </Link>
                </h3>
            ))
            }
        </div >
    )
}

export default Content
