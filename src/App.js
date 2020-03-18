import React, {useState} from 'react';
import {Container, Row, Col, Button, Form, ButtonGroup} from 'react-bootstrap';
import {GamersTable} from './components/gamers-table';

function App() {
  const [gamers, setGamers] = useState([])
  const [gamerName, setGamerName] = useState('');
  const [bet, setBet] = useState(10);

  const handleAddGamer = () => {
    setGamers([
      ...gamers,
      {
        name: gamerName,
        points: 0
      }
    ])
    setGamerName('')
  }

  const handleChangeName = (e) => {
    setGamerName(e.target.value)
  }

  const getBetVariant = (buttonBet) => {
    return bet === buttonBet ? "secondary" : 'light'
  }

  const handleAddPoints = (name) => {
    if (!bet) {
      return 
    }

    const newGamersState = gamers
      .map(gamer => {
        if (gamer.name === name) {
          return {
            ...gamer,
            points: gamer.points + bet
          }
        }
        return gamer
      })
      .sort((gamer1, gamer2) => gamer2.points - gamer1.points)

    setGamers(newGamersState)

    if (bet < 50) {
      setBet(bet + 10)
    } else {
      setBet(10)
    }
  }

  const handleDeleteGamer = (name) => {
    const newGamersState = gamers.filter(gamer => gamer.name !== name)
    setGamers(newGamersState)
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col xs={3}>
          <Form.Group>
            <Form.Control
              type="text"
              value={gamerName}
              onChange={handleChangeName}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleAddGamer}>
            Добавить
          </Button>
        </Col>
        <Col>
          <ButtonGroup aria-label="Basic example" className="float-right">
            <Button variant={getBetVariant(10)} onClick={() => setBet(10)}>10</Button>
            <Button variant={getBetVariant(20)} onClick={() => setBet(20)}>20</Button>
            <Button variant={getBetVariant(30)} onClick={() => setBet(30)}>30</Button>
            <Button variant={getBetVariant(40)} onClick={() => setBet(40)}>40</Button>
            <Button variant={getBetVariant(50)} onClick={() => setBet(50)}>50</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <GamersTable 
            gamers={gamers}
            onAddPoints={handleAddPoints}
            onDeleteGamer={handleDeleteGamer}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
