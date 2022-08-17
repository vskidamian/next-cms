import Link from "next/link";
import Components from "../index";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export const Content = () => {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenuBurgerClick = () => {
    setActiveMenu((prev) => !prev);
  };
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = 'hidden'
    }
  }, [activeMenu])

  return (
    <Components.Container.Content>
      <div className="py-7 inline-flex w-full justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight z-50 md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="" onClick={() => setActiveMenu(false)}>Page title</a>
          </Link>
        </h2>
        <Components.Navigation.Content isActive={activeMenu} setIsActive={setActiveMenu} handleClick={handleMenuBurgerClick} />
        <Components.ThemeSwitch.Content />
      </div>
      {router.pathname !== '/' && <Components.Breadcrumb.Content />}
    </Components.Container.Content>
  );
};

export default Content