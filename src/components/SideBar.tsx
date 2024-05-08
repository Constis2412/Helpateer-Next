import Link from "next/link";
import React from "react";
import { ListChecks } from "lucide-react";
import { MapPin } from "lucide-react";
import { List } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Plus } from "lucide-react";
import { LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <div>
      <div className="col-span-1 bg-primary p-4 h-full">
        <Link href="map" className="btn">
          <MapPin />
          Karte
        </Link>
        <p className="break-normal"></p>
        <Link href="auftraege" className="btn">
          <Plus />
          Auftrag erstellen
        </Link>
        <p className="break-normal"></p>
        <Link href="Jobs" className="btn">
          <List />
          verfügbare Jobs
        </Link>
        <p className="break-normal"></p>
        <Link href="doneJobs" className="btn">
          <ListChecks />
          abgeschlossene Jobs
        </Link>
        <p className="break-normal"></p>
        <Link href="HelpCenter" className="btn">
          <CircleHelp />
          Hilfecenter
        </Link>
        <p className="break-normal"></p>
        <Link href="calendar" className="btn">
          <CalendarDays />
          Kalender
        </Link>
        <p className="break-normal"></p>
        <Link href="logOut" className="btn">
          Ausloggen
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
