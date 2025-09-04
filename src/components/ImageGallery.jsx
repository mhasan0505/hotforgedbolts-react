import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      {/* Image Gallery */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            {title || 'Product Gallery'}
          </h3>
          <div className="flex items-center text-gray-500">
            <ZoomIn className="w-5 h-5 mr-2" />
            <span className="text-sm">Click to enlarge</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-black hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="max-w-4xl max-h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setSelectedImage(images[index]);
                }}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'border-white scale-110'
                    : 'border-gray-400 hover:border-gray-200'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;