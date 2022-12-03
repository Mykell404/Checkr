import { useState } from "react";
import { useRouter } from "next/router";
// import { mintNFT } from "../utils/mint";

export default function Form({ address }) {
  const [form, setForm] = useState({});
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    const { status } = await mintNft(
      form.firstname,
      form.surname,
      form.gender,
      form.status,
      form.dob,
      form.zip
    );
    console.log(status);
    router.push({ pathname: "/dashboard", query: { address: address } });
  }

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm((values) => ({ ...values, [name]: value }));
  }

  return (
    <div className="mt-12">
      <form
        className="font-outfit md:flex md:flex-row md:flex-wrap md:justify-between"
        onSubmit={handleSubmit}
      >
        <input
          name="firstname"
          className="w-full h-14 mb-12 md:w-2/5 md:h-24"
          type="text"
          placeholder="First name"
          value={form.firstname || ""}
          onChange={handleChange}
        ></input>
        <input
          name="surname"
          className="w-full h-14  mb-12 md:w-2/5 md:h-24"
          type="text"
          placeholder="Surname"
          value={form.surname || ""}
          onChange={handleChange}
        ></input>
        <input
          name="gender"
          className="w-full h-14  mb-12 md:w-2/5 md:h-24"
          type="text"
          placeholder="Gender"
          value={form.gender || ""}
          onChange={handleChange}
        ></input>
        <input
          name="status"
          className="w-full h-14  mb-12 md:w-2/5 md:h-24"
          type="text"
          placeholder="Marital Status"
          value={form.status || ""}
          onChange={handleChange}
        ></input>
        <input
          name="dob"
          className="w-full h-14  mb-12 md:w-2/5 md:h-24"
          type="text"
          placeholder="Date of birth"
          value={form.dob || ""}
          onChange={handleChange}
        ></input>
        <input
          name="zip"
          className="w-full h-14  mb-12 md:w-2/5 md:h-24"
          type="text"
          placeholder="Zip code"
          value={form.zip || ""}
          onChange={handleChange}
        ></input>
        <input
          className="w-full h-14 bg-white text-connect-blue md:w-1/4"
          type="submit"
          value="Create NFT"
        ></input>
      </form>
    </div>
  );
}
