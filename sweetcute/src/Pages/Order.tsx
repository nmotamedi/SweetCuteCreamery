import { useState } from "react";

export function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amountOfPints, setAmountOfPints] = useState(0);
  const [flavors, setFlavors] = useState<string[]>([]);

  return (
    <>
      <div>Order</div>
      <div>
        <form>
          <label>
            Enter Your Name
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </label>
          <label>
            Enter Your Email
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </label>
          <label>
            How Many Pints Do You Want?
            <input
              type="number"
              placeholder="0"
              min={0}
              value={amountOfPints}
              onChange={(e) => setAmountOfPints(+e.currentTarget.value)}
            />
          </label>
          <label>
            What flavors do you want?
            <input
              type=""
              onChange={(e) => setAmountOfPints(+e.currentTarget.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
