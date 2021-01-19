import "./index.scss";

const icon_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png";

const PokeIcon = () => (
  <div className="poke-icon-container">
    <img className='image' src={icon_url} alt="poke-icon-alt"/>
    <div className="tooltip">
      <span className='pokemon-name'>#Ditto</span>
    </div>
  </div>
);

export default PokeIcon;