"use client";

import SideBar from "@/components/SideBar";
import { Sidebar } from "lucide-react";
import { useSession } from "next-auth/react";
import { title } from "process";
import React, { Children, useState } from "react";

const AuftraegeSeite = () => {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      location,
      dueDate,
      dueTime,
      email: session?.user?.email, // Email des aktuell eingeloggten Benutzers
    };

    try {
      const response = await fetch("/api/auftraege", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Task successfully created!");
        // Clear the form
        setTitle("");
        setContent("");
        setLocation("");
        setDueDate("");
        setDueTime("");
      } else {
        alert("Fehler beim Speichern des Auftrags.");
      }
    } catch (error) {
      console.error("Fehler:", error);
      alert("Ein unerwarteter Fehler ist aufgetreten.");
    }
  };

  return (
    <div>
      {/* {varÜberDieSeiteZumAnzeigen} */}
      <form onSubmit={handleSubmit}>
        <div className="col-span-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Titel</span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Adresse eingeben"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Datum bis</span>
            </div>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Datum eingeben"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Uhrzeit bis</span>
            </div>
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              placeholder="Uhrzeit eingeben"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <button type="submit" className="btn btn-primary mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuftraegeSeite;
