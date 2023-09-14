import { Link } from "react-router-dom";
import SearchOrder from "../featchers/order/SearchOrder";
import Username from "../featchers/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 ">
      <Link to="/" className=" uppercase tracking-widest">
        fast pizza react co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
