import Stats from "../Stats/Stats";
import "./BasicInfo.css";
import "./types.css";

const BasicInfo = ({ id, name, types, height, weight, img, stats }) => {
  return (
    <div className="info-container">
      <div className="pokemon-info">
        <span className={`info-id ${types[0]["type"]["name"]}`}>{id}</span>
        <div className="info-image">
          <img src={img} alt={name} />
        </div>
        <div className="info-text">
          <h2>{name}</h2>
          <div className="types">
            {types.map((type) => (
              <span
                key={type.type.name}
                className={`type-pill ${type.type.name}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <p>
            <span>Height:</span> {height / 10} m
          </p>
          <p>
            <span>Weight:</span> {weight / 10} kg
          </p>
        </div>
        <Stats stats={stats} type={types[0]["type"]["name"]} />
      </div>
    </div>
  );
};

export default BasicInfo;
