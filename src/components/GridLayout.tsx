import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen grid grid-rows-[25px_auto_1fr_auto] grid-cols-1">
      {children}
    </div>
  );
};

export default GridLayout;
