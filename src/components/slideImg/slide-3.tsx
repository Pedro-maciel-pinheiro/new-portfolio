import React from 'react';
import ImageRotator from './ImageRotator';




const SlideThird: React.FC = () => {
  const imageUrls = [
    '/car-1.png',
    '/car-2.png',
    '/car-3.png',
  ];

  

  return (
    <div className='relative'>
      
      <ImageRotator 
      images={imageUrls} interval={2500} /> 
    </div>
  );
};

export default SlideThird;
