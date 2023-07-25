import Style from "./Listen.module.css";
interface Songs {
  name: string;
  url: string;
}
const Albums: Songs[] = [
  {
    name: "Crimson Horizon",
    url: `src/assets/Albums/Crimson Horizon.jpg`,
  },
  {
    name: "Echoes of Infinity",
    url: "src/assets/Albums/Echoes of Infinity.jpg",
  },
  {
    name: "Eclipse of Souls",
    url: "src/assets/Albums/Eclipse of Souls.jpg",
  },
  {
    name: "Electric Storm",
    url: "src/assets/Albums/Electric Storm.jpg",
  },
  {
    name: "Fires of Euphoria",
    url: "src/assets/Albums/Fires of Euphoria.jpg",
  },
  {
    name: "Midnight Revieries",
    url: "src/assets/Albums/Midnight Revieries.jpg",
  },
  {
    name: "Rhythm of the Stars",
    url: "src/assets/Albums/Rhythm of the Stars.jpg",
  },
  {
    name: "Serenade of Shadows",
    url: "src/assets/Albums/Serenade of Shadows.jpg",
  },
  {
    name: "Whispers in the Wind",
    url: "src/assets/Albums/Whispers in the Wind.jpg",
  },
  {
    name: "Wildfire Dreams",
    url: "src/assets/Albums/Wildfire Dreams.jpg",
  },
];
const Listen = () => {
  return (
    <div>
      <div className={Style.listen}>Listen</div>
      <div className={Style.albumContainer}>
        {Albums.map((e) => {
          return <Cover name={e.name} url={e.url} />;
        })}
      </div>
    </div>
  );
};

const Cover: React.FC<Songs> = ({ name, url }) => {
  return (
    <div className={Style.coverContainer}>
      <img src={url} alt={name} className={Style.image} />
      <p className={Style.name}>{name}</p>
    </div>
  );
};

export default Listen;
