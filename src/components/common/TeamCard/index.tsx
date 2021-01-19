import PokeIcon from "../PokeIcon";
import "./index.scss";

const TeamCard = () => (
  <div className="team-card-container">
    <div className="pokemon-icons">
      <PokeIcon />
      <PokeIcon />
      <PokeIcon />
      <PokeIcon />
      <PokeIcon />
      <PokeIcon />
    </div>
    <div className="information">
      <span className="team-title">#Team Pokemon</span>
      <div className="user-and-date-container">
        <span className="user">Creado por Bilo_code</span>
        <span className="date">16/10/2018</span>
      </div>
    </div>
  </div>
);

export default TeamCard;