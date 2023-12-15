import Paper from "../assets/icon-paper.svg";

// eslint-disable-next-line react/prop-types
const PaperButton = ({ size = "lg", initial, handleClick }) => {
  return (
    <button
      onClick={() => handleClick("paper")}
      disabled={!initial}
      className={`rounded-full bg-white shadow-paper-shadow lg:shadow-paper-shadow-lg ${
        initial && "hover:shadow-pressed-shadow"
      } ${initial && "absolute left-4 -top-8 lg:-left-8"}`}
    >
      <div
        className={` aspect-square flex items-center justify-center relative ${
          size === "lg" ? "w-16 lg:w-64" : "w-16 lg:w-32"
        }`}
      >
        <img
          src={Paper}
          className={`aspect-square ${
            size === "lg" ? "w-8 lg:w-32" : "w-8 lg:w-16"
          }`}
        />
      </div>
    </button>
  );
};

export default PaperButton;
