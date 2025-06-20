import { PriceCard } from '@/types/custom';
import { Check } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function HomeCard({
  className,
  cardItem,
  ...props
}: HTMLAttributes<HTMLDivElement> & { cardItem: PriceCard }) {
  return (
    <Card
      className={`h-[400px] w-[350px] ${className} flex flex-col justify-between`}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-4xl">{cardItem.name}</CardTitle>
        <CardDescription className="text-xl">
          $ {cardItem.price} / per month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {cardItem.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              {item.isAvailable ? (
                <>
                  <Check className="text-green-400" />{' '}
                  <span className="text-xl">{item.text}</span>
                </>
              ) : (
                <>
                  <Check className="text-gray-200" />{' '}
                  <span className="text-xl text-gray-400 line-through">
                    {item.text}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="h-14 w-full bg-indigo-200 dark:bg-indigo-500"
        >
          Get started
        </Button>
      </CardFooter>
    </Card>
  );
}
