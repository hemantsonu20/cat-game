import React from 'react';
import Square from '../Square';
import './index.css';

export default class CatGrid extends React.Component {

  getSourceImg(cat) {
    return 'assets/img/cat' + cat.catRow + cat.catCol + '.jpg';
  }

  /**
   * Convert 2d representation into linear
   */
  getGridId(row, col) {
    return (this.props.cols * row) + col;
  }

  renderItem(cat) {
    const srcImage = cat != null ? this.getSourceImg(cat) : null;
    return (
      <Square srcImage={srcImage} />
    );
  }

  render() {
    const rowItems = new Array(this.props.rows);
    for (let i = 0; i < this.props.rows; i++) {

      const colItems = new Array(this.props.cols);
      for (let j = 0; j < this.props.cols; j++) {
        const gridId = this.getGridId(i, j);
        const highlight = this.props.gridData[gridId] != null ? this.props.gridData[gridId].highlight : false;
        const tdClass = highlight ? "grid highlight" + i : "grid";
        colItems.push(<td key={gridId} className={tdClass}>{this.renderItem(this.props.gridData[gridId])}</td>);
      }
      rowItems.push(<tr key={i}>{colItems}</tr>);
    }

    return (
      <table className="table table-bordered text-center">
        <tbody>
          {rowItems}
        </tbody>
      </table>
    );
  }
}
