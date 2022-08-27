import Page from "src/components/pages";

const menu = [
  {
    id: "home",
    path: "/",
    name: "Home",
    component: Page.HomePage
  },
  {
    id: "about",
    path: "/about",
    name: "About",
    component: Page.AboutPage
  },
  {
    id: "image-quiz",
    path: "/image-quiz",
    name: "Image Quiz",
    component: Page.ImageQuizPage
  },
  {
    id: "voice-quiz",
    path: "/voice-quiz",
    name: "Voice Quiz",
    component: Page.VoiceQuizPage
  }
];

export default menu;
