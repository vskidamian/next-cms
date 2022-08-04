import Link from "next/link";
import Components from "../index";
import { useRouter } from 'next/router'

export const Content = () => {
  const router = useRouter();

  return (
    <Components.Container.Content>
      <div className="py-7 inline-flex w-full justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="">Page title</a>
          </Link>
        </h2>
        <Components.Navigation.Content />
        <Components.ThemeSwitch.Content />
      </div>
      {router.pathname !== '/' && <Components.Breadcrumb.Content />}
    </Components.Container.Content>
  );
};

export default Content