import { useRouter } from 'next/router'
import Link from "next/link";

const _navigationLinks = [{ path: '/offer', label: 'Oferta' }, { path: '/contact', label: 'Kontakt' }];

export const Content = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div className="flex items-center flex-1">
            {_navigationLinks.map((link, index) => (
                <h3 className="text-xl ml-10 leading-5" key={index}>
                    <Link href={link.path}>
                        <a>{link.label}</a>
                    </Link>
                </h3>
            ))}
        </div>
    )
}

export default Content
