import { useSelector } from "../utils/context";
import Triangulo from "../assets/bg-triangle.svg";
import PaperButton from "./PaperButton";
import RockButton from "./RockButton";
import ScissorsButton from "./ScissorsButton";

const SelectScreen = () => {
  const { setSelection } = useSelector();

  const handleClick = (option) => {
    setSelection(option);
  };

  return (
    <div className="relative flex justify-center mt-20 mb-28">
      <img src={Triangulo} className="w-2/3 lg:w-[125%] lg:h-[125%]" />
      <ScissorsButton size="normal" initial handleClick={handleClick} />
      <PaperButton size="normal" initial handleClick={handleClick} />
      <RockButton size="normal" initial handleClick={handleClick} />
    </div>
  );
};

export default SelectScreen;
