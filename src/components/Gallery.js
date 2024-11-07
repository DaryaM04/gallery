

import React from 'react';

function Gallery({ images, onImageClick }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="photo-card" onClick={() => onImageClick(image)}>
          <img src={image.image} alt={`Image ${image.id}`} className="gallery-image"/>
          <p>id: {image.id}</p>
        </div>
      ))}
    </div>
  );
}



export default Gallery;