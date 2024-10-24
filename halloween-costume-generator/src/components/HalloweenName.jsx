import React, { useState } from 'react';
import Zurueck from './Zurueck';

function HalloweenName() {
  const [name, setName] = useState(''); // Benutzername
  const [halloweenName, setHalloweenName] = useState(''); // Generierter Halloween-Name

  const spookyLastNames = [
    'Fluch', 'Schatten', 'Dunkelheit', 'Blut', 'Horror',
    'Nacht', 'Grabstein', 'Schwarz', 'Grimm', 'Totenfrost',
    'Schattenschleier', 'Hexenblut', 'Totenbiss', 'Leichenkuss', 'Gräberstille',
    'Sensenmann', 'Seelenjäger', 'Nachtschwinge', 'Höllenfeuer', 'Sargwächter', 'Schattenkönig', 'Blutmondhexe', 'Knochenkriecher', 'Alpträumeule', 'Finsterwächter', 'Schattenschleicher', 'Todesbote', 'Skelettschwinge', 'Düsternisfürst', 'Hexenschädel', 'Seelenfresser', 'Flammender Dämon', 'Blutschwinge', 'Nekromantenkönig', 'Schattenwolf', 'Knochenflüsterer', 'Nebelhexe', 'Geisterseher', 'Dunkelmondjäger', 'Grabesschrecken', 'Totenkopfsammler', 'Nachtgespenst', 'Vampirfürstin', 'Höllenbote', 'Dämonenjäger', 'Seelensammler', 'Blutrabe', 'Finstergeist', 'Zombieklaue', 'Todeskralle'
  ];

  const generateHalloweenName = async () => {
    try {
      // Vorname von der Behind the Name API abrufen
      const response = await fetch(
        `https://www.behindthename.com/api/random.json?usage=eng&number=1&key=cl853137766`
      );
      const data = await response.json();
      const randomFirstName = data.names[0]; // Erhalte den zufälligen Vornamen

      // Zufälligen gruseligen Nachnamen wählen
      const randomLastName = spookyLastNames[Math.floor(Math.random() * spookyLastNames.length)];

      // Halloween-Name setzen: Benutzername + zufälliger Vorname + gruseliger Nachname
      setHalloweenName(`${name} ${randomFirstName} ${randomLastName}`);
    } catch (error) {
      console.error('Fehler beim Abrufen des Namens:', error);
    }
  };

  return (
    <div>
      <h2>Gib deinen Namen ein und erhalte deinen Halloween-Namen</h2>
      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={generateHalloweenName}>Generiere Halloween-Namen</button><Zurueck /> 
      {halloweenName && <p>Dein Halloween-Name ist: {halloweenName}</p>}
    </div>
  );
}

export default HalloweenName;
