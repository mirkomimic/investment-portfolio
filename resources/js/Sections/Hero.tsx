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

const myGold = [
  {
    amount: 20,
    paid: 234000,
  },
  {
    amount: 20,
    paid: 233500,
  },
];

export const Hero = ({
  usdToRsdRate,
  goldPrice,
}: {
  usdToRsdRate: number;
  goldPrice: number;
}) => {
  const goldAmount = myGold.reduce((acc, item) => acc + item.amount, 0);
  const goldPaid = myGold.reduce((acc, item) => acc + item.paid, 0);
  const goldPriceInDin = goldPrice * usdToRsdRate;
  const currentGoldValue = goldAmount * goldPriceInDin;
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

  if (goldPrice === null || usdToRsdRate === null) {
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
