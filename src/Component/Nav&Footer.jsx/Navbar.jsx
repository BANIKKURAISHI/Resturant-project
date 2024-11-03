import { NavLink } from "react-router-dom";

const Nav = (
  <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "btn btn-sm text-white  btn-outline  mx-2 my-2 lg:my-0"
          : "btn btn-sm text-white btn-outline  mx-2 my-2 lg:my-0"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/my-order"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "btn btn-sm text-white btn-outline mx-2 my-2 lg:my-0"
          : "btn btn-sm text-white btn-outline  mx-2 my-2 lg:my-0"
      }
    >
     My Order
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "btn btn-sm  text-white btn-outline  mx-2 my-2 lg:my-0"
          : "btn btn-sm text-white btn-outline  mx-2 my-2 lg:my-0"
      }
    >
      Login
    </NavLink>
  </>
);
const Navbar = () => {
  return (
    <div>
      <div className="navbar fixed opacity-80 max-w-screen-xl text-white z-10 bg-amber-400  ">
        <div className="flex-1">
          <a className="text-white text-3xl">RESTAURANT</a>
          <div></div>
        </div>
        {Nav}

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search...."
              className="input input-bordered text-black h-8 w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-yellow-300 rounded-box z-[1] mt-3 w-40 p-2 shadow"
            >
              <li>
                <button className="justify-between">Profile</button>
              </li>
              <li>
                <button>Settings</button>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
