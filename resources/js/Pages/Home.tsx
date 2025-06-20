import { BlurredDot } from '@/Components/BlurredDot';
import { Footer } from '@/Components/Footer';
import Header from '@/Components/Header';
import { Hero } from '@/Sections/Hero';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Home({
  auth,
  laravelVersion,
  phpVersion,
  usdToRsdRate = 117,
  goldPrice,
}: PageProps<{
  laravelVersion: string;
  phpVersion: string;
  usdToRsdRate: number;
  goldPrice: number;
}>) {
  return (
    <>
      <Head title="Home" />

      <div className="relative overflow-hidden">
        <BlurredDot className="absolute -left-[250px] -top-[250px] -z-10 h-[800px] w-[800px]" />

        <img
          src="small-gold-bars.jpg"
          alt=""
          className="absolute -z-20 h-screen w-full"
        />

        <Header />
        <main className="mx-auto mt-16 min-h-screen w-full">
          <Hero usdToRsdRate={usdToRsdRate} goldPrice={goldPrice} />
        </main>

        <Footer laravelVersion={laravelVersion} phpVersion={phpVersion} />
      </div>
    </>
  );
}
