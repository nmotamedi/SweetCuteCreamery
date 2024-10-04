import { flavors } from "../data";

export function Flavors() {
  let keyCount = 0;
  return (
    <>
      <div>
        <h2 className="m-auto text-center py-6">
          CURRENT FLAVORS (but we’re always dreaming up more!)
        </h2>
      </div>
      <div className="flex justify-around text-center pb-44">
        <ul>
          <h2 className="font-bold">OUR FOREVER FLAVORS</h2>
          {flavors.foreverFlavors.map((flavor) => {
            return <li key={keyCount++}>{flavor.title}</li>;
          })}
        </ul>
        <ul>
          <h2 className="font-bold">OUR SIDE PIECES</h2>
          <h2 className="font-semibold">
            (AVAILABLE ON ROTATION FOR LIMITED TIMES)
          </h2>
          {flavors.sidePieces.map((flavor) => {
            return <li key={keyCount++}>{flavor.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
