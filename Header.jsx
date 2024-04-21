import { logo_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header dark:bg-black">
      <div className="logo-container">
        <img className="logo" src={logo_URL} />
      </div>
      <h1 className="heading">Check your weather</h1>
    </div>
  );
};
export default Header;
