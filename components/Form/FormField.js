export default function FormField(props) {
  return (
    <div className="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
        {props.value}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
