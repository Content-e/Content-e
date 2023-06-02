import _ from "lodash";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, type SelectHTMLAttributes, useMemo } from "react";
import {
  type FieldError,
  type FieldErrors,
  type FieldValues,
  type Path,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import Label from "./label";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export interface Option {
  text: string;
  value: string;
}

type Props<T extends FieldValues> = UseControllerProps<T> &
  SelectHTMLAttributes<HTMLButtonElement> & {
    name: Path<T>;
    label?: string;
    options: Option[];
    errors?: FieldErrors<T>;
  };

function Select<T extends FieldValues>(props: Props<T>) {
  const { name, label, errors, className, options } = props;
  const {
    field: { value, onChange },
  } = useController(props);

  const error = _.get(errors, name) as FieldError | undefined;
  const labelName = label ?? String(name);

  const selectedOption = useMemo(() => {
    return _.find(options, { value }) as Option | undefined;
  }, [options, value]);

  return (
    <Listbox
      name={name}
      value={value}
      onChange={onChange}
      className={`flex flex-col relative mb-4 ${className}`}
      as="fieldset"
    >
      {labelName && <Label name={labelName} />}
      <Listbox.Button
        id={name}
        className={`
          w-full rounded-lg bg-[#F9FBFD] border-[#005F730D] border-[1px] text-gray-400 p-5 text-start
          ${error && "ring-2 ring-red-400"}
        `}
      >
        <ChevronUpDownIcon className="absolute h-6 right-0 mr-2" />
        {selectedOption?.text || props.placeholder}
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options
          className="
          bg-gray-200 text-gray-700
          py-1 rounded-md backdrop-blur absolute bottom-0
          translate-y-full w-full z-[1000]
        "
        >
          {_.map(options, (option) => (
            <Listbox.Option
              value={option.value}
              key={option.value}
              className={({ active }) =>
                `py-1 px-2 relative flex cursor-pointer ${
                  active && "bg-primary text-white"
                }`
              }
            >
              {option.text}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
      {error?.message && (
        <p className="text-red-400 text-sm mx-3 mt-1">{error.message}</p>
      )}
    </Listbox>
  );
}

export default Select;
