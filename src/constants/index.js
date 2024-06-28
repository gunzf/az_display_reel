import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    azAdVideo1,
    azAdVideo2,
    azAdVideo3,
    azAdVideo4,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Home", "Sobre nós", "Trabalhe conosco", "Contato"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Ofertas Imperdíveis Chevrolet",
        "Motion/Edição/Locução",
        "Cliente: GM",
      ],
      video: azAdVideo1,
      videoDuration: 15,
    },
    {
      id: 2,
      textLists: [
        "Promoção 'Vamo Brasil'",
        "Motion/Edição/Locução",
        "Cliente: Piracanjuba",
      ],
      video: azAdVideo2,
      videoDuration: 30,
    },
    {
      id: 3,
      textLists: [
        "Experiência de Natal",
        "Motion/Edição",
        "Cliente: Nubank",
      ],
      video: azAdVideo3,
      videoDuration: 10,
    },
    {
      id: 4,
      textLists: [
        "Expert XP 2023",
        "Motion/Edição",
        "Cliente: XP",
      ],
      video: azAdVideo4,
      videoDuration: 15,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];