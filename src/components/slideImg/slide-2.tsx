import React from 'react';
import ImageRotator from './ImageRotator';

const SlideSegund: React.FC = () => {
  const imageUrls = [
    '/home-1.png',
    '/home-2.png',
    '/home-3.png',
  ];

  return (
    <div className='relative'>
      
      <ImageRotator 
      images={imageUrls} interval={2000} /> 
    </div>
  );
};

export default SlideSegund;
