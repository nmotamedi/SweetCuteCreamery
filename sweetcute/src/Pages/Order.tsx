import { useState, useRef, useEffect } from "react";
import { flavors } from "../data";
import emailjs from "@emailjs/browser";

type OptionProps = {
  option: string;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedFlavors, setSelectedFlavors] = useState<Map<string, number>>(
    new Map()
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    const flavorName = event.target.name;

    setSelectedFlavors((prev) => {
      if (prev.has(flavorName)) {
        const map = new Map(prev.set(flavorName, value));
        return map;
      } else {
        return new Map(prev.set(flavorName, value));
      }
    });
  };

  const Option: React.FC<OptionProps> = ({ option, handleCheckboxChange }) => {
    const [val, setVal] = useState<number>(0);

    useEffect(() => {
      const flavCount = selectedFlavors.has(option)
        ? selectedFlavors.get(option)
        : 0;
      setVal(flavCount!);
    }, [option]);

    return (
      <label className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
        <input
          type="number"
          min={0}
          value={val}
          name={option}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        {option}
      </label>
    );
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!form.current) {
        throw new Error("Error");
      }
      const emailParams = {
        selectedFlavors: JSON.stringify(Object.fromEntries(selectedFlavors)),
        name,
        email,
        notes,
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
      setSelectedFlavors(new Map());
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="pb-44 md:pb-4 bg-[#7FBEF0] text-center">
      <h2 className="font-FaroVariable text-[#FEE38C] text-xl md:text-4xl  pt-6 mb-2 text-center">
        PICK UP OR DELIVERY
      </h2>
      <h2 className="font-FaroVariable text-[#FEE38C] text-xl md:text-4xl mb-6 text-center">
        LOS ANGELES
      </h2>
      <h3 className="font-PoppinsBold text-white text-sm md:text-xl mb-3">
        WE ARE NOW TAKING ORDERS.
        <br />
        PLEASE FILL OUT THE FORM BELOW AND WE WILL
        <br />
        GET IN TOUCH TO CONFIRM.
      </h3>
      <h3 className="font-PoppinsBold text-white text-base md:text-xl mb-3">
        $12 per Pint
      </h3>
      <div className="text-center pb-4 md:pb-16 w-11/12 md:w-5/12 m-auto">
        <form
          className="flex flex-col justify-center items-center font-PoppinsLight text-[#FF0000]"
          ref={form}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="bg-white rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-white  rounded-full p-4 w-full mb-2 placeholder:text-[#FF0000]"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <div className="relative w-full mb-2">
            <div
              className="flex justify-between items-center  bg-white p-2 rounded-full cursor-pointer w-full"
              onClick={toggleDropdown}
            >
              <div className="flex-grow truncate text-[#FF0000]">
                {"Select Flavors"}
              </div>
              <div className="text-[#FF0000]">{isDropdownOpen ? "▲" : "▼"}</div>
            </div>
            {isDropdownOpen && (
              <div className="absolute mt-1 w-full  bg-white rounded-3xl shadow-lg max-h-60 overflow-y-auto z-10">
                {flavors.foreverFlavors.map((option) => (
                  <Option
                    key={option.title}
                    option={`${option.title}${option.isGF ? " - GF" : ""}${
                      option.isVegan ? " - V" : ""
                    }${option.isDairyFree ? "- DF" : ""}`}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ))}
              </div>
            )}
          </div>

          <textarea
            className="bg-white  rounded-3xl p-4 w-full placeholder:text-[#FF0000]"
            name="notes"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.currentTarget.value)}
          />

          <button className="bg-[#FC4700] hover:bg-[#85D3A5] text-white rounded-xl mt-2 p-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
