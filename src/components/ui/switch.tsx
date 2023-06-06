import { InputHTMLAttributes } from 'react';
import { Switch as SwitchBase } from '@headlessui/react';
import {
  type FieldValues,
  type Path,
  useController,
  type UseControllerProps,
} from 'react-hook-form';
import Label from './label';

type Props<T extends FieldValues> = UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>;
    label?: string;
  };

export default function Switch<T extends FieldValues>(props: Props<T>) {
  const {
    field: { value, onChange },
  } = useController(props);

  const labelName = props.label ?? String(props.name);

  return (
    <fieldset className="flex flex-col my-4">
      {labelName && <Label name={labelName} required={props.required} />}
      <SwitchBase
        checked={value}
        onChange={onChange}
        className={`${
          value ? 'bg-primary' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full outline-none`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            value ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </SwitchBase>
    </fieldset>
  );
}
