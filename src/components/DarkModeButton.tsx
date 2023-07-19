'use client';
import { useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';


export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    if (isDarkMode) {
      localStorage.removeItem('isDarkMode');
    } else {
      localStorage.setItem('isDarkMode', 'true');
    }
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };
  
  

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode  ? <BiMoon/> : <BiSun/>}
      </button>
    </div>
  );
}
