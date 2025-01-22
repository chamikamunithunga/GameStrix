import React from 'react';
import styled from 'styled-components';

// Import images
import CyberpunkImage from '../assets/images/cyberpunk.webp';
import ValorantImage from '../assets/images/2f.jpg';
import LOLImage from '../assets/images/lol.webp';
import WWZImage from '../assets/images/wwz.jpg';
import ForzaHorizon from '../assets/images/fh.jpg';
import WorldofWarships from '../assets/images/ww.png';
import Hitman3 from '../assets/images/hm.jpg';
import gtav from '../assets/images/gtav.jpg';
import smite2 from '../assets/images/smite2.jpg';
import NARAKABLADEPOINT from '../assets/images/nb.jpg';
import Fortnite from '../assets/images/fn.jpeg';
import ModernCombatBlackout from '../assets/images/mc.jpg';
import background from '../assets/images/background.png';
import HeroImage from '../assets/images/gm1.jpg';



// Styled-components
const Hero = styled.div`
  font-size: 7rem;
  width: 100%;
  height: 600px;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #F14A00;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom:300px;
  margin-top:50px;
  

  /* For tablets and smaller screens */
  @media (max-width: 768px) {
    font-size: 3rem; /* Adjust font-size for tablets */
    height: 400px; /* Adjust height for tablets */
  }

  /* For mobile screens */
  @media (max-width: 480px) {
    font-size: 2rem; /* Further reduce font-size for mobile */
    height: 300px; /* Adjust height for smaller screens */
  }


  

.play {
  font-size: 2.5rem;
  background: linear-gradient(45deg, rgba(9, 255, 0, 0.84), rgba(255, 123, 0, 0.81));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  padding: 17px;
  margin-top: 900px;
  text-align: center;
}

/* Media Queries for Mobile Responsiveness */

/* For smaller mobile devices */
@media (max-width: 600px) {
  .play {
    font-size: 1.8rem; /* Smaller font size for small devices */
    padding: 12px; /* Adjust padding */
    margin-top: 600px; /* Adjust margin */
  }
}

/* For medium-sized mobile devices (e.g., tablets) */
@media (max-width: 768px) {
  .play {
    font-size: 1.2rem; /* Adjust font size */
    padding: 15px; /* Adjust padding */
    margin-top: 600px; /* Adjust margin */
  }
}

/* For large mobile screens (e.g., large tablets or small desktops) */
@media (max-width: 1024px) {
  .play {
    font-size: 1.4rem; /* Adjust font size */
    padding: 16px; /* Adjust padding */
    margin-top: 600px; /* Adjust margin */
  }
}

  





`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Larger blocks */
  gap: 30px; /* More space between blocks */
  width: 100%;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .two-tone-text {
  background: linear-gradient(45deg, rgb(216, 245, 0), rgb(127, 0, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 88px;
  font-weight: bold;
  padding: 17px;
  text-shadow: 
 
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .two-tone-text {
    font-size: 50px; /* Adjust font-size for tablets */
    padding: 10px; /* Reduce padding */
  }
}

@media (max-width: 480px) {
  .two-tone-text {
    font-size: 30px; /* Further adjust font-size for mobile */
    padding: 8px; /* Further reduce padding */
  }
}

.caption {
  font-size: 1.5rem;
  padding: 10px;
  background: linear-gradient(45deg, rgb(156, 57, 15), rgba(191, 255, 0, 0.81));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-weight: bold;
  padding: 17px;
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .caption {
    font-size: 24px; /* Adjust font-size for tablets */
    padding: 10px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  .caption {
    font-size: 18px; /* Adjust font-size for mobile */
    padding: 8px; /* Further adjust padding */
  }
}

.description {
  font-size: 1.5rem;
  background: linear-gradient(45deg, rgb(0, 0, 0), rgba(141, 21, 21, 0.81));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 22px;
  font-weight: italic;
  padding: 17px;
  text-align: center;
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .description {
    font-size: 18px; /* Adjust font-size for tablets */
    padding: 10px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  .description {
    font-size: 14px; /* Further adjust font-size for mobile */
    padding: 8px; /* Further adjust padding */
  }
}

  .herobg {
  background-size: cover; /* Ensures the image covers the div */
  background-position: center; /* Centers the image */
  width: 100%; /* Full width */
  height: 500px; /* Default height */
  margin: 50px auto;
  
}

/* For screens smaller than 768px (tablets and mobile devices) */
@media (max-width: 768px) {
  .herobg {
    height: 300px; /* Adjust height for smaller screens */
  }
}

/* For screens smaller than 480px (mobile devices) */
@media (max-width: 480px) {
  .herobg {
    height: 200px; /* Further reduce height on very small screens */
  }
}

  


`;

// Styling GameStreamBlock to make images larger
const GameStreamBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    max-width: 400px; /* Bigger images */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Optional: Rounded corners */
    box-shadow: 0px 4px 6px #00ffc8; /* Optional: Shadow */
  }

  h3 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #00f5d4;
  }

  
`;

const HomePage = () => {
  return (
    <Container>
      <div class="two-tone-text">GameStrix</div>
      <div class = "caption">Gamestrix: Where Your Next Great Adventure Begins!</div>

      <div class = "description">Welcome to Gamestrix, where every click opens the door to adventure, thrill, and endless entertainment. Discover and download the most popular, trending, and mind-blowing PC games, all in one place. Whether you’re into heart-pounding action, immersive storytelling, or epic multiplayer battles, Gamestrix has something for every gamer.</div>

      <div
  className="herobg"
  style={{
    backgroundImage: `url(${background})`,
    margin: "20px auto",
  }}
></div>



      <Hero>
      <div class="play">Step into the world of endless adventures, where every click unlocks a new realm of excitement. Get ready to play, explore, and conquer—your next adventure begins now!</div>
      

      </Hero>
      <Grid>
  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/cyberpunk-2077" target="_blank" rel="noopener noreferrer">
      <img src={CyberpunkImage} alt="Cyberpunk" />
    </a>
    <h3>Cyberpunk</h3>
  </GameStreamBlockContainer>
  
  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/valorant" target="_blank" rel="noopener noreferrer">
      <img src={ValorantImage} alt="Valorant" />
    </a>
    <h3>Valorant</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/league-of-legends" target="_blank" rel="noopener noreferrer">
      <img src={LOLImage} alt="League of Legends" />
    </a>
    <h3>League of Legends</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/world-war-z" target="_blank" rel="noopener noreferrer">
      <img src={WWZImage} alt="World War Z" />
    </a>
    <h3>World War Z</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://forza.net/" target="_blank" rel="noopener noreferrer">
      <img src={ForzaHorizon} alt="Forza Horizon 4" />
    </a>
    <h3>Forza Horizon 4</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/world-of-warships" target="_blank" rel="noopener noreferrer">
      <img src={WorldofWarships} alt="World of Warships" />
    </a>
    <h3>World of Warships</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/hitman-3" target="_blank" rel="noopener noreferrer">
      <img src={Hitman3} alt="Hitman 3" />
    </a>
    <h3>Hit Man 3</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/gtav" target="_blank" rel="noopener noreferrer">
      <img src={gtav} alt="GTA V" />
    </a>
    <h3>GTA V</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/smite" target="_blank" rel="noopener noreferrer">
      <img src={smite2} alt="Smite 2" />
    </a>
    <h3>Smite 2</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/naraka-bladepoint" target="_blank" rel="noopener noreferrer">
      <img src={NARAKABLADEPOINT} alt="NARAKA: BLADEPOINT" />
    </a>
    <h3>NARAKA: BLADEPOINT</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/fortnite" target="_blank" rel="noopener noreferrer">
      <img src={Fortnite} alt="Fortnite" />
    </a>
    <h3>Fortnite</h3>
  </GameStreamBlockContainer>

  <GameStreamBlockContainer>
    <a href="https://www.epicgames.com/store/en-US/p/modern-combat-5" target="_blank" rel="noopener noreferrer">
      <img src={ModernCombatBlackout} alt="Modern Combat 5: Blackout" />
    </a>
    <h3>Modern Combat 5: Blackout</h3>
  </GameStreamBlockContainer>
</Grid>


    </Container>
  );
};

export default HomePage;
