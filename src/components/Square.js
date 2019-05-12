import React from 'react';
import './Square.css';

export default class Square extends React.Component {

  render() {

    const srcImage = this.props.srcImage;

    if (srcImage) {
      return (
        <div>
          <img className="gridImage" src={srcImage} alt="Cat"></img>
        </div>
      );
    }

    return (
      <div></div>
    );

  }
}
