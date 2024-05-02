import Link from "next/link";
import React from "react";

// Getter und setter der state abrufen
const SideBar = () => {
  return (
    <div>
      <div className="col-span-1 bg-primary p-4 h-full">
        <Link href="map" className="btn btn-secondary">
          Map
        </Link>
        <Link href="auftraege" className="btn btn-secondary">
          Auftraege
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
