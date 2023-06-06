interface Props {
  value: string;
}

export default function Status({ value }: Props) {
  return (
    <span
      className={`uppercase font-bold ${
        value.toLowerCase().includes('reject') ? 'text-danger' : 'text-success'
      }`}
    >
      {value && `• ${value}`}
    </span>
  );
}
