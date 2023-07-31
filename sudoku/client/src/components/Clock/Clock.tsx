import Style from "./Clock.module.css";
interface ClockProps {
  time: number;
}
const Clock: React.FC<ClockProps> = ({ time }) => {
  const second = time % 60;
  const minute = Math.floor(time / 60) % 60;
  const hour = Math.floor(time / 3600);
  return (
    <div className={Style.container}>
      <div>{hour < 10 ? `${hour === 0 ? "00" : `0${hour}`}` : hour}:</div>
      <div>
        {minute < 10 ? `${minute === 0 ? "00" : `0${minute}`}` : minute}:
      </div>
      <div>
        {second < 10 ? `${second === 0 ? "00" : `0${second}`}` : second}
      </div>
    </div>
  );
};
export default Clock;
