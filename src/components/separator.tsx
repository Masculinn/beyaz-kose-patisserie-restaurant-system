import Link from "next/link";
import { Logo } from "./logo";
import { FC } from "react";

export const Separator: FC = () => (
  <div className="flex items-center w-full">
    <div className="rounded-full w-full h-[1px] bg-gradient-to-r  from-zinc-200 to-zinc-600" />
    <div className="text-gray-600 uppercase w-fit dark:text-gray-300 text-nowrap">
      <Link href="/">
        <Logo width={250} height={250} className="my-8" />
      </Link>
    </div>
    <div className="bg-gradient-to-r rounded-full w-full h-[1px] from-zinc-600  to-zinc-200" />
  </div>
);
