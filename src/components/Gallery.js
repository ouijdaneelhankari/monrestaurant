import React, { useRef, useState, useEffect } from 'react';
import './Gallery.css';

const images = [
  '/images/plat1.jpg',
  '/images/plat2.jpg',
  '/images/plat3.jpg',
  '/images/plat4.jpg',
  '/images/restaurant2.jpg',
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const refCurrent = scrollRef.current;
    refCurrent.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      refCurrent.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div id="gallery" className="gallery-wrapper">
      {canScrollLeft && (
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
      )}
      <div className="gallery-container" ref={scrollRef}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      {canScrollRight && (
        <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
      )}
    </div>
  );
};

export default Gallery;
