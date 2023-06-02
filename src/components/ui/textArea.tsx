import Label from "components/ui/label";
import _ from "lodash";
import { type TextareaHTMLAttributes } from "react";
import {
  type FieldError,
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";

type Props<T extends FieldValues> =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: Path<T>;
    label?: string;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    inputClassName?: string;
  };

/// This is react-hook-form compatible version of Input
export default function TextArea<T extends FieldValues>({
  name,
  label,
  register,
  errors,
  className = "mb-4",
  inputClassName = "",
  required,
  ...rest
}: Props<T>) {
  const error = _.get(errors, name) as FieldError | undefined;
  const labelName = label ?? String(name);

  return (
    <fieldset className={`flex flex-col ${className}`}>
      {labelName && <Label name={labelName} required={required} />}
      <textarea
        id={name}
        className={`
          w-full rounded-lg bg-[#F9FBFD] border-[#005F730D] border-[1px] text-gray-400 p-5 ${inputClassName}
        `}
        {...register(name, { required })}
        {...rest}
      />
      {error?.message && (
        <p className="text-red-500 text-sm mx-1">{error.message}</p>
      )}
    </fieldset>
  );
}
