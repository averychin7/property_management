import { useState } from "react";
import BuildingForm from "./BuildingForm";
import { Building } from "./types";

const ComplexForm = () => {
  const [buildingList, setBuildingList] = useState<Building[]>([]);
  const [currBuilding, setCurrentBuilding] = useState(0);

  const [complexForm, setComplexForm] = useState({
    name: "",
  });

  const submitComplex = async (e: any) => {
    e.preventDefault();
    const formData = {
      complex: { ...complexForm },
      buildingList: buildingList,
    };
    const response = await fetch("/api/complexes/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setComplexForm({ name: "" });
      setBuildingList([]);
    }
  };

  // const removeBuilding = (target: number) => {
  //   const frontList = buildingList.slice(0, target);
  //   const lastList = buildingList.slice(target + 1);
  //   setBuildingList([...frontList, ...lastList]);
  // };

  return (
    <form
      className="flex flex-col h-full w-full gap-y-5"
      onSubmit={submitComplex}
    >
      {/* complex name */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2" htmlFor="name">
          Complex Name
        </label>
        <input
          type="text"
          className="border-solid border-black border p-2"
          id="name"
          value={complexForm.name}
          onChange={(e) =>
            setComplexForm({ ...complexForm, name: e.target.value })
          }
        ></input>
      </div>

      <div className="border border-slate-500 p-4 rounded">
        <BuildingForm
          buildingList={buildingList}
          setBuildingList={setBuildingList}
        />
      </div>

      <div>
        <h3 className="mb-4 text-2xl">Buildings</h3>
        {buildingList.map((building, index) => (
          <BuildingCard building={building} />
        ))}
      </div>

      <button className="bg-blue-500 text-white">Create Complex</button>
    </form>
  );
};

export default ComplexForm;

const BuildingCard = ({ building }: { building: Building }) => {
  // delete + edit building

  // const editBuilding = (data: {}) => {};
  return (
    <div className="bg-slate-200 p-4 mb-4">
      <button className="mb-4">Delete</button>
      <p>Building Name: {building.name}</p>
      <p>Address: {building.address}</p>
      <p>Access Code: {building.accessCode} </p>
      <p>Number of Units: {building.noOfUnits}</p>
      <p>Number of Floors: {building.noOfFloors}</p>
    </div>
  );
};
