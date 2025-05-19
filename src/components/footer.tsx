import { FC } from "react";
import Link from "next/link";
import { Separator } from "./separator";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-8 pb-14 w-full mx-auto ">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full gap-8">
        <h1 className="text-5xl font-extralight  font-brand self-center justify-self-center text-center">
          PATTISERRIE
        </h1>
      </div>
      <Separator />
      <div className=" px-2">
        <div className="flex justify-center">
          <p className="text-xs leading-5 text-secondary text-center font-primary">
            &copy; {currentYear} Tüm hakları saklıdır. |{" "}
            <Link
              href="https://burakdev.com/motion-provider/"
              target="_blank"
              className="hover:text-white hover:underline underline-offset-3 transition-all duration-500 hover:decoration-secondary"
            >
              Powered By Motion Provider
            </Link>{" "}
            -{" "}
            <Link
              href="https://burakdev.com/"
              target="_blank"
              className="hover:underline hover:text-white underline-offset-3 transition-all duration-500 hover:decoration-secondary"
            >
              Burak Bilen.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
