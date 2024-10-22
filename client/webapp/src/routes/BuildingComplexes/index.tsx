import ComplexForm from "./ComplexForm";

const Building = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <h1 className="text-center my-8">Building / Complex Creation</h1>
      <div className="flex flex-col items-center w-2/4">
        <ComplexForm />
      </div>
    </div>
  );
};

export default Building;
