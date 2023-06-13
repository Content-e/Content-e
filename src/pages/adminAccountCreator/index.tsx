import { schema } from 'components/authentication/register';
import Button from 'components/ui/button';
import Input from 'components/ui/input';
import Select from 'components/ui/select';
import useZodForm from 'hooks/useZodForm';
import init from 'zod-empty';

const options = [
  { value: 'brand', text: 'Brand' },
  { value: 'creator', text: 'Creator' },
];

export default function AdminAccountCreator() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useZodForm({
    schema,
    defaultValues: init(schema),
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <form className="flex flex-col paper" onSubmit={onSubmit}>
      <h1 className="text-xl font-bold mb-4">Add new user</h1>
      <div className="signup__container-form-field">
        <Input
          placeholder="Full Name"
          name="name"
          register={register}
          errors={errors}
        />
      </div>
      <div className="signup__container-form-field">
        <Input
          placeholder="Email Address"
          name="email"
          register={register}
          errors={errors}
        />
      </div>
      <div className="signup__container-form-field">
        <Select
          options={options}
          name="role"
          placeholder="Who are you?"
          className="mb-4"
          control={control}
        />
      </div>
      <Button type="submit" disabled={!isValid || !isDirty || isSubmitting}>
        Add user
      </Button>
    </form>
  );
}
