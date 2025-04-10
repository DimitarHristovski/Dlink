"use client";
import { useState } from "react";
import { Button } from "../components/buttons/button";
import { Card, CardContent } from "./../components/card/card";
import { Switch } from "../components/switch/switch";
import { Sun, Moon } from "lucide-react";
import { linkGroups, tabNames } from "@/Data/ProjectData";
import {
  Linkedin,
  Dribbble,
  User,
  Github,
  Beef,
  Code,
  Gamepad2,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
export default function Dlink() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("social");
  const [tabIndex, setTabIndex] = useState(0);

  const LinkIcon = ({ link }: { link: string }) => {
    if (link.includes("My Portfolio")) return <User className="w-5 h-5" />;
    if (link.includes("My Blog")) return <User className="w-5 h-5" />;
    if (link.includes("Dribbble")) return <Dribbble className="w-5 h-5" />;

    if (link.includes("Linkedin")) return <Linkedin className="w-5 h-5" />;
    if (link.includes("Github")) return <Github className="w-5 h-5" />;
    if (link.includes("Grillschulle")) return <Beef className="w-5 h-5" />;
    if (link.includes("Furwood")) return <ShoppingBag className="w-5 h-5" />;
    if (link.includes("COZA STORE")) return <ShoppingBag className="w-5 h-5" />;
    if (link.includes("Portofolio(Competition)"))
      return <Code className="w-5 h-5" />;
    if (link.includes("Igraliste")) return <ShoppingBag className="w-5 h-5" />;
    if (link.includes("Restaurant")) return <Code className="w-5 h-5" />;
    if (link.includes("Architecture")) return <Code className="w-5 h-5" />;
    if (link.includes("EduCenter")) return <Code className="w-5 h-5" />;

    if (link.includes("Car Race")) return <Gamepad2 className="w-5 h-5" />;

    return null;
  };

  const tabKeys = Object.keys(tabNames);
  const visibleTabs = tabKeys.slice(tabIndex, tabIndex + 3);

  const nextTabs = () => {
    setTabIndex((prev) => (prev + 3 < tabKeys.length ? prev + 1 : prev));
  };

  const prevTabs = () => {
    setTabIndex((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  };
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
        <Image
          src="/Profile.jpeg"
          alt="profile"
          className="rounded-full w-24 h-24 mx-auto border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4">@Dimitar</h1>
        <p className="text-sm opacity-75">Building cool stuff on the web </p>
        <p className="text-sm opacity-75">
          There are even more projects that i made but these are enough to see
          and more are coming too! 🚀
        </p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <Button onClick={prevTabs}>&lt;</Button>
        <div className="flex gap-2 flex-wrap">
          {visibleTabs.map((key) => (
            <Button
              key={key}
              className={`${activeTab === key ? "bg-blue-700" : "bg-blue-500"}`}
              onClick={() => setActiveTab(key)}
            >
              {tabNames[key as keyof typeof tabNames]}
            </Button>
          ))}
        </div>
        <Button onClick={nextTabs}>&gt;</Button>
      </div>

      <div className="mt-6 w-full max-w-md space-y-4">
        {linkGroups[activeTab].map((link, idx) => (
          <Card key={idx} className="hover:scale-[1.02] transition-transform">
            <CardContent className="p-4 flex items-center gap-3">
              <LinkIcon link={link.title} />
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
