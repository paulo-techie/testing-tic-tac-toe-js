/**
 * @jest-environment jsdom
 */
import createPlayer from './player';

describe('createPlayer', () => {
  const player = createPlayer('Player1', 'X');

  it('Return name of player', () => {
    expect(player.getName()).toEqual('Player1');
  });

  it('Return mark/shaper to be inserted by player', () => {
    expect(player.getShape()).toEqual('X');
  });
});