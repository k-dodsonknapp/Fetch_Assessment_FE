import { useState, useEffect } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import LoginForm from "../Forms/LoginForm";
import daphne from "../../assets/dogPhotos/daphne.jpg";

export default function Login() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const storageKey = "vite-ui-theme";

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || savedTheme === "light") {
      setCurrentTheme(savedTheme);
    } else if (savedTheme === "system" || !savedTheme) {
      setCurrentTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="TODO direct to about page? remove 'pointer-events-none'"
            className="flex items-center gap-6 font-normal text-lg pointer-events-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-6" />
            </div>
            Furever Friend
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs mb-32">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={daphne}
          alt="parked car by Ville Kaisla on Unsplash"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300"
        />
      </div>
    </div>
  );
}
