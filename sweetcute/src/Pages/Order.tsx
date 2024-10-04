import { useState, useRef } from "react";
import { flavors } from "../data";
import emailjs from "@emailjs/browser";

type OptionProps = {
  option: string;
  isSelected: boolean;
  isDisabled: boolean;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [amountOfPints, setAmountOfPints] = useState(0);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedFlavors((prev) => {
      if (isChecked) {
        // Prevent selecting more than maxOptions
        if (prev.length >= amountOfPints) {
          return prev;
        }
        return [...prev, value];
      } else {
        return prev.filter((val) => val !== value);
      }
    });
  };

  const Option: React.FC<OptionProps> = ({
    option,
    isSelected,
    handleCheckboxChange,
    isDisabled,
  }) => (
    <label className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
      <input
        type="checkbox"
        value={option}
        disabled={isDisabled}
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      {option}
    </label>
  );

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!form.current) {
        throw new Error("Error");
      }
      const emailParams = {
        selectedFlavors: selectedFlavors.join(", "), // The string of selected options
        name,
        email,
        notes,
        amountOfPints,
      };
      emailjs
        .send("service_xupfg62", "template_uq02pdv", emailParams, {
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
    <div className="pb-44 md:pb-10">
      <div className="text-center py-6">ORDER</div>
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
            required
            placeholder="Name"
            className="bg-slate-200 border border-slate-500 rounded-xl p-1"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <h2>Enter Your Email</h2>
          <input
            type="email"
            name="email"
            required
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
          <div className="relative w-64">
            {/* Select Box */}
            <div
              className="flex justify-between items-center border border-gray-300 bg-slate-200 p-2 rounded-md cursor-pointer"
              onClick={toggleDropdown}
            >
              <div className="flex-grow truncate">
                {selectedFlavors.length > 0
                  ? selectedFlavors.join(", ")
                  : "Select options"}
              </div>
              <div className="text-gray-500">{isDropdownOpen ? "▲" : "▼"}</div>
            </div>

            {/* Dropdown Options */}
            {isDropdownOpen && (
              <div className="absolute mt-1 w-full border border-gray-300 bg-slate-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                {flavors.foreverFlavors.map((option) => (
                  <Option
                    key={option.title}
                    option={option.title}
                    isSelected={selectedFlavors.includes(option.title)}
                    isDisabled={
                      selectedFlavors.length >= amountOfPints &&
                      !selectedFlavors.includes(option.title)
                    }
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </div>
            )}
          </div>

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
    </div>
  );
}
