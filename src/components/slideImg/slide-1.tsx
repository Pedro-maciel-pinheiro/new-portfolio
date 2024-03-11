import React from 'react';
import ImageRotator from './ImageRotator';




const SlideImg: React.FC = () => {
  const imageUrls = [
    '/food-1.png',
    '/food-2.png',
    '/food-3.png',
  ];

  

  return (
    <div className='relative'>
      
      <ImageRotator 
      images={imageUrls} interval={2000} /> 
    </div>
  );
};

export default SlideImg;
