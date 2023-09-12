import { Link } from "react-router-dom";
import SearchOrder from "../featchers/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/"> fast pizza react co.</Link>
      <SearchOrder />
      <p>pouyan</p>
    </header>
  );
}

export default Header;
