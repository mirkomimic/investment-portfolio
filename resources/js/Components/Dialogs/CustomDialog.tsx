import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { useDialogContext } from '@/hooks/useDialogContext';
import { ReactElement, ReactNode } from 'react';
import { Button } from '../ui/button';

type CustomDialogType = {
  button: ReactElement<typeof Button>;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function CustomDialog({
  button,
  title,
  description,
  children,
}: CustomDialogType) {
  const { open, setOpen } = useDialogContext();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent
        className="border-yellow-300 bg-gray-800 sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
