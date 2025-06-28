import { MetalTypes } from '@/types/custom';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<MetalTypes>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'amount',
    header: 'AMOUNT (g)',
  },
  {
    accessorKey: 'metal_type_name',
    header: 'TYPE',
  },
  {
    accessorKey: 'paid',
    header: 'PAID',
    cell: ({ row }) => {
      const paid = new Intl.NumberFormat('de-DE').format(row.getValue('paid'));

      return <div>{paid}</div>;
    },
  },
];
