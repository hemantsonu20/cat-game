import React from 'react';

export default class Cat extends React.Component {

  getSourceImg() {
    return 'assets/img/cat' + this.props.row + this.props.col + '.jpg';
  }

  render() {
    return (
      <div>
        <button className="btn w-100 h-100" onClick={() => this.props.onClick()}>
          <img src={this.getSourceImg()} alt="Cat"></img>
        </button>
      </div>
    );
  }
}
