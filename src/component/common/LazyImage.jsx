import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  placeholderColor = '#e7e5e4'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ backgroundColor: placeholderColor }}
    >
      {/* Handcrafted Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200"></div>
          
          {/* Organic shapes for handcrafted feel */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-stone-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-stone-300/20 rounded-full blur-3xl"></div>
          
          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} transition-all duration-700 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          onLoad={handleLoad}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
