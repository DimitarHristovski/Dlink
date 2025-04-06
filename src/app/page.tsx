"use client";
import { useState } from "react";
import { Button } from "../components/buttons/button";
import { Card, CardContent } from "./../components/card/card";
import { Switch } from "../components/switch/switch";
import { Sun, Moon } from "lucide-react";
import { Linkedin, User, Github, Beef } from "lucide-react";
export default function Dlink() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("social");

  const LinkIcon = ({ link }: { link: string }) => {
    if (link.includes("My Portfolio")) return <User className="w-5 h-5" />;
    if (link.includes("Linkedin")) return <Linkedin className="w-5 h-5" />;
    if (link.includes("Github")) return <Github className="w-5 h-5" />;
    if (link.includes("Grillschulle")) return <Beef className="w-5 h-5" />;

    return null;
  };

  const linkGroups: Record<string, { title: string; url: string }[]> = {
    social: [
      {
        title: "Linkedin",
        url: "https://linkedin.com/in/dimitar-hristovski-1711a9163",
      },
      {
        title: "Github",
        url: "https://github.com/DimitarHristovski",
      },
    ],
    openSource: [
      {
        title: "LearnHub",
        url: "https://learnhub.mk/",
      },
    ],
    coOwned: [{ title: "Grillschulle", url: "https://startupx.com" }],
    hobbieProjects: [
      { title: "Photography Blog", url: "https://igraliste-one.vercel.app/" },
      { title: "Guitar Covers", url: "https://youtube.com/guitarz" },
      { title: "Guitar Covers", url: "https://youtube.com/guitarz" },

      { title: "Guitar Covers", url: "https://youtube.com/guitarz" },

      { title: "Guitar Covers", url: "https://youtube.com/guitarz" },

      { title: "Guitar Covers", url: "https://youtube.com/guitarz" },
    ],
    main: [
      {
        title: "My Portfolio",
        url: "https://my-portfolio-git-main-dimitarhristovskis-projects.vercel.app/",
      },
      {
        title: "My Blog",
        url: "https://my-portfolio-git-main-dimitarhristovskis-projects.vercel.app/",
      },
    ],
  };

  const tabNames = {
    social: "Social Media",
    coOwned: "Co-Owned Projects",
    hobbieProjects: "Hobbie-Projects",
    main: "Main Projects",
    openSource: "Open Source",
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
        <img
          src="/Profile.jpeg"
          alt="profile"
          className="rounded-full w-24 h-24 mx-auto border-4 border-purple-500"
        />
        <h1 className="text-2xl font-bold mt-4">@Dimitar</h1>
        <p className="text-sm opacity-75">Building cool stuff on the web 🚀</p>
      </div>

      <div className="mt-6 flex justify-center gap-2 flex-wrap">
        {Object.keys(tabNames).map((key) => (
          <Button
            key={key}
            className={`${
              activeTab === key ? "bg-purple-700" : "bg-purple-500"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {tabNames[key as keyof typeof tabNames]}
          </Button>
        ))}
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
