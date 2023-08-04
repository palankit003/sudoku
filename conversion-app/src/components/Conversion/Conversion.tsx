import { useState } from "react";
import Style from "./Conversion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
interface OptionsProps {
  value: number;
  calculate: (e: number) => void;
}
const Conversion = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        <p>Length</p>
        <Options value={firstValue} calculate={(e) => setSecondValue(e)} />
        <Options value={secondValue} calculate={(e) => setFirstValue(e)} />
      </div>
    </div>
  );
};

const Options: React.FC<OptionsProps> = ({ value, calculate }) => {
  const units = ["km", "cm", "mm", "m"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("m");
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={Style.firstContainer}>
      <div className={`${Style.selectContainer}`} onClick={toggleOptions}>
        <div className={Style.label}>
          {selectedOption}
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        <input
          value={value}
          className={Style.input}
          onChange={(e) => calculate(Number(e.target.value))}
        />
      </div>
      {isOpen && (
        <ul className={Style.options}>
          {units.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Conversion;
