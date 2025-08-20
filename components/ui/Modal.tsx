import React from 'react';
import './Modal.css'; // Assuming there's a CSS file for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay"> {/* Overlay for background */}
      <div className="modal-content"> {/* Modal content wrapper */}
        <div className="modal-header"> {/* Header section */}
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button> {/* Close button */}
        </div>
        <div className="modal-body"> {/* Body section */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;