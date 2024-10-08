"use client";

import Link from 'next/link';
import './header.css';
import { useRef, useState, useContext } from 'react';
import LoginModal from './LoginModal';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
  const savedOptionRef = useRef(null);
  const aboutOptionRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);

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
        <div className="space-x-4 hidden md:block">
          <button className="bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700">
            Saved Recipes
          </button>
          <button className="bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700">
            About
          </button>
          {user ? (
            <>
              <button
                className="bg-purple-699 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
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
            className="w-full bg-purple-400 text-md py-3 px-6 text-white"
          >
            Saved Recipes
          </div>
          <div
            id="about-option"
            ref={aboutOptionRef}
            className="w-full bg-purple-400 text-md py-3 px-6 text-white"
          >
            About
          </div>
          {user ? (
            <div className="w-full bg-purple-400 text-md py-3 px-6 text-white">
              <button
                className="w-full bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="w-full bg-purple-400 text-md py-3 px-6 text-white">
              <button
                className="w-full bg-purple-700 px-5 py-2.5 border-2 border-color-white text-white rounded-xl hover:bg-white hover:text-purple-700"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Login/Register
              </button>
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
