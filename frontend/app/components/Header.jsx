"use client";

import Link from 'next/link';
import './header.css';
import { useRef, useState, useContext, useEffect } from 'react';
import LoginModal from './LoginModal';
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const savedOptionRef = useRef(null);
  const aboutOptionRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const hamburgerClick = () => {
    setIsMenuOpen((prev) => !prev);
    if (savedOptionRef.current && aboutOptionRef.current) {
      savedOptionRef.current.style.display =
        savedOptionRef.current.style.display === 'block' ? 'none' : 'block';
      aboutOptionRef.current.style.display =
        aboutOptionRef.current.style.display === 'block' ? 'none' : 'block';
    }
  };

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    setUser(null);
  };

  // Function to handle "Saved Recipes" click
  const handleSavedRecipesClick = () => {
    if (user) {
      // If user is logged in, navigate to saved recipes page
      router.push('/saved-recipes');
    } else {
      // If user is not logged in, show login modal or alert
      setIsLoginModalOpen(true);
    }
  };

  const handleAbout = () => {
    router.push('/about');
  };

  return (
    <div>
      <div className="bg-purple-700 py-4 px-6 flex justify-between items-center">
        <Link
          href="/"
          passHref
          className="text-xl md:text-4xl font-bold text-white cursor-pointer"
        >
          MEALMATCH
        </Link>
        <button
          id="hamburger-button"
          className={`inline-block cursor-pointer md:hidden ${
            isMenuOpen ? 'change' : ''
          }`}
          onClick={hamburgerClick}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <button 
        onClick={toggleDarkMode} 
        className="p-2 border rounded"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
        <div className="space-x-4 hidden md:block">
          {/* Updated Saved Recipes button */}
          <button
            onClick={handleSavedRecipesClick}
            className="bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
          >
            Saved Recipes
          </button>
          <button
            className="bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
            onClick={handleAbout}
          >
            About
          </button>
          {user ? (
            <>
              <button
                className="bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login/Register
            </button>
          )}
        </div>
      </div>
      {/* Mobile Menu Options */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div
            id="saved-option"
            ref={savedOptionRef}
            className="w-full bg-purple-400 text-md py-3 px-6 text-white text-left"
            onClick={handleSavedRecipesClick}
          >
            Saved Recipes
          </div>
          <div
            id="about-option"
            ref={aboutOptionRef}
            className="w-full bg-purple-400 text-md py-3 px-6 text-white text-left"
            onClick={handleAbout}
          >
            About
          </div>
          {user ? (
            <div
              className="w-full bg-purple-400 text-md py-3 px-6 text-white text-left"
              onClick={handleLogout}
            >
              Logout
            </div>
          ) : (
            <div
              className="w-full bg-purple-400 text-md py-3 px-6 text-white text-left"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login/Register
            </div>
          )}
        </div>
      )}
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
}
