import { Link } from "react-router-dom";

type Props = {
  title: string;
  link: string;
  selected: boolean;
  titleColor: boolean;
  onClick: () => void;
};

export const NavbarItem = (props: Props) => {
  return (
    <li className="mx-4">
      <Link
        to={props.link}
        className={`${
          props.selected ? "poppins-regular" : "poppins-semibold"
        } ${
          props.titleColor ? "text-[#4B2A1D]" : "text-white"
        } md:text-[13px] lg:text-[15px]`}
        onClick={props.onClick}
      >
        {props.title}
      </Link>
    </li>
  );
};
