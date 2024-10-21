const allCondo = [
  { name: "Condo1 - Tower A" },
  { name: "Condo1 - Tower B" },
  { name: "Condo W" },
];

const ResidentForm = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-12">Resident Registration Form</h1>
      <div className="min-w-full min-h-full flex justify-center items-center">
        <form className="flex flex-col h-full  gap-y-5">
          {/* property selection */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="property">
              Condominium
            </label>
            <select
              name="All Properties"
              id="property"
              className="border-solid border-black border p-2"
            >
              {allCondo.map((c) => (
                <option value={c.name}>{c.name}</option>
              ))}
            </select>
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
          </div>

          {/* unit number */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="unitNo">
              Unit No.
            </label>
            <input
              type="text"
              className="border-solid border-black border p-2"
              id="unitNo"
            ></input>
          </div>

          {/* ownership */}
          <div className="flex flex-col">
            <p className="font-semibold mb-2">Type of Ownership</p>
            <div>
              <input
                type="radio"
                name="ownership"
                className="border-solid border-black border"
                id="shortTermLease"
              ></input>
              <label className="mx-5" htmlFor="shortTermLease">
                Short Term Lease
              </label>

              <input
                type="radio"
                name="ownership"
                className="border-solid border-black border"
                id="longTermLease"
              ></input>
              <label className="mx-5" htmlFor="longTermLease">
                Long Term Lease
              </label>

              <input
                type="radio"
                name="ownership"
                className="border-solid border-black border"
                id="Own"
              ></input>
              <label className="mx-5" htmlFor="own">
                Own
              </label>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ResidentForm;
