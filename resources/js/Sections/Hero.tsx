import InvestmentsInfoCard from '@/Components/Cards/InvestmentsInfoCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  ChartLine,
  DollarSign,
  HandCoins,
  Receipt,
  Weight,
} from 'lucide-react';

gsap.registerPlugin(useGSAP, SplitText);

type HeroPageProps = {
  usdToRsdRate: number;
  goldPrice: number;
  goldAmount: number;
  goldPaid: number;
};

export const Hero = ({
  usdToRsdRate,
  goldPrice,
  goldAmount,
  goldPaid,
}: HeroPageProps) => {
  const goldPriceInRsd = goldPrice * usdToRsdRate;
  const currentGoldValue = goldAmount * goldPriceInRsd;
  const profit = currentGoldValue - goldPaid;

  const items = [
    {
      icon: <Weight className="absolute left-0 top-0 m-3 text-yellow-300" />,
      info: 'Grams',
      value: goldAmount,
    },
    {
      icon: <Receipt className="absolute left-0 top-0 m-3 text-yellow-300" />,
      info: 'Paid',
      value: goldPaid,
    },
    {
      icon: <ChartLine className="absolute left-0 top-0 m-3 text-yellow-300" />,
      info: 'Price',
      value: goldPriceInDin,
    },
    {
      icon: (
        <DollarSign className="absolute left-0 top-0 m-3 text-yellow-300" />
      ),
      info: 'Value',
      value: currentGoldValue,
    },
    {
      icon: <HandCoins className="absolute left-0 top-0 m-3 text-yellow-300" />,
      info: 'Profit',
      value: profit,
    },
  ];

  useGSAP(() => {
    gsap.from('.animate-card', {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      y: -50,
      ease: 'power3.out',
    });
  });

  if (
    goldPrice === null ||
    usdToRsdRate === null ||
    goldAmount === null ||
    goldPaid === null
  ) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-screen">
      <div className="flex flex-wrap items-start justify-center gap-10">
        {items.map((item) => (
          <InvestmentsInfoCard
            key={item.info}
            icon={item.icon}
            info={item.info}
            value={item.value}
          />
        ))}
      </div>
    </section>
  );
};
