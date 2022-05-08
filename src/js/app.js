import Alpine from "alpinejs";

import animalImages from "../img/animals/*.png";
import memberImages from "../img/members/*.png";
import partnerImages from "../img/partners/*.png";

const handleMousePos = (event) => {
  const cursor = document.querySelector("#mouse-cursor");
  const hoveredElements = document.querySelectorAll(".cursor-hover");
  const { pageX: posX, pageY: posY } = event;

  hoveredElements.forEach((element) =>
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(10)";
      cursor.style.background = "#543faf";
    })
  );

  hoveredElements.forEach((element) =>
    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(0)";
      cursor.style.background = "";
    })
  );

  return (
    (cursor.style.left = `${posX - 10}px`),
    (cursor.style.top = `${posY - 10}px`)
  );
};

document.addEventListener("mousemove", handleMousePos);

window.Alpine = Alpine;

function missions() {
  return {
    selected: null,
    missionList: [
      {
        id: "part-1",
        shortName: "Community building & Charity",
        title: "Community building & Charity",
        text: "A community pool and non profit pool will be created. Our main mission is to create a community led game and to support non profit in the metaverse. ",
      },
      {
        id: "part-2",
        shortName: "Exploration and mission",
        title: "Exploration and mission",
        text: "Alpha version of the game. Launch of the first Keepers missions & quests as proof of concept.",
      },
      {
        id: "part-3",
        shortName: "Anima City",
        title: "Anima City",
        text: "You are ready to lift off with us on ANIMA. All keepers will have access to the entire game. Discover Anima, Keeper’s HQ (The heart of Human life on the planet) and many more places. Main features added:  Share your talent in the Defender League -  Invest in a house, building or businesses - Launch of the Keepers NFT collection (Unique Trainers / Avatars)",
      },
      {
        id: "part-4",
        shortName: "Non profits extension",
        title: "Non profits extension",
        text: "Because we want to introduce associations into our pixelverse. Non profit will have dedicated spaces and places to highlight their activities and their cause in the game. Unique features such as an in-game donation system and exclusive collections will be dedicated to the animal cause",
      },
      {
        id: "part-5",
        shortName: "Culture and colonies",
        title: "Culture and colonies",
        text: "In order to promote culture and because alone we go faster, but together we go further, we created an interoperable game which allow specific NFT projects to integrate their collection. Selected communities will also have dedicated areas / places and many exclusive features for their community. Your place your rules. ",
      },
      {
        id: "part-6",
        shortName: "Game Expensions & Governance",
        title: "Game Expensions & Governance",
        text: "With several people, creativity is limitless. Led by the Keeper’s community and using an advanced DAO system, Keepers will have governance rights and game’s evolution will be impacted by communities decisions. The game will constantly evolve with the addition of new cities and features for an ever more immersive adventure. Also the choice of charitable actions to be conducted and supported will be made by Keepers.",
      },
    ],
    init() {
      setTimeout(() => (this.selected = 1), 500);
    },
  };
}

function faq() {
  return {
    selected: null,
    questionList: [
      {
        id: "faq-part-1",
        shortName: "What is Anima?",
        title: "What is Anima?",
        text: "Anima is a decentralized, community-driven Pixelverse MMO that brings the non-profit into the metaverse and creates a utility for engaged and cultural NFT collections. Become a Keeper, explore Anima, create your colony with your community,  make decisions, and enjoy all features with your CryptoAnimal.",
      },
      {
        id: "faq-part-2",
        shortName: "What are CryptoAnimals?",
        title: "What are CryptoAnimals?",
        text: "Your CryptoAnimals is your access key to Anima’s Pixelverse. The collection is inspired by LarvaLabs' famous CryptoPunks and the pixel meme culture.  CryptoAnimals are handmade PFP collectibles (profile pictures) created to mimic the plight of certain endangered animal species. 40 hand-drawn animal species, all with exclusive items for a total of 10,000 randomly and fairly generated NFTs. Your CryptoAnimal is a collectible but also: Your access key to the Anima Pixelverse Your avatar - Your Identity (PFP) Your in-game companion and partner - Your intellectual property Your way to act for the good",
      },
      {
        id: "faq-part-3",
        shortName: "How and when can I get my CryptoAnimals?",
        title: "How and when can I get my CryptoAnimals?",
        text: "The CryptoAnimals collection will be launched on the ETH network the 05/28/22. The mint price will be 0.08 for Keepers and 0.1 for the public (more details TBA in the litepaper). For your safety: No mint links will be published before the official date. Be careful with scammers and feel free to join our discord community to check all information. Please note that the CORE team will never DM you.",
      },
      {
        id: "faq-part-4",
        shortName: "What is Humanlab Studio?",
        title: "What is Humanlab Studio?",
        text: "HumanLab Studio is a lab specialized in the creation of web3 projects for charitable purposes. Based on the UN's 17 commitments, HumanLab Studio intends to create a bridge between the physical world and the metaverse while introducing non-profit in the metaverse. We are doxxed. Learn more about us here.",
      },
      {
        id: "faq-part-5",
        shortName: "Introducing and supporting Non-Profits in the metaverse",
        title: "Introducing and supporting Non-Profits in the metaverse",
        text: "We create an ecosystem dedicated to non-profits and varying actions for good. From every sale made, 25% of the funds will be placed in an escrow portfolio and this money will be dedicated to charitable actions in partnership with organizations specialized and recognized in their fields. 70% of the royalties from the second market will also be paid directly into the charity pool. The blockchain and NFT markets are still severely lacking transparency. The vast majority of projects are often set up in a hurry and do not offer sufficient clarity to their users and the risks of rug pulls are increasing. We also wish to offer complete transparency on our charitable actions and donations. We believe that blockchain can increase traceability and facilitate the exchange between the various intermediaries of the donation process.",
      },
    ],
    init() {
      setTimeout(() => (this.selected = 1), 500);
    },
  };
}

function mobileMenu() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    },
    offset() {
      setTimeout(() => {
        window.scrollTo({
          top: window.scrollY - 50,
          behavior: "smooth",
        });
      }, 10);

      this.open = false;
    },
  };
}

function showcaseSlider() {
  return {
    hasVisibleImage: true,
    animals: [
      { name: "bear", image: animalImages.bear },
      { name: "cat", image: animalImages.cat },
      { name: "lama", image: animalImages.lama },
      { name: "panda", image: animalImages.panda },
      { name: "penguin", image: animalImages.penguin },
      { name: "shark", image: animalImages.shark },
      { name: "turtle", image: animalImages.turtle },
      { name: "fpink", image: animalImages.fpink },
    ],
    current: 0,
    next(cb) {
      this.hasVisibleImage = false;
      this.current < this.animals.length - 1
        ? this.current++
        : (this.current = 0);
      cb(() => {
        this.hasVisibleImage = true;
      });
    },
    previous(cb) {
      this.hasVisibleImage = false;
      this.current > 0
        ? this.current--
        : (this.current = this.animals.length - 1);
      cb(() => {
        this.hasVisibleImage = true;
      });
    },
  };
}

function teamGrid() {
  return {
    members: [
      { name: "Hugo Custodio", job: "CEO", image: memberImages.hugo },
      { name: "Edouard Lepelletier", job: "Business Dev", image: memberImages.edouard },
      { name: "Timoté Garcia", job: "CMO", image: memberImages.timote },
      { name: "Antoine Andrieux", job: "Blockchain Developer", image: memberImages.antoine },
      { name: "Bianca Dionaldo", job: "Community Manager", image: memberImages.bianca },
      { name: "Hayden Frase", job: "Artist illustrator", image: memberImages.hayden },
      { name: "Hunter Logan", job: "Pixel artist", image: memberImages.hunter },
      { name: "Diana Fernandez", job: "Pixel artist", image: memberImages.diana },
      { name: "Whiskid", job: "Motion designer", image: memberImages.whiskid },
    ],
  };
}

function partnersGrid() {
  return {
    partners: [
      { name: "Partner 1", role: "Role 1", image: partnerImages.hugo },
      { name: "Partner 1", role: "Role 1", image: partnerImages.hugo },
      { name: "Partner 1", role: "Role 1", image: partnerImages.hugo },
      { name: "Partner 1", role: "Role 1", image: partnerImages.hugo },
    ],
  };
}

window.missions = missions;
window.faq = faq;
window.mobileMenu = mobileMenu;
window.showcaseSlider = showcaseSlider;
window.teamGrid = teamGrid;
window.partnersGrid = partnersGrid;

Alpine.start();

const navbar = document.querySelector('#navbar');

function handleScroll() {
  if (!navbar) return;

  window.scrollY > 0
    ? navbar.classList.add('sticky-menu')
    : navbar.classList.remove('sticky-menu');
}

window.addEventListener('scroll', handleScroll);