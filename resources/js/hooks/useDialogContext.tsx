import { DialogContext } from '@/context/DialogContextProvider';
import { useContext } from 'react';

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      'DialogContext must be used within a DialogContextProvider',
    );
  }

  return context;
};
