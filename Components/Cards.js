import CardThumbnail from "./CardThumbnail";
const Cards = ({ allPokemons }) => {
  return (
    <div className="container">
      {allPokemons.map((pokemon, index) => (
        <CardThumbnail pokemon={pokemon} key={index} />
      ))}
    </div>
  );
};
export default Cards;
