import { BlurredDot } from '@/Components/BlurredDot';
import HomeCard from '@/Components/Cards/HomeCard';
import { PriceCard } from '@/types/custom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cardItems: PriceCard[] = [
  {
    name: 'Starter',
    price: 0.99,
    items: [
      {
        text: 'lorem ipsum',
        isAvailable: true,
      },
      {
        text: 'lorem ipsum',
        isAvailable: false,
      },
      {
        text: 'lorem ipsum',
        isAvailable: false,
      },
    ],
  },
  {
    name: 'Standard',
    price: 12.99,
    items: [
      {
        text: 'lorem ipsum',
        isAvailable: true,
      },
      {
        text: 'lorem ipsum',
        isAvailable: true,
      },
      {
        text: 'lorem ipsum',
        isAvailable: false,
      },
    ],
  },
  {
    name: 'Custom',
    price: 29.99,
    items: [
      {
        text: 'lorem ipsum',
        isAvailable: true,
      },
      {
        text: 'lorem ipsum',
        isAvailable: true,
      },
      {
        text: 'lorem ipsum',
        isAvailable: true,
      },
    ],
  },
];

export const Cards = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsSection = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, rotateX: 10, y: -100 },
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsSection.current,
          start: 'top bottom',
        },
      },
    );
  });

  return (
    <section
      ref={cardsSection}
      className="relative flex min-h-screen items-center justify-center gap-6"
      style={{ perspective: '1000px' }}
    >
      <BlurredDot className="absolute left-1/2 top-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform" />

      {cardItems.map((item, index) => {
        const className = item.name === 'Standard' ? 'border-purple-400' : '';

        return (
          <div key={item.name} ref={(el) => (cardsRef.current[index] = el)}>
            <HomeCard
              className={`transition-all hover:scale-105 ${className}`}
              cardItem={item}
            />
          </div>
        );
      })}
    </section>
  );
};
