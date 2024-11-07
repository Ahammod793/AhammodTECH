import { NavLink } from "react-router-dom";
export default function Categories({ sortBYCategory }) {
  return (
    <div className="w-[15%] pt-1">
      <ul className="flex flex-col gap-4 px-2 bg-white rounded-xl">
        <NavLink
          to="/"
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("All")}
        >
          All
        </NavLink>
        <NavLink
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("Laptops")}
        >
          Laptops
        </NavLink>
        <NavLink
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("Phones")}
        >
          Phones
        </NavLink>
        <NavLink
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("Accessories")}
        >
          Accessories
        </NavLink>
        <NavLink
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("Smart Watches")}
        >
          Smart Watches
        </NavLink>
        <NavLink
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("Mac Book")}
        >
          Mac Book
        </NavLink>
        <NavLink
          className="bg-gray text-left rounded-3xl px-6 py-3"
          onClick={() => sortBYCategory("Iphone")}
        >
          Iphone
        </NavLink>
      </ul>
    </div>
  );
}
