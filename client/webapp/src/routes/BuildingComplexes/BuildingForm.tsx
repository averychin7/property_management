import { FormEvent, useState } from "react";
import { TBuilding } from "./types";

const INITIAL_BUILDING: TBuilding = {
  name: "",
  address: "",
  accessCode: "",
  noOfUnits: 1,
  noOfFloors: 1,
};

const BuildingForm = ({
  buildingList,
  setBuildingList,
}: {
  buildingList: TBuilding[];
  setBuildingList: (
    value: TBuilding[] | ((prevState: TBuilding[]) => TBuilding[])
  ) => void;
}) => {
  const [formData, setFormData] = useState(INITIAL_BUILDING);

  const addBuilding = (e: FormEvent) => {
    e.preventDefault();
    setBuildingList([...buildingList, formData]);
    setFormData(INITIAL_BUILDING);
  };

  return (
    <form className="flex flex-col item-center h-full w-full gap-y-5">
      {/* building name */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2" htmlFor="name">
          Building Name
        </label>
        <input
          type="text"
          className="border-solid border-black border p-2"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        ></input>
      </div>

      {/* building address */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          className="border-solid border-black border p-2"
          id="address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        ></input>
      </div>

      {/* access code */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2" htmlFor="unitNo">
          Access Code
        </label>
        <div>
          <input
            type="text"
            className="border-solid border-black border p-2 mr-4"
            id="accessCode"
            value={formData.accessCode}
            onChange={(e) =>
              setFormData({ ...formData, accessCode: e.target.value })
            }
          ></input>
          <button className="bg-blue-500 text-white">Random Code</button>
        </div>
      </div>

      {/* no of units */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2" htmlFor="noOfUnits">
          Number of Units
        </label>
        <input
          type="number"
          className="border-solid border-black border p-2"
          id="noOfUnits"
          value={formData.noOfUnits}
          onChange={(e) =>
            setFormData({ ...formData, noOfUnits: parseInt(e.target.value) })
          }
        ></input>
      </div>

      {/* no of floors*/}
      <div className="flex flex-col">
        <label className="font-semibold mb-2" htmlFor="noOfFloors">
          Number of Floors
        </label>
        <input
          type="number"
          className="border-solid border-black border p-2"
          id="noOfFloors"
          value={formData.noOfFloors}
          onChange={(e) =>
            setFormData({ ...formData, noOfFloors: parseInt(e.target.value) })
          }
        ></input>
      </div>

      <button
        className="bg-blue-500 text-white inline-flex items-center mt-4"
        onClick={(e) => addBuilding(e)}
      >
        + Add Building
      </button>
    </form>
  );
};

export default BuildingForm;
