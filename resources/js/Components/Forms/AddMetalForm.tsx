import { HomePageContext } from '@/context/HomePageContext';
import { useDialogContext } from '@/hooks/useDialogContext';
import { MetalsForm } from '@/types/custom';
import { useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';
import { FormEvent, useContext, useRef } from 'react';
import { toast } from 'sonner';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import { SimpleSelect } from '../Selects/SimpleSelect';
import TextInput from '../TextInput';
import { Button } from '../ui/button';

export const AddMetalForm = () => {
  const { data, setData, post, processing, errors, reset } =
    useForm<MetalsForm>({
      metalType: '',
      amount: '',
      paid: '',
    });

  const formRef = useRef<HTMLFormElement | null>(null);
  const { setOpen } = useDialogContext();
  const metalTypes = useContext(HomePageContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    post(route('metals.store'), {
      onSuccess: () => {
        reset();
        setOpen(false);
        toast.success('Message', {
          description: 'Item added!',
        });
      },
    });
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <SimpleSelect
          placeholder="Select metal"
          label="metals"
          data={metalTypes}
          setData={setData}
        />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="amount" value="Amount(g)" />

        <TextInput
          id="amount"
          type="number"
          name="amount"
          value={data.amount}
          className="mt-1 block w-full p-2"
          onChange={(e) => setData('amount', Number(e.target.value))}
        />

        <InputError message={errors.amount} className="mt-2" />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="paid" value="Paid" />

        <TextInput
          id="paid"
          type="number"
          name="paid"
          value={data.paid}
          className="mt-1 block w-full p-2"
          onChange={(e) => setData('paid', Number(e.target.value))}
        />

        <InputError message={errors.paid} className="mt-2" />
      </div>

      <div className="mt-3 flex w-full justify-end">
        <Button variant="link" disabled={processing} onClick={handleClose}>
          Close
        </Button>
        <Button type="submit" disabled={processing}>
          {processing && <Loader className="animate-spin" />} Submit
        </Button>
      </div>
    </form>
  );
};
