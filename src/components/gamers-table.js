import React from 'react';
import {Table, Button} from 'react-bootstrap';

export const GamersTable = ({gamers, onAddPoints, onDeleteGamer}) => (
  <Table hover >
    <thead>
      <tr>
        <th></th>
        <th>#</th>
        <th>Игрок</th>
        <th>Баллы</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {gamers.map((gamer, index) => (
        <tr key={index}>
          <td><Button variant="danger" onClick={() => onDeleteGamer(gamer.name)}>x</Button></td>
          <td>{index + 1}</td>
          <td>{gamer.name}</td>
          <td>{gamer.points}</td>
          <td><Button onClick={() => onAddPoints(gamer.name)} variant="success">+</Button></td>
        </tr>
      ))}
    </tbody>
  </Table>
)