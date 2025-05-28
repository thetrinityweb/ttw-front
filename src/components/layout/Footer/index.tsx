"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="vlt-footer vlt-footer--fixed">
      {/* Copyright */}
      <div className="vlt-footer-copyright">
        <p>&copy; {currentYear}<br />Todos direitos reservados.</p>
      </div>
    </footer>
  );
} 