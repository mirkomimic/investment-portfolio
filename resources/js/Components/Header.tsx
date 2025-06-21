import { useGSAP } from '@gsap/react';
import { Link, usePage } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { memo, useRef } from 'react';
import { NavMenu } from './NavMenu';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Header = () => {
  const { auth } = usePage().props;

  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      y: -100,
      // duration: 1,
      scrollTrigger: {
        trigger: document.body,
        start: 'top+=100 top',
        toggleActions: 'play none none reset',
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to(headerRef.current, { y: 0, duration: 0.5 });
          }
        },
      },
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-10 h-14 w-full uppercase backdrop-blur-2xl"
    >
      <div className="container mx-auto grid h-full grid-cols-2 items-center gap-2 lg:grid-cols-3">
        <Link href="/" className="w-10 font-icon text-xl font-bold">
          <img src="/golden-crown.png" />
        </Link>

        <NavMenu />

        <nav className="col-start-3 -mx-3 flex flex-1 justify-end gap-4 font-medium">
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className="rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              >
                Log in
              </Link>
              <Link
                href={route('register')}
                className="rounded-md py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              >
                Register
              </Link>
            </>
          )}
          {/* <ThemeToggle /> */}
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
