'use client';

import Image from "next/image";
import styles from "./page.module.css";

// Imported React Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imported Component Pages
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </BrowserRouter>
        </div>
    </main>
  );
}
