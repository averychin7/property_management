import { useState } from "react";

const BuildingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    accessCode: "",
    noOfUnit: 1,
    noOfFloor: 1,
  });

  const submitBuilding = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("/api/building/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="py-12">Create Building</h1>
      <form className="flex flex-col h-full gap-y-5" onSubmit={submitBuilding}>
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

        {/* access code */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2" htmlFor="unitNo">
            Access Code
          </label>
          <input
            type="text"
            className="border-solid border-black border p-2"
            id="accessCode"
            value={formData.accessCode}
            onChange={(e) =>
              setFormData({ ...formData, accessCode: e.target.value })
            }
          ></input>
          <button>Random Code</button>
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
            value={formData.noOfUnit}
            onChange={(e) =>
              setFormData({ ...formData, noOfUnit: parseInt(e.target.value) })
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
            value={formData.noOfFloor}
            onChange={(e) =>
              setFormData({ ...formData, noOfFloor: parseInt(e.target.value) })
            }
          ></input>
        </div>

        <button>Create</button>
      </form>
    </div>
  );
};

export default BuildingForm;
