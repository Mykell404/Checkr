import FormField from "./Form/FormField";

export default function Form() {
  return (
    <div className="w-full max-w-xs mb-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormField value="Firstname" placeholder="John" />
        <FormField value="Lastname" placeholder="Doe" />
        <FormField value="DOB" />
      </form>
    </div>
  );
}
