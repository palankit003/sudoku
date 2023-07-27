import Character from "../Home/Character/Character";
import Style from "./About.module.css";

import Alex from "../../assets/lead guitarist.png";
import Lisa from "../../assets/Lisa.png";
import Max from "../../assets/Bass Guitarist.png";
import Sarah from "../../assets/Sarah-Keyboardist.jpg";
import Jake from "../../assets/drummer.jpg";
import Michelle from "../../assets/lead vocalist.jpg";
import Evan from "../../assets/multi-instrumentalist 2.jpg";
const About = () => {
  return (
    <div className={Style.container}>
      <p className={Style.title}>About</p>
      <div className={Style.characterContainer}>
        <Character
          imageUrl={Alex}
          altText="Alex Thompson"
          name="Alex Thompson"
          description="Alex is a virtuoso guitarist known for his lightning-fast solos and mesmerizing stage presence. He's been playing the guitar since the age of 9 and has an uncanny ability to make the instrument sing. With his signature top hat and fiery red hair, Thunder's energy electrifies the crowd, leaving them wanting more."
          role="Lead Guitarist"
        />
        <Character
          imageUrl={Lisa}
          altText="Lisa Martinez"
          name="Lisa Martinez"
          description="Lisa's rhythmic mastery is the backbone of 7ROCK7's sound. She's a versatile musician who effortlessly switches between powerful chords and subtle arpeggios. With a strong passion for songwriting, Rhythm Queen brings an authentic and emotional touch to the band's music."
          role="Rhythm Guitarist"
        />
        <Character
          imageUrl={Michelle}
          altText="Michelle Addams"
          name="Michelle Addams"
          description="Michelle's soulful voice captivates audiences, taking them on an emotional journey with every song. Her powerful vocals and heartfelt lyrics leave a lasting impression, and her performances are a true reflection of her passion for music and storytelling."
          role="Lead Vocalist"
        />
        <Character
          imageUrl={Evan}
          altText="Evan Anderson"
          name="Evan Anderson"
          description="Evan is a musical prodigy, proficient in multiple instruments, including violin, saxophone, and flute. His versatility enriches 7ROCK7's sound, adding layers of complexity to their compositions. The Maestro's unwavering dedication to his craft makes him a driving force in the band's creative process."
          role="Lead Guitarist"
        />
        <Character
          imageUrl={Max}
          altText="Max Johnson"
          name="Max Johnson"
          description="Max is the heartbeat of the band, driving the rhythm with his infectious bass lines. A true groove master, he can make even the most stoic audience members dance to the beat. With his warm smile and laid-back personality, he brings a sense of camaraderie to the group."
          role="Bass Guitarist"
        />
        <Character
          imageUrl={Sarah}
          altText="Sarah Harrison"
          name="Sarah Harrison"
          description="Sarah's magical touch on the keyboards adds a celestial dimension to 7ROCK7's sound. Her ethereal melodies and atmospheric textures transport listeners to otherworldly realms. Offstage, she's known for her love of science fiction and fascination with the cosmos."
          role="Keyboardist"
        />
        <Character
          imageUrl={Jake}
          altText="Jake Davis"
          name="Jake Davis"
          description="Jake is a force of nature behind the drum kit, driving the band with his thunderous beats. With lightning-fast hands and a relentless energy, he's a powerhouse on stage. Outside of music, he's a nature lover and often finds inspiration for his rhythms from the sounds of the great outdoors."
          role="Drummer"
        />
      </div>
    </div>
  );
};
export default About;
