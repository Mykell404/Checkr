import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    role: "Medical Practitioner",
  });

  function handleSubmit(e) {
    console.log(form);
    e.preventDefault();
  }

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm((values) => ({ ...values, [name]: value }));
  }
  return (
    <div className="w-full max-w-lg mb-4 md:ml-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="firstname"
          >
            FirstName
          </label>
          <input
            name="firstname"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={form.firstname || ""}
            placeholder="John"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="lastname"
          >
            LastName
          </label>
          <input
            name="lastname"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={form.lastname || ""}
            placeholder="Doe"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label
            for="roles"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Choose your role
          </label>
          <select
            name="role"
            id="role"
            onChange={handleChange}
            value={form.role || ""}
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Medical Practitioner</option>
            <option>Patient</option>
          </select>
        </div>
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
          type="submit"
          value="Mint"
        ></input>
      </form>
    </div>
  );
}
