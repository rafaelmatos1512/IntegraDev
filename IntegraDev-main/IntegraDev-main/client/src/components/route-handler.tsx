import { useEffect } from "react";
import { useLocation } from "wouter";

const RouteHandler = () => {
  const [pathname] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Delay to allow the page to render
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, window.location.hash]); // Rerun on pathname or hash change

  return null;
};

export default RouteHandler;
