import * as React from "react";

const Header = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex justify-center items-center sticky w-full h-14 bg-white shadow"
    >
      Header
    </div>
  );
});

Header.displayName = "Header";

export { Header };
