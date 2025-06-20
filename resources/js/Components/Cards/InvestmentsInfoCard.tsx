import { useHelpers } from '@/hooks/helpers';
import { Card } from '../ui/card';

type InvestmentsInfoCardProps = {
  icon: React.ReactNode;
  info: string;
  value: number;
};

const InvestmentsInfoCard = ({
  icon,
  info,
  value,
}: InvestmentsInfoCardProps) => {
  const { formatCurrency } = useHelpers();

  return (
    <Card className="animate-card relative flex size-40 cursor-pointer items-center justify-center border-yellow-300 bg-slate-900/80 backdrop-blur-md">
      {icon}
      <div className="absolute right-0 top-0 m-3 font-extralight lowercase">
        {info}
      </div>
      <div className={`text-xl font-bold ${value >= 0 ? '' : 'text-red-500'}`}>
        {formatCurrency(value)}
      </div>
    </Card>
  );
};

export default InvestmentsInfoCard;
