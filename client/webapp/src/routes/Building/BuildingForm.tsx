const BuildingForm = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-12">Create Building</h1>
      <form className="flex flex-col h-full gap-y-5">
        {/* building name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2" htmlFor="name">
            Building Name
          </label>
          <input
            type="text"
            className="border-solid border-black border p-2"
            id="name"
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
          ></input>
          <button>Random Code</button>
        </div>

        {/* no of units */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2" htmlFor="noOfUnits">
            Number of Units
          </label>
          <input
            type="text"
            className="border-solid border-black border p-2"
            id="noOfUnits"
          ></input>
        </div>

        {/* no of floors*/}
        <div className="flex flex-col">
          <label className="font-semibold mb-2" htmlFor="noOfFloors">
            Number of Floors
          </label>
          <input
            type="text"
            className="border-solid border-black border p-2"
            id="noOfFloors"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default BuildingForm;
