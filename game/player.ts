import { action, observable } from 'mobx';

import Board from './board';
import Coordinate from './coordinate';
import Placement from './board';
import Piece from './piece';

export enum Team {
  White = 'white',
  Black = 'black'
}

export default class Player {
  title: string;
  team: Team;
  @observable pieces: Piece[];
  @observable placements: Map<number, Piece>;

  get allCanMove() {
    return this.pieces.filter(p => p.canMove);
  }

  constructor(team: Team, pieces: Piece[]) {
    for (const p of pieces) {
      if (!p.c) {
        throw new Error(`
All pieces given to a Player need to be given coordinates.
No coordinates received.
`);
      }
    }

    this.title = team === Team.White ? 'White' : 'Black';

    this.team = team;

    this.pieces = pieces;

    this.placements = new Map();
    for (const p of pieces) {
      this.placements.set(Coordinate.toNumber(p.c!), p);
    }
  }

  @action forward = () => this.pieces.forEach(p => p.forward());
}
