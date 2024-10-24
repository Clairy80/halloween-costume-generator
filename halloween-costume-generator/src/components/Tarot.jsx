import React, { useState } from 'react';


function TarotCard() {
  const [tarotCard, setTarotCard] = useState(null);
  const [loading, setLoading] = useState(false);

  // Zuordnung von Tarotkartennamen zu Icons (FontAwesome)
  const tarotIcons = {
    'The Fool': 'fas fa-hat-wizard',
    'The Magician': 'fas fa-magic',
    'The High Priestess': 'fas fa-book-dead',
    'The Empress': 'fas fa-crown',
    'The Emperor': 'fas fa-chess-king',
    // Weitere Tarotkarten und Icons hinzufügen...
  };

  const fetchTarotCard = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
      const data = await response.json();
      const card = data.cards[0];
      setTarotCard(card);
    } catch (error) {
      console.error('Fehler beim Abrufen der Tarotkarte:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Zufällige Tarotkarte ziehen</h2>
      <button onClick={fetchTarotCard} className="grusel-knopf">
        Tarotkarte ziehen
      </button>
      {loading && <p>Lade Tarotkarte...</p>}
      {tarotCard && (
        <div className="tarot-card">
          <h3>{tarotCard.name}</h3>
          {/* Tarot-Symbol anzeigen */}
          <i className={`${tarotIcons[tarotCard.name]} tarot-icon`} aria-hidden="true"></i>
          <p><strong>Typ:</strong> {tarotCard.type}</p>
          <p><strong>Bedeutung:</strong> {tarotCard.meaning_up}</p>
          <p><strong>Umgekehrte Bedeutung:</strong> {tarotCard.meaning_rev}</p>
        </div>
      )}
    </div>
  );
}

export default TarotCard;
