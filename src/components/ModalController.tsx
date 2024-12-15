import React, { useState } from 'react';
import SignUpModal from '../pages/SignUp';  // Import SignUpModal component
import LoginModal from '../pages/LogIn';    // Import LoginModal component

const ModalController = () => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Open SignUp modal and close Login modal
  const openSignUpModal = () => {
    setSignUpModalOpen(true);
    setLoginModalOpen(false);
  };

  // Open Login modal and close SignUp modal
  const openLoginModal = () => {
    setSignUpModalOpen(false);
    setLoginModalOpen(true);
  };

  // Close both modals
  const closeModal = () => {
    setSignUpModalOpen(false);
    setLoginModalOpen(false);
  };

  return (
    <div>
      {/* Buttons to open modals */}
      <button onClick={openSignUpModal} className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        Sign Up
      </button>
      <button onClick={openLoginModal} className="bg-indigo-600 text-white px-4 py-2 rounded-md ml-4">
        Login
      </button>

      {/* Render modals based on their state */}
      {isSignUpModalOpen && <SignUpModal closeModal={closeModal} openLoginModal={openLoginModal} />}
      {isLoginModalOpen && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default ModalController;
