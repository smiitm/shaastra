import React, { useState, useRef, useEffect } from 'react';

const Highlights = () => {
  const highlightsData = [
    { index: 0, title: 'India won!!', date: "2024-06-29" },
    { index: 1, title: 'Highlight title', date: "2024-06-28" },
    { index: 2, title: 'Highlight title', date: "2024-06-27" },
    { index: 3, title: 'Highlight title', date: "2024-06-26" },
    { index: 4, title: 'Highlight title', date: "2024-06-25" },
    { index: 5, title: 'Highlight title', date: "2024-06-24" },
    { index: 6, title: 'Highlight title', date: "2024-06-23" },
    { index: 7, title: 'Highlight title', date: "2024-06-22" },
    { index: 8, title: 'Highlight title', date: "2024-06-21" },
    { index: 9, title: 'Highlight title', date: "2024-06-20" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredHighlights, setFilteredHighlights] = useState(highlightsData);
  const cardsRef = useRef([]);

  // filtering
  useEffect(() => {
    if (selectedDate) {
      const filtered = highlightsData.filter(highlight => highlight.date === selectedDate);
      setFilteredHighlights(filtered);
      setActiveIndex(0);
    } else {
      setFilteredHighlights(highlightsData);
    }
  }, [selectedDate]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    cardsRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="relative py-10">
      <h2 className="text-4xl font-bold text-blue-950 py-2 px-4">MATCH HIGHLIGHTS</h2>

      <div className="px-4 mb-4">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded p-2 focous:border-none"
        />
      </div>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth py-4 carousel-container">
        {filteredHighlights.map((highlight, index) => (
          <div key={highlight.index} ref={el => cardsRef.current[index] = el}
          className="inline-block p-4 transition-transform duration-300"
          >
            <div className="relative bg-gray-200 rounded-lg p-4 w-72 h-48">
              <div className='absolute top-1/2 left-8'>
                <div>{highlight.title}</div>
                <div className='text-xs'>{highlight.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {filteredHighlights.map((highlight, index) => (
          <div key={highlight.index} onClick={() => handleDotClick(index)}  className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${activeIndex === index ? 'bg-blue-950' : 'bg-gray-400'}`}/>
        ))}
      </div>
      
    </div>
  );
};

export default Highlights;