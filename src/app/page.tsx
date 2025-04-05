"use client";
import { useState } from "react";
import { Button } from "../components/buttons/button";
import { Card, CardContent } from "./../components/card/card";
import { Switch } from "../components/switch/switch";
import { Sun, Moon } from "lucide-react";
import { Linkedin, Youtube, Coffee, Globe } from "lucide-react";

export default function Dlink() {
  const [darkMode, setDarkMode] = useState(true);

  const links = [
    { title: "My Portfolio", url: "https://example.com" },
    { title: "Linkedin", url: "https://instagram.com" },
    { title: "YouTube Channel", url: "https://youtube.com" },
    { title: "Buy Me Coffee ☕", url: "https://buymeacoffee.com" },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex flex-col items-center p-6 transition-colors duration-500`}
    >
      <div className="flex justify-end w-full max-w-md">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4" />
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          <Moon className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <img
          src="/Profile.jpeg"
          alt="profile"
          className="rounded-full w-24 h-24 mx-auto border-4 border-purple-500"
        />
        <h1 className="text-2xl font-bold mt-4">@Dimitar</h1>
        <p className="text-sm opacity-75">Building cool stuff on the web 🚀</p>
      </div>

      <div className="mt-6 w-full max-w-md space-y-4">
        {links.map((link, idx) => (
          <Card key={idx} className="hover:scale-[1.02] transition-transform">
            <CardContent className="p-4">
              <a
                href={link.url}
                target="_blank"
                className="text-lg font-medium"
              >
                {link.title}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-sm opacity-60">Made with ❤️ by Dlink</div>
    </div>
  );
}
