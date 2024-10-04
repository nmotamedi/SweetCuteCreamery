import { useState, useRef } from "react";
import { flavors } from "../data";
import emailjs from "@emailjs/browser";

export function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [amountOfPints, setAmountOfPints] = useState(0);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const form = useRef<HTMLFormElement>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setSelectedFlavors(selectedOptions);
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!form.current) {
        throw new Error("Error");
      }
      emailjs
        .sendForm("service_xupfg62", "template_uq02pdv", form.current, {
          publicKey: "Hn_2krR1sFjxnrUyV",
        })
        .then(
          () => {
            alert("Email successfully sent");
          },
          (error) => {
            throw new Error(error);
          }
        );
      setName("");
      setEmail("");
      setNotes("");
      setAmountOfPints(0);
      setSelectedFlavors([]);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="text-center">ORDER</div>
      <div className="text-center">
        Send us an email using the form below and we will get in touch about
        your order!
      </div>
      <div className="text-center bg-green-200 border border-slate-400 rounded-xl w-11/12 pb-16 md:w-1/3 m-auto">
        <form
          className="flex flex-col justify-center items-center"
          ref={form}
          onSubmit={handleSubmit}
        >
          <h2>Enter Your Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-slate-200 border border-slate-500 rounded-xl p-1"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <h2>Enter Your Email</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-slate-200 border border-slate-500 rounded-xl p-1"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <h2>How Many Pints Do You Want?</h2>
          <h3>$12 per Pint</h3>
          <input
            type="number"
            name="amountOfPints"
            placeholder="0"
            className="bg-slate-200 border border-slate-500 rounded-xl p-1"
            min={0}
            value={amountOfPints}
            onChange={(e) => setAmountOfPints(+e.currentTarget.value)}
          />

          <h2>What flavors are you interested in?</h2>
          <h3>Click multiple by holding Command or Control</h3>
          <select
            className="bg-slate-200 border border-slate-500 rounded-xl p-1"
            name="selectedFlavors"
            multiple={true}
            onChange={handleSelectChange}
            value={selectedFlavors}
          >
            {flavors.map((flavor) => {
              return (
                <option
                  value={flavor.title.split(" ").join("")}
                  key={flavor.title}
                >
                  {flavor.title} {flavor.isGF && "- GF "}
                  {flavor.isVegan && "- VG"}
                </option>
              );
            })}
          </select>

          <h2>Any Notes?</h2>
          <textarea
            className="bg-slate-200 border border-slate-500 rounded-xl p-1"
            name="notes"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.currentTarget.value)}
          />

          <button className="bg-[#FC4700] border border-slate-100 rounded-xl p-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
