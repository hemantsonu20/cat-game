import React from 'react';
import Cat from './Cat';

export default class CatBoard extends React.Component {

  renderItem(row, col) {
    return (
      <Cat row={row} col={col} onClick={() => this.props.onCatClick(row, col)} />
    );
  }

  render() {

    const rowItems = new Array(this.props.rows);
    for (let i = 0; i < this.props.rows; i++) {

      const colItems = new Array(this.props.cols);
      for (let j = 0; j < this.props.cols; j++) {
        colItems.push(<td key={i + ' ' + j}>{this.renderItem(i, j)}</td>);
      }
      rowItems.push(<tr key={i}>{colItems}</tr>);
    }

    return (
      <table className="table table-borderless">
        <tbody>
          {rowItems}
        </tbody>
      </table>
    );
  }
}
