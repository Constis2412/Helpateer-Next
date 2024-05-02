import SideBar from "@/components/SideBar";
import { Sidebar } from "lucide-react";
import React, { Children, useState } from "react";

const AuftraegeSeite = () => {
  // State hier für: varÜberDieSeiteZumAnzeigen
  // const [varÜberDieSeiteZumAnzeigen, setVarÜberDieSeiteZumAnzeigen] = useState(
  //   <KartenMap />
  // );

  // 1. <SideBar varÜberDieSeiteZumAnzeigen={varÜberDieSeiteZumAnzeigen} setVarÜberDieSeiteZumAnzeigen={setVarÜberDieSeiteZumAnzeigen} />
  // 2. In der SideBar die State updaten (setVarÜberDieSeiteZumAnzeigen(karteBspw))
  // 3. In der SideBar die getter und setter verwenden

  return (
    <div>
      {/* {varÜberDieSeiteZumAnzeigen} */}
      <div className="col-span-2">
        <button className="btn btn-info">Auftrag erstellen</button>
      </div>
    </div>
  );
};

export default AuftraegeSeite;
