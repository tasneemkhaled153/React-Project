import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Cabin",
      image: "🏠",
      color: "bg-pink-400"
    },
    {
      id: 2,
      title: "Cake",
      image: "🍰",
      color: "bg-teal-400"
    },
    {
      id: 3,
      title: "Circus",
      image: "🎪",
      color: "bg-teal-400"
    },
    {
      id: 4,
      title: "Game",
      image: "🎮",
      color: "bg-purple-400"
    },
    {
      id: 5,
      title: "Safe",
      image: "🔒",
      color: "bg-yellow-400"
    },
    {
      id: 6,
      title: "Submarine",
      image: "🚢",
      color: "bg-blue-400"
    }
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Title */}
        <h1 className="text-4xl font-bold uppercase text-center text-gray-700 mb-6">Portfolio Component</h1>
        
        {/* Separator */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-0.5 bg-gray-700"></div>
          <div className="mx-4 text-gray-700">★</div>
          <div className="w-16 h-0.5 bg-gray-700"></div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`${item.color} rounded-lg p-8 cursor-pointer group relative overflow-hidden`}
              onClick={() => openModal(item)}
            >
              <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center text-4xl mb-4">
                {item.image}
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-6xl">+</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg p-8 max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Portfolio Component</h2>
              <div className={`${selectedImage.color} rounded-lg p-8 mb-4`}>
                <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center text-6xl">
                  {selectedImage.image}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">{selectedImage.title}</h3>
              <button
                onClick={closeModal}
                className="mt-4 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 