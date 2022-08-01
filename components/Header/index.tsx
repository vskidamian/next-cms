import Link from "next/link";
import Components from "../index";

export const Content = () => {
  return (
    <>
      <div className="p-7 inline-flex w-full justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="">Page title</a>
          </Link>
        </h2>
        <div className="ml-auto mr-14">
          <Components.Navigation.Content />
        </div>
        <Components.ThemeSwitch.Content />
      </div>
    </>
  );
};

export default Content