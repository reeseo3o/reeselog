'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (!isDarkMode) {
      localStorage.setItem('isDarkMode', 'true');
      setDarkMode(true);
      document.body.classList.add('dark');
    }
    if (isDarkMode) {
      localStorage.removeItem('isDarkMode');
      setDarkMode(false);
      document.body.classList.remove('dark');
    }
  };
  return (
    <div>
      <button onClick={toggleDarkMode}>
        <Image
          className="w-full opacity-40"
          alt="sun"
          src={`/images/icon/${darkMode ? 'sun' : 'moon'}.png`}
          width={20}
          height={0}
        />
      </button>
    </div>
  );
}
