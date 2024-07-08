import { ReactNode } from "react";
import cx from "classnames";
import "./TabButton.scss";

const TabButton = ({
  onClick,
  isActive,
  children,
}: {
  onClick: () => void;
  isActive?: boolean;
  children?: ReactNode;
}) => {
  return (
    <button
      className={cx("TabButton", { "TabButton--isActive": isActive })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton;
