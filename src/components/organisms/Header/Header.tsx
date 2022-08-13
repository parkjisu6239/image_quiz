import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import menu from "src/constants/menu";

const headerCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: gray;
`;

const Header = () => (
  <header className={headerCss}>
    {menu.map((item) => (
      <Link key={item.id} to={item.path}>
        {item.name}
      </Link>
    ))}
  </header>
);

export default Header;
