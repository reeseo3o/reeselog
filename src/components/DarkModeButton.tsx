'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';


export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (!isDarkMode) {
      localStorage.setItem('isDarkMode', 'true');
      setDarkMode(true);
      document.body.classList.toggle('dark');
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
        {darkMode  ? <BiMoon/> : <BiSun/>}
      </button>
    </div>
  );
}
