import { useEffect, useState } from "react";
import { useScore, useSelector } from "../utils/context";
import { getRandomOption } from "../utils/housePick";
import PaperButton from "./PaperButton";
import RockButton from "./RockButton";
import ScissorsButton from "./ScissorsButton";

// eslint-disable-next-line react/prop-types
const RenderSwitch = ({ selection }) => {
  switch (selection) {
    case "paper":
      return <PaperButton size="lg" />;
    case "rock":
      return <RockButton size="lg" />;
    case "scissors":
      return <ScissorsButton size="lg" />;
    default:
      return null;
  }
};

const determineWinner = (selection, housePick) => {
  if (selection === housePick) return "draw";
  if (selection === "paper" && housePick === "rock") return "win";
  if (selection === "rock" && housePick === "scissors") return "win";
  if (selection === "scissors" && housePick === "paper") return "win";
  return "lose";
};

const SelectedScreen = () => {
  const { selection, setSelection } = useSelector();
  const { incrementScore } = useScore();
  const [housePick, setHousePick] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result === "win") incrementScore();
  }, [result, incrementScore]);

  useEffect(() => {
    const getOption = async () => {
      setLoading(true);
      const option = await getRandomOption();
      setHousePick(option);
      setLoading(false);
      setResult(determineWinner(selection, option));
    };
    if (selection) {
      getOption();
    }
  }, [selection]);

  return (
    <div className="lg:flex justify-center lg:justify-between gap-10 lg:gap-28 items-center grid grid-rows-2 w-full lg:w-auto grid-cols-2 mt-12 mb-12">
      <div className="flex flex-col-reverse lg:flex-col gap-14 items-center">
        <p className="text-xs lg:text-xl text-white tracking-widest font-bold text-center">
          YOU PICKED
        </p>
        <RenderSwitch selection={selection} />
      </div>
      {housePick && (
        <div className="flex flex-col items-center justify-center order-3 lg:order-none col-span-2">
          <p className="text-white font-bold text-4xl tracking-widest mb-5">
            {result === "win" && "YOU WIN"}
            {result === "lose" && "YOU LOSE"}
            {result === "draw" && "ITS A DRAW"}
          </p>
          <button
            className={`hover:bg-slate-300 hover:text-black shadow-xl font-bold py-3 w-full bg-white rounded-lg text-lg tracking-widest ${
              result === "win" && "text-green-500"
            } ${result === "lose" && "text-red-500"} ${
              result === "draw" && "text-black"
            }`}
            onClick={() => setSelection(null)}
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      <div className="flex flex-col-reverse lg:flex-col gap-14 items-center">
        <p className="text-xs lg:text-xl text-white tracking-widest font-bold text-center">
          THE HOUSE PICKED
        </p>
        {loading && !housePick ? (
          <div className="w-16 lg:w-60 rounded-full bg-black/30 aspect-square animate-pulse" />
        ) : (
          <RenderSwitch selection={housePick} />
        )}
      </div>
    </div>
  );
};

export default SelectedScreen;
