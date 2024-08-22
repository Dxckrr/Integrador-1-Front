import react from "../assets/react.svg";

const ExampleCard = () => {
  return (
    <>
      {" "}
      <article className="flex items-center w-72 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
        <img className="size-24 mr-8" src={react} alt="" />

        <p className="text-xl text-white w-full">PROYECTO INTEGRADOR</p>
      </article>
    </>
  );
};
export default ExampleCard;
