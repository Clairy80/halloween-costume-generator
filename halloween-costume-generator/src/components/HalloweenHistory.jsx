import React from 'react';
import Zurueck from './Zurueck';


function HalloweenHistory() {
  return (
    <div className="container">
      <h2>Die Geschichte von Halloween</h2>
      <p>
        Halloween hat seine Wurzeln im alten keltischen Fest **Samhain**, das das Ende der Erntezeit und den Beginn des Winters markierte. Die Kelten glaubten, dass in der Nacht des 31. Oktober die Grenze zwischen der Welt der Lebenden und der Toten verschwimmen würde, und dass die Geister der Verstorbenen auf die Erde zurückkehren würden.
      </p>

      <img src="/Bilder/Geschichte/Schrift.png" alt="Samhain" className="history-image" />

      <p>
        Im 8. Jahrhundert erklärte Papst Gregor III. den 1. November zum Feiertag Allerheiligen, einem Tag, um alle Heiligen zu ehren. Der Abend davor wurde als **All Hallows’ Eve** bekannt, später verkürzt zu **Halloween**. Im Laufe der Jahrhunderte entwickelte sich Halloween von einem Tag religiöser Bedeutung zu einem weltlichen Fest voller gruseliger Geschichten, Kostüme und Süßigkeiten.
      </p>

      <h2>Heutige Bräuche</h2>
      <p>
        Heute wird Halloween in vielen Teilen der Welt gefeiert, vor allem in den USA, Kanada, Irland und Großbritannien. Kinder verkleiden sich als gruselige oder lustige Figuren und gehen von Tür zu Tür, um „**Süßes oder Saures**“ zu spielen. Kürbisse werden ausgehöhlt und als **Jack-o'-Lanterns** mit gruseligen Gesichtern dekoriert. Horrorfilme, Halloween-Partys und gruselige Dekorationen gehören ebenfalls zur modernen Tradition.
      </p>

      <img src="/Bilder/Geschichte/JackOLatern.png" alt="Jack-o'-Lantern" className="history-image" />

      <p>
        In Deutschland wird Halloween zunehmend beliebter, vor allem bei Kindern und Jugendlichen. Auch hier ziehen Kinder in Kostümen um die Häuser, und viele Erwachsene feiern auf gruseligen Mottopartys.
      </p>

      <img src="/Bilder/Geschichte/Sweets.png" alt="Süßes oder Saures" className="history-image" /> <Zurueck /> 
    </div>
  );
}

export default HalloweenHistory;
