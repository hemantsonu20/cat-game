import React from 'react';

export default class Header extends React.Component {

  render() {

    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Cat Game</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <button className="btn btn-link nav-item nav-link active" onClick={() => this.props.onStartGame()}>Start New Game</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
