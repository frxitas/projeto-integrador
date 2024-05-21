import * as React from "react";

const Header = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex justify-end items-center sticky w-full h-14 bg-white shadow p-4"
    >
      <h1 className="font-bold text-2xl">Controlador de Estoque</h1>
    </div>
  );
});

Header.displayName = "Header";

export { Header };
