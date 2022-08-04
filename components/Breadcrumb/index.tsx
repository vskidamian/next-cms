import Link from "next/link";
import Components from "../index";
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export const Content = () => {
    const router = useRouter();
    const breadcrumb = router.pathname.split('/').slice(1);

    console.log(router);

    return (
        <nav className="flex pt-3.5 pb-7">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/">
                        <a className="inline-flex items-center text-sm">
                            <HomeIcon className="h-5 w-5 mr-2 text-primary dark:text-primaryDark" />
                            Strona główna
                        </a>
                    </Link>
                </li>
                {breadcrumb && breadcrumb.map((name, index, bc) => (
                    <li>
                        <div className="flex items-center">
                            <ChevronRightIcon className='h-6 w-6' />
                            {index + 1 === bc.length ? (
                                <span className="ml-1 text-base font-medium  text-primary dark:text-primaryDark">
                                    {name && name[0].toUpperCase() + name.slice(1)}
                                </span>
                            ) : (
                                <Link href={`/${name}`}>
                                    <a className="ml-1 text-base">
                                        {name && name[0].toUpperCase() + name.slice(1)}
                                    </a>
                                </Link>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav >
    );
};

export default Content