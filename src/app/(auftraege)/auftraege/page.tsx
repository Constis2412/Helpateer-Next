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
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Titel</span>
          </div>
          <input
            type="text"
            placeholder="Titel eingeben"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Beschreibung</span>
          </div>
          <input
            type="text"
            placeholder="Beschreibung eingeben"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Adresse</span>
          </div>
          <input
            type="text"
            placeholder="Adresse eingeben"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Datum</span>
          </div>
          <input
            type="text"
            placeholder="Datum eingeben"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Uhrzeit</span>
          </div>
          <input
            type="text"
            placeholder="Uhrzeit eingeben"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <button className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuftraegeSeite;
