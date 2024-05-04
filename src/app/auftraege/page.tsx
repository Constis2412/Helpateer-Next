import SideBar from "@/components/SideBar";
import React from "react";

const AuftraegeSeite = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-screen flex flex-row justify-start">
        <SideBar />
        {/* {varÜberDieSeiteZumAnzeigen} */}
        <div className="col-span-2">
        {children}
          <button className="btn btn-info">Auftrag erstellen</button>
        </div>
      </div>
    </div>
  );
};

export default AuftraegeSeite;
