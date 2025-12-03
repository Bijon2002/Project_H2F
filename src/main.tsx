import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// AOS - Animate On Scroll Library
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS with custom settings
AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true,
  offset: 50,
  delay: 0,
});

createRoot(document.getElementById("root")!).render(<App />);
