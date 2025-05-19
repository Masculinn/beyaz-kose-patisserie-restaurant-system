import { FC } from "react";
import { Separator } from "./separator";
import Link from "next/link";

import Map from "./map";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mx-auto pb-6">
      <Map />
      <Separator />
      <div className="px-2 ">
        <div className="flex justify-center">
          <div className="text-xs leading-5 text-secondary text-center font-primary">
            &copy; {currentYear} Tüm hakları saklıdır. |{" "}
            <Link
              href="https://burakdev.com/motion-provider/"
              target="_blank"
              className="hover:text-white hover:underline underline-offset-3 transition-all duration-500 hover:decoration-secondary"
            >
              Powered By Motion Provider
            </Link>
            {" by "}
            <Link
              href="https://burakdev.com/"
              target="_blank"
              className="hover:underline hover:text-white underline-offset-3 transition-all duration-500 hover:decoration-secondary"
            >
              Burak Bilen.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
