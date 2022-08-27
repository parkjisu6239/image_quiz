import React from "react";
import { Outlet } from "react-router-dom";
import { css } from "@emotion/css";
import Header from "src/components/UI/organisms/Header";
import "./App.css";

const mainCss = (FixedHeight: number) => css`
  overflow: auto;
  height: 100%;
  min-height: calc(100vh - ${FixedHeight}px);
`;

function App() {
  const [fixedHeight, setFixedHeight] = React.useState(0);

  React.useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const headerHeight = header ? header.clientHeight : 0;
    const footerHeight = footer ? footer.clientHeight : 0;

    setFixedHeight(headerHeight + footerHeight + 1);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className={mainCss(fixedHeight)}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
