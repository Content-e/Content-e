import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  value: string;
}

const iconMap = {
  submitted: CheckIcon,
  rejected: XMarkIcon,
};

export default function Status({ value }: Props) {
  const isShortForm = ['reject', 'accept', 'submit'].includes(value);
  const status = isShortForm ? `${value}ed` : value;
  const Icon = iconMap[status];

  return (
    <span
      className={`uppercase font-bold flex items-center gap-1 ${
        status === 'rejected' ? 'text-danger' : 'text-success'
      }`}
    >
      {Icon ? (
        <Icon className="h-4 w-4" />
      ) : (
        <span className="ml-1 mr-2">•</span>
      )}
      {status}
    </span>
  );
}
