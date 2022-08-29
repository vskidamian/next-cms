import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next";

export const Content = () => {
    const { t } = useTranslation(['common']);

    const router = useRouter();
    const breadcrumb = router.pathname.split('/').slice(1);

    return (
        <nav className="flex pt-3.5 pb-7">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/">
                        <a className="inline-flex items-center text-sm">
                            <HomeIcon className="h-5 w-5 mr-2 text-primary" />
                            {t('home-page')}
                        </a>
                    </Link>
                </li>
                {breadcrumb && breadcrumb.map((name, index, bc) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRightIcon className='h-5 w-5 text-gray-400' />
                            {index + 1 === bc.length ? (
                                <span className="ml-1 text-base font-medium  text-primary dark:text-primaryDark">
                                    {name && t(name)}
                                </span>
                            ) : (
                                <Link href={`/${name}`}>
                                    <a className="ml-1 text-base">
                                        {name && t(name)}
                                    </a>
                                </Link>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};


export default Content