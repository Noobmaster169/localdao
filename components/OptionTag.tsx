import { IoMdCheckmark } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

type OptionTagProps = {
  option: string;
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
};

const OptionTag = ({
  option,
  selectedOption,
  setSelectedOption,
}: OptionTagProps) => {
  return (
    <div
      className={`p-2 ${
        selectedOption == option ? "bg-green-500 text-black" : "bg-p2"
      } rounded-lg gap-1 flex items-center justify-center cursor-pointer font-semibold`}
      onClick={() => {
        setSelectedOption(option);
        console.log("test");
      }}
    >
      <p>{option}</p>
      {selectedOption == option ? (
        <IoMdCheckmark size={16} className="font-semibold" />
      ) : (
        ""
      )}
    </div>
  );
};

export default OptionTag;
