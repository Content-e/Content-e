import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  value: string;
}

const iconMap = {
  submitted: CheckIcon,
  rejected: XMarkIcon,
  inactive: XMarkIcon,
};

export default function Status({ value }: Props) {
  const isShortForm = ['reject', 'accept', 'submit'].includes(value);
  const status = isShortForm ? `${value}ed` : value;
  const Icon = iconMap[status];

  return (
    <span
      className={`uppercase font-bold flex items-center gap-1 ${
        ['rejected', 'inactive'].includes(status)
          ? 'text-danger'
          : 'text-success'
      }`}
    >
      {Icon ? (
        <Icon className="h-4 w-4" />
      ) : (
        <span className="mx-1">●</span>
      )}
      {status}
    </span>
  );
}
