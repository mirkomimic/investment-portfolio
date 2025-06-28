import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type DialogContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DialogContext = createContext<DialogContextType | undefined>({
  open: false,
  setOpen: () => {},
});

export const DialogContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};
