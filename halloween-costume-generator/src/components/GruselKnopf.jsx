import React from 'react';

function GruselKnopf({ text, onClick }) {
  const playGruselSound = () => {
    const audio = new Audio('/gruselsound.mp3'); // Korrekt eingestellter Pfad
    audio.play();

    // Beende den Sound nach 2 Sekunden
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0; // Setzt den Sound zurück
    }, 2000); // 2 Sekunden Abspielzeit
  };

  const handleClick = () => {
    playGruselSound(); // Sound abspielen
    if (onClick) {
      onClick(); // Falls es eine weitere Aktion gibt (optional)
    }
  };

  return (
    <button onClick={handleClick} className="grusel-knopf">
      {text}
    </button>
  );
}

export default GruselKnopf;
