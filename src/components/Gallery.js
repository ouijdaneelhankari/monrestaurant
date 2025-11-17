import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Gallery.css';

const images = [
  '/images/plat1.jpg',
  '/images/plat2.jpg',
  '/images/plat3.jpg',
  '/images/restaurant1.jpg',
  '/images/restaurant2.jpg',
];

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleShow = (img) => {
    setCurrentImage(img);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <div id="gallery" className="gallery-section">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="gallery-item"
          style={{ backgroundImage: `url(${img})` }}
          onClick={() => handleShow(img)}
        />
      ))}

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Body className="p-0">
          <img src={currentImage} alt="" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
