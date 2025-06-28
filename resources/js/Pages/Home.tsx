import { BlurredDot } from '@/Components/BlurredDot';
import { Footer } from '@/Components/Footer';
import Header from '@/Components/Header';
import { Toaster } from '@/Components/ui/sonner';
import { HomePageContext } from '@/hooks/useHomePageContext';
import { Hero } from '@/Sections/Hero';
import { PageProps } from '@/types';
import { Metals } from '@/types/custom';
import { Head } from '@inertiajs/react';

type HomePageProps = {
  laravelVersion: string;
  phpVersion: string;
  usdToRsdRate: number;
  goldPrice: number;
  goldAmount: number;
  goldPaid: number;
  metals: Metals[];
  metalTypes: [];
};

export default function Home({
  auth,
  laravelVersion,
  phpVersion,
  usdToRsdRate = 117,
  goldPrice,
  goldAmount,
  goldPaid,
  metals,
  metalTypes,
}: PageProps<HomePageProps>) {
  return (
    <>
      <Head title="Home" />

      <Toaster
        toastOptions={{
          classNames: {
            success: '!bg-green-500/50 !backdrop-blur-md !border-0',
          },
        }}
        duration={5000}
        position="top-right"
      />

      <div className="relative overflow-hidden">
        <BlurredDot className="absolute -left-[250px] -top-[250px] -z-10 h-[800px] w-[800px]" />

        <img
          src="small-gold-bars.jpg"
          alt=""
          className="absolute -z-20 h-[calc(100vh+56px)] w-full"
        />

        <Header />
        <main className="mx-auto mt-16 min-h-screen w-full">
          <HomePageContext.Provider value={metalTypes}>
            <Hero
              usdToRsdRate={usdToRsdRate}
              goldPrice={goldPrice}
              goldAmount={goldAmount}
              goldPaid={goldPaid}
              metals={metals}
            />
          </HomePageContext.Provider>
        </main>

        <Footer laravelVersion={laravelVersion} phpVersion={phpVersion} />
      </div>
    </>
  );
}
