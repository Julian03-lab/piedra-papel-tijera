import Tijera from "../assets/icon-scissors.svg";

// eslint-disable-next-line react/prop-types
const ScissorsButton = ({ size = "lg", initial, handleClick }) => {
  return (
    <button
      onClick={() => handleClick("scissors")}
      disabled={!initial}
      className={`rounded-full bg-white shadow-scissors-shadow lg:shadow-scissors-shadow-lg ${
        initial && "hover:shadow-pressed-shadow"
      } ${initial && "absolute -top-8 right-4 lg:-right-8"}`}
    >
      <div
        className={` aspect-square flex items-center justify-center relative ${
          size === "lg" ? "w-16 lg:w-64" : "w-16 lg:w-32"
        }`}
      >
        <img
          src={Tijera}
          className={`aspect-square ${
            size === "lg" ? "w-8 lg:w-32" : "w-8 lg:w-16"
          }`}
        />
      </div>
    </button>
  );
};

export default ScissorsButton;
