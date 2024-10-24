import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GruselKnopf from './GruselKnopf';



function Slider() {
  const kopfBilder = [
    '/Bilder/koepfe/frankenstein.png',
    '/Bilder/koepfe/geistkopf.png',
    '/Bilder/koepfe/hexe.png',
    '/Bilder/koepfe/kuerbis.png',
    '/Bilder/koepfe/mumienkopf.png',
    '/Bilder/koepfe/Vampir.png',
    '/Bilder/koepfe/Werwolf.png',
    '/Bilder/koepfe/skelett.png'
  ];

  const koerperBilder = [
    '/Bilder/koerper/frankensteinkoerper.png',
    '/Bilder/koerper/geistkoerper.png',
    '/Bilder/koerper/hexenkoerper.png',
    '/Bilder/koerper/kuerbiskoerper.png',
    '/Bilder/koerper/mumienkoerper.png',
    '/Bilder/koerper/WerwolfKoerper.png',
    '/Bilder/koerper/VampirKoerper.png',
    '/Bilder/koerper/skelettkoerper.png'
  ];

  const beineBilder = [
    '/Bilder/beine/frankensteinbeine.png',
    '/Bilder/beine/geistbeine.png',
    '/Bilder/beine/hexenbeine.png',
    '/Bilder/beine/kuerbisbeine.png',
    '/Bilder/beine/mumienbeine.png',
    '/Bilder/beine/VampirBeine.png',
    '/Bilder/beine/WerwolfBeine.png',
    '/Bilder/beine/skelettbeine.png'
  ];

  const [currentKopf, setCurrentKopf] = useState(0);
  const [currentKoerper, setCurrentKoerper] = useState(0);
  const [currentBeine, setCurrentBeine] = useState(0);

  const [animating, setAnimating] = useState(false);

  const rollAnimation = (setFunction, length) => {
    setAnimating(true);
    let count = 0;
    const interval = setInterval(() => {
      setFunction((prev) => (prev + 1) % length);
      count++;
      if (count >= 15) {
        clearInterval(interval);
        setAnimating(false);
      }
    }, 100);
  };

  const nextKopf = () => rollAnimation(setCurrentKopf, kopfBilder.length);
  const nextKoerper = () => rollAnimation(setCurrentKoerper, koerperBilder.length);
  const nextBeine = () => rollAnimation(setCurrentBeine, beineBilder.length);

  const randomize = () => {
    nextKopf();
    nextKoerper();
    nextBeine();
  };

  return (
    <Container>
      {/* Jedes Bild in einer eigenen Zeile */}
      <Row className="text-center">
        <Col>
          <img
            src={kopfBilder[currentKopf]}
            alt="Kopf"
            className={`character-part ${animating ? 'rolling' : ''}`}
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <img
            src={koerperBilder[currentKoerper]}
            alt="Körper"
            className={`character-part ${animating ? 'rolling' : ''}`}
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <img
            src={beineBilder[currentBeine]}
            alt="Beine"
            className={`character-part ${animating ? 'rolling' : ''}`}
          />
        </Col>
      </Row>

      {/* Buttons: bei großen Bildschirmen nebeneinander, bei mobilen untereinander */}
      <Row className="text-center mt-3">
        <Col>
          <GruselKnopf text="Nächster Kopf" onClick={nextKopf} />
        </Col>
        <Col>
          <GruselKnopf text="Nächster Körper" onClick={nextKoerper} />
        </Col>
        <Col>
          <GruselKnopf text="Nächste Beine" onClick={nextBeine} />
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <Col>
          <GruselKnopf text="Zufälliger Look" onClick={randomize} />
        </Col>
      </Row> 
    </Container>  
  );
}

export default Slider;
