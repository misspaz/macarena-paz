import Jainaba from "../assets/images/photography-cover-Jainaba-by-Macarena-Paz.jpg";
import NED from "../assets/images/photography-cover-nonexistentdesert-by-Macarena-Paz.jpg";
import Pores from "../assets/images/photography-cover-pores-by-Macarena-Paz.jpg";
import NiaDana from "../assets/images/photography-cover-nia-dana-by-Macarena-Paz.jpg";
import Aspolvit from "../assets/images/photography-cover-aspolvit-by-Macarena-Paz.jpg";
import Nobodinoz1 from "../assets/images/photography-cover-nobodinoz-1-by-Macarena-Paz.jpg";
import Savanna from "../assets/images/photography-cover-savanna-nobodinoz-by-Macarena-Paz.jpg";
import ByLia from "../assets/images/photography-cover-by-lia-jewels-by-Macarena-Paz.jpg";
import JCDecaux from "../assets/images/photography-cover-CR7-JCDecaux-by-Macarena-Paz.jpg";
import Vitae from "../assets/images/graphic-design-cover-vitae-by-Macarena-Paz.jpg";
import NRC from "../assets/images/graphic-design-cover-nrc-by-Macarena-Paz.jpg";
import Nobodinoz2 from "../assets/images/graphic-design-cover-nobodinoz-by-Macarena-Paz.jpg";
import AdContest from "../assets/images/graphic-design-cover-jcdecaux-by-Macarena-Paz.jpg";
import Brandworks from "../assets/images/graphic-design-cover-brandworks-by-Macarena-Paz.jpg";
import KosmikStudio from "../assets/images/graphic-design-cover-kosmik-studio-by-Macarena-Paz.jpg";
import NDN from "../assets/images/graphic-design-cover-nuevo-de-nuevo-by-Macarena-Paz.jpg";
import Smarttown from "../assets/images/graphic-design-smarttown-by-Macarena-Paz.jpg";
import ART from "../assets/images/UX-UI-cover-art-by-Macarena-Paz.jpg";
import SmarttownFSD from "../assets/images/fullstack-development-cover-smarttown-by-Macarena-Paz.jpg";
import LME from "../assets/images/fullstack-development-cover-LME-by-Macarena-Paz.jpg";
import Applergic from "../assets/images/fullstack-development-cover-applergic-by-Macarena-Paz.jpg";
// import Lancome from "../assets/images/photography-cover-lancome-by-Macarena-Paz.jpg";
// import Meta from "../assets/images/photography-cover-meta-by-Macarena-Paz.jpg";
// import Adidas from "../assets/images/photography-cover-adidas-jcdecaux-by-Macarena-Paz.jpg";

const projectsData = [
  {
    id: "1",
    title: "Smarttown",
    category: "Fullstack Development",
    description: "Descripción del proyecto de Smarttown",
    cover: SmarttownFSD,
    client: "GlobalSmart IoT",
    technologies: "Next.js, Node.js, MySQL, VSCode, Figma",
    year: "2024",
    brief: "An application for managing IoT devices"
  },
  {
    id: "2",
    title: "La Movida esta",
    category: "Fullstack Development",
    description: "Descripción del proyecto de La Movida Esta",
    cover: LME,
  },

  {
    id: "3",
    title: "Kosmik Studio",
    category: "Fullstack Development",
    description: "Descripción del proyecto",
    cover: "",
  },

  {
    id: "4",
    title: "Applergic",
    category: "Fullstack Development",
    description: "Descripción del proyecto",
    cover: Applergic,
  },

  {
    id: "5",
    title: "Golden Duck game",
    category: "Fullstack Development",
    description: "Descripción del proyecto",
    cover: "",
  },

  {
    id: "6",
    title: "PokeAPI",
    category: "Fullstack Development",
    description: "Descripción del proyecto",
    cover: "",
  },

  {
    id: "7",
    title: "Jainaba",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: Jainaba,
  },

  {
    id: "8",
    title: "Non-existent desert",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: NED,
  },

  {
    id: "9",
    title: "Pores",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: Pores,
  },

  {
    id: "10",
    title: "Nia Dana",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: NiaDana,
  },

  {
    id: "11",
    title: "Aspolvit",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: Aspolvit,
  },

  {
    id: "12",
    title: "Spring",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: Nobodinoz1,
  },

  {
    id: "13",
    title: "Savanna",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: Savanna,
  },

  {
    id: "14",
    title: "By Lia",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: ByLia,
  },

  {
    id: "15",
    title: "JCDecaux",
    category: "Photography",
    description: "Descripción del proyecto",
    cover: JCDecaux,
  },

  {
    id: "16",
    title: "Vitae",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: Vitae,
  },

  {
    id: "17",
    title: "Nike Run Club",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: NRC,
  },

  {
    id: "18",
    title: "Nobodinoz",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: Nobodinoz2,
  },

  {
    id: "19",
    title: "Premios Publicidad Exterior",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: AdContest,
  },

  {
    id: "20",
    title: "Brandworks",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: Brandworks,
  },

  {
    id: "21",
    title: "Kosmik Studio",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: KosmikStudio,
  },

  {
    id: "22",
    title: "Nuevo de nuevo",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: NDN,
  },

  {
    id: "23",
    title: "ART",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: ART,
  },

  {
    id: "24",
    title: "Leveling",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: "",
  },

  {
    id: "25",
    title: "Smarttown",
    category: "Graphic Design & UX/UI",
    description: "Descripción del proyecto",
    cover: Smarttown,
  },
];

export default projectsData;
