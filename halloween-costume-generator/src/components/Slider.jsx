import React, {useState} from 'react';
import { Button, Container, Row, Col} from 'react-bootstrap';

function Slider(){
    const kopfBilder = ['/Bilder/koepfe/frankstein.png', '/Bilder/koepfe/geistkopf.png', '/Bilder/koepfe/hexe.png', '/Bilder/koepfe/kuerbis.png', '/Bilder/koepfe/mumienkopf.png', '/Bilder/koepfe/row-1-column-1.png', '/Bilder/koepfe/skelett.png'];
    const [currentKopf, setCurrentKopf] = useState(0);


    const nextKopf = () => {
        setCurrentKopf((currentKopf + 1) % kopfBilder.length);
    }


    const randomize = () => {
        const randomKopf = Math.floor(Math.random() * kopfBilder.length);
        setCurrentKopf(randomKopf);
    }

    return (
        <Container>
            <Row className='text-center'>
                <Col>
                    <img src={kopfBilder[currentKopf]} alt='Kopf' className='character-part' />
                </Col>
            </Row>
            <Row className='text-center mt-3'>
                <Col>
                    <Button onClick={nextKopf} className='knöpfchen1' >Nächstes Bild</Button>
                    <Button onClick={randomize} className="knöpfchen">Zufälliges Bild</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Slider;
