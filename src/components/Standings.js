import React from 'react';
import Header from "./Header.js"
import Footer from "./Footer.js"
const Standings = () => {
  const standingsData = [
    { pos: 1, team: 'AFGHANISTAN', played: 0, won: 0, lost: 0, nr: 0, tied: 0, netRr: '-', points: 0 },
    { pos: 2, team: 'AUSTRALIA', played: 0, won: 0, lost: 0, nr: 0, tied: 0, netRr: '-', points: 0 },
    { pos: 3, team: 'BANGLADESH', played: 0, won: 0, lost: 0, nr: 0, tied: 0, netRr: '-', points: 0 },
    { pos: 4, team: 'INDIA', played: 0, won: 0, lost: 0, nr: 0, tied: 0, netRr: '-', points: 0 },
  ];

  return (
    <>
    <div className="bg-white py-20">
      <h2 className="text-4xl font-bold text-blue-950 py-2 px-4">STANDINGS</h2>
      <div className="flex flex-col text-blue-950">
        <div className="bg-blue-950 text-white py-2 px-4 flex font-extrabold">
          <div className="w-1/12">POS</div>
          <div className="w-2/12">TEAM</div>
          <div className="w-1/12">PLAYED</div>
          <div className="w-1/12">WON</div>
          <div className="w-1/12">LOST</div>
          <div className="w-1/12">N/R</div>
          <div className="w-1/12">TIED</div>
          <div className="w-1/12">NET RR</div>
          <div className="w-1/12">POINTS</div>
        </div>
        {standingsData.map((team, index) => (
          <div key={index} className={`flex py-2 px-4 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
            <div className="w-1/12">{team.pos}</div>
            <div className="w-2/12 flex items-center">
              {/*flag image */} <span className="inline-block h-4 w-6 mr-2"></span>
              {team.team}
            </div>
            <div className="w-1/12">{team.played}</div>
            <div className="w-1/12">{team.won}</div>
            <div className="w-1/12">{team.lost}</div>
            <div className="w-1/12">{team.nr}</div>
            <div className="w-1/12">{team.tied}</div>
            <div className="w-1/12">{team.netRr}</div>
            <div className="w-1/12">{team.points}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Standings;