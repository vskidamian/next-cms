import Link from "next/link";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <div className="bg-yellow-300 rounded-b-lg p-14 drop-shadow-md inline-flex w-full justify-between items-center">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="">foodTrack</a>
        </Link>
      </h2>
      <DotsHorizontalIcon className="w-8" />
    </div>
  );
};
