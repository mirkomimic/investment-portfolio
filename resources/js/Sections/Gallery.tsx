import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Gallery = () => {
  const galleryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.image',
      { xPercent: 100 * 2 },
      {
        xPercent: 0, // number of images - 1
        ease: 'none',
        duration: 2,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top-=600 top-=600',
          end: () => '+=' + window.innerWidth * 2, // adjust for scroll distance
          scrub: true,
          pin: true,
          // anticipatePin: 1,
          markers: true,
        },
      },
    );
  });

  return (
    <section
      ref={galleryRef}
      className="flex min-h-screen items-center gap-32 overflow-x-hidden overflow-y-hidden whitespace-nowrap"
    >
      <div className="image size-96 border"></div>
      <div className="image relative top-40 size-96 border"></div>
    </section>
  );
};
