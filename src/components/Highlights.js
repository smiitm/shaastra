import React, { useState, useRef } from 'react';

const Highlights = () => {
  const highlightsData = [
    { index: 0, title: 'Highlight 1' },
    { index: 1, title: 'Highlight 2' },
    { index: 2, title: 'Highlight 3' },
    { index: 3, title: 'Highlight 4' },
    { index: 4, title: 'Highlight 5' },
    { index: 5, title: 'Highlight 6' },
    { index: 6, title: 'Highlight 7' },
    { index: 7, title: 'Highlight 8' },
    { index: 8, title: 'Highlight 9' },
    { index: 9, title: 'Highlight 10' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    cardsRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <div className="relative py-20">
      <h2 className="text-4xl font-bold text-blue-950 py-2 px-4">MATCH HIGHLIGHTS</h2>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth py-4 carousel-container">
        {highlightsData.map((highlight, index) => (
          <div key={highlight.index} ref={el => cardsRef.current[index] = el}
          className="inline-block p-4 transition-transform duration-300"
          >
            <div className="relative bg-gray-200 rounded-lg p-4 text-center w-72 h-48">
              <div className='absolute top-3/4 left-8'>{highlight.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {highlightsData.map((highlight, index) => (
          <div key={highlight.index} onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${activeIndex === index ? 'bg-blue-950' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;