import { useInView } from "motion/react";
import Link from "next/link";
import { FC, useRef } from "react";
import Button from "./button";

const Map: FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 200px 0px" });

  const ADDRESS =
    "Topçuasım, 3502. Sk. No:2, 45110 Manisa Merkez, 45110 Yunusemre/Manisa, Türkiye";
  const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&output=embed`;
  const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS
  )}`;

  return (
    <section
      ref={ref}
      className="w-full items-center justify-center flex flex-col py-6"
      id="location"
    >
      <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg  items-center justify-center flex">
        {inView ? (
          <iframe
            src={GOOGLE_MAPS_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Ovensandwich Google Maps Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <span className="loader z-50" />
        )}
      </div>
      <p className="md:text-lg text-sm pt-6 pb-3 max-w-lg font-primary tracking-tighter text-secondary text-center">
        {ADDRESS} adresinde bulunuyoruz.
      </p>
      <Link href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
        <Button
          className="lg:px-6 lg:py-4"
          aria-label="View Directions on Google Maps Button"
        >
          <span className="font-primary tracking-tight">
            Tek tuşta yol tarifi alın
          </span>
        </Button>
      </Link>
    </section>
  );
};

export default Map;
