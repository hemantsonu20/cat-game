import React from 'react';
import Header from '../Header';
import CatBoard from '../CatBoard';
import CatGrid from '../CatGrid';

export const boardRows = 3;
export const boardCols = 4;
export const gridRows = 4;
export const gridCols = 3;
const message = 'Click on the cat images to fill the grid. Fill unique cats in all rows to win the game.';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: message,
      gridData: Array(gridRows * gridCols).fill(null),
      gridIndex: 0,
    };
  }

  hasNextPosition() {
    return this.state.gridIndex < gridRows * gridCols;
  }

  hasWon(gridData) {
    let won = true;
    for (let i = 0; i < gridRows; i++) {

      const map = new Map();
      for (let j = 0; j < gridCols; j++) {
        const gridId = i * gridCols + j;
        const val = gridData[gridId].catRow + ' ' + gridData[gridId].catCol;
        if (map.has(val)) {
          const oldGridId = map.get(val);
          gridData[gridId].highlight = true;
          gridData[oldGridId].highlight = true;
          won = false;
        } else {
          map.set(val, gridId);
        }
      }
    }
    return won;
  }

  handleCatClick(catRow, catCol) {

    let status = 'Clicked ' + catRow + ' ' + catCol;

    if (!this.hasNextPosition()) {
      return;
    }

    const gridData = this.state.gridData.slice();
    const gridIndex = this.state.gridIndex;
    gridData[gridIndex] = { catRow: catRow, catCol: catCol };
    if (gridIndex + 1 === gridRows * gridCols) {
      if (this.hasWon(gridData)) {
        status = 'YOU WIN';
      } else {
        status = 'YOU LOSE';
      }
    }

    this.setState({
      status: status,
      gridData: gridData,
      gridIndex: gridIndex + 1,
    });
  }

  onStartGame() {

    this.setState({
      status: message,
      gridData: Array(gridRows * gridCols).fill(null),
      gridIndex: 0,
    });
  }

  render() {

    let statusClassName = 'alert-info';
    if (this.state.status === 'YOU WIN') {
      statusClassName = 'alert-success';
    } else if (this.state.status === 'YOU LOSE') {
      statusClassName = 'alert-danger';
    }

    return (
      <div>
        <Header onStartGame={() => this.onStartGame()} />
        <div className="container mt-3 mb-5">
          <div className={'text-center alert ' + statusClassName}>{this.state.status}</div>
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <CatBoard rows={boardRows} cols={boardCols} onCatClick={(catRow, catCol) => this.handleCatClick(catRow, catCol)} />
            </div>
            <div className="col-lg-5">
              <CatGrid rows={gridRows} cols={gridCols} gridData={this.state.gridData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
