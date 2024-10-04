import { faIceCream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { flavors } from "../data";

export function Flavors() {
  let keyCount = 0;
  return (
    <>
      <div>
        <h2 className="m-auto text-center">
          CURRENT FLAVORS (but we’re always dreaming up more!)
        </h2>
      </div>
      <div className="flex flex-wrap items-baseline">
        {flavors.map((flavor) => {
          return (
            <FlavorWrapper
              title={flavor.title}
              description={flavor.description}
              key={keyCount++}
            />
          );
        })}
      </div>
    </>
  );
}

function FlavorWrapper({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center basis-1/3 my-8 px-1">
      <h2>{title}</h2>
      <FontAwesomeIcon
        icon={faIceCream}
        style={{ height: "2rem", margin: "1rem" }}
      />
      <h3>{description}</h3>
    </div>
  );
}
