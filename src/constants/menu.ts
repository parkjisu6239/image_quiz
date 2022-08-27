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
    name: "ImageQuiz",
    component: Page.ImageQuizPage
  }
];

export default menu;
