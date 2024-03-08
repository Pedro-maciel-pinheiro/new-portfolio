"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


interface ImageRotatorProps {
  images: string[];
  interval: number; 
}

const ImageRotator: React.FC<ImageRotatorProps> = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    
    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div>
        <Image className='max-w-xl  transition-all '  width={1400} height={1400} src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  )
};

export default ImageRotator;
