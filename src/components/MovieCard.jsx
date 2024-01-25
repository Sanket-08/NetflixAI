import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const cardStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    borderRadius: '15px', // Adjust the radius to match your design
    overflow: 'hidden', // Ensure content doesn't overflow
  };

  return (
    <div
      className="inline-block mx-2 my-4" // Adjust margin as needed
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div
        className="w-36 md:w-48 rounded-lg movie-card"
      >
        <img
          alt="Movie Card"
          className="w-full h-full object-cover rounded-lg poster-image"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    </div>
  );
};

export default MovieCard;
