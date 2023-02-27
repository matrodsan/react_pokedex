import "./Stats.css";
import Stat from "../Stat/Stat";

const Stats = ({ stats, type }) => {
  return (
    <div className="stats">
      {stats.map((stat) => (
        <Stat key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} type={type} />
      ))}
    </div>
  );
};

export default Stats;
