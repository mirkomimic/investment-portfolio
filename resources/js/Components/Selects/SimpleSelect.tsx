import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import { MetalTypes } from '@/types/custom';

export function SimpleSelect({
  placeholder,
  label,
  data,
  setData,
}: {
  placeholder: string;
  label: string;
  data: MetalTypes[];
  setData: (field: string, value: unknown) => void;
}) {
  return (
    <Select onValueChange={(value) => setData('metalType', value)}>
      <SelectTrigger className="w-full bg-gray-900">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data.map((item) => (
            <SelectItem value={item.id.toString()} key={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
