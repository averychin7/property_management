import { useState } from "react";
import { TBuilding } from "../BuildingComplexes/types";
import { useAllBuilding, useResidentRegForm } from "./query";
import { TResidentRegisterForm } from "./types";

const INITIAL_REGISTRATION: TResidentRegisterForm = {
  buildingId: "",
  accessCode: "",
  unitNo: "",
  ownership: "lease",
};6

const ResidentForm = () => {
  const [formData, setFormData] =
    useState<TResidentRegisterForm>(INITIAL_REGISTRATION);
  const { data, isLoading } = useAllBuilding();

  const residentRegister = useResidentRegForm();

  const submitForm = (e: any) => {
    e.preventDefault();
    residentRegister.mutate(formData, {
      onSuccess: () => {
        setFormData(INITIAL_REGISTRATION);
      },
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-12">Resident Registration Form</h1>
      <div className="w-full flex justify-center items-center">
        <form
          className="flex flex-col h-full w-2/4 gap-y-5"
          onSubmit={submitForm}
        >
          {/* property selection */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="building">
              Condominium
            </label>
            <select
              name="All Building"
              id="builidng"
              className="border-solid border-black border p-2"
              value={formData.buildingId}
              onChange={(e) =>
                setFormData({ ...formData, buildingId: e.target.value })
              }
            >
              <option value="">Select One</option>
              {data.map((c: TBuilding) => (
                <option value={c.id}>{c.name}</option>
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
              value={formData.accessCode}
              onChange={(e) =>
                setFormData({ ...formData, accessCode: e.target.value })
              }
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
              value={formData.unitNo}
              onChange={(e) =>
                setFormData({ ...formData, unitNo: e.target.value })
              }
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
                id="lease"
                value="lease"
                checked={formData.ownership === "lease"}
                onChange={(e) =>
                  setFormData({ ...formData, ownership: e.target.value })
                }
              ></input>
              <label className="mx-5" htmlFor="lease">
                Lease
              </label>

              <input
                type="radio"
                name="ownership"
                className="border-solid border-black border"
                id="own"
                value="own"
                checked={formData.ownership === "own"}
                onChange={(e) =>
                  setFormData({ ...formData, ownership: e.target.value })
                }
              ></input>
              <label className="mx-5" htmlFor="own">
                Own
              </label>
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResidentForm;
