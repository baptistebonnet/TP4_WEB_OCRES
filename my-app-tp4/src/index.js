import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Post extends React.Component {

	render() {
		return (
      <div></div>
		);
	}
}

class Profil extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {color : 'Yellow'};
  }

  getColor(){
    this.setState({
      color : "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
    });

  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
      {this.props.value.surname} <br/>
      <img src = {this.props.value.picture} height = "200" width = "200"></img>
      <button onClick ={() => this.getColor()}>Change Style</button>
      </div>
    );
  }
}

class Page extends React.Component {
    
    constructor(props) {

    super(props);
    this.state = { 
      profils : [
            {
                firstname : "Bob",
                surname : "Léponge",
                date : "01/05/1999",
                picture : "bob.png",
                posts : [{contenu : "J'adore les chips",like : 0},{contenu : "J'adore les petites filles, trop mimi",like : 0},{contenu : "Hier soir, je suis parti au parc astérix Trop le fun",like : 0}]
            },
            {
                firstname : "Martine",
                surname : "Marlier",
                date : "25/07/1954",
                picture : "martine.png",
                posts : [{contenu : "Bonsoir tt le monde",like : 0},{contenu : "Je rejoins facebook version wish",like : 0},{contenu : "Trop bien",like : 0}]
            },
            {
                firstname : "Camille",
                surname : "Lachenille",
                date : "01/03/1994",
                picture : "camille.png",
                posts : [{contenu : "Je suis trop beau",like : 0},{contenu : "Je suis à dalas",like : 0},{contenu : "Les chiens c'est cool",like : 0}]
            }
          ],
      currentProfil : 0
    };

  }

  handleChange(i){
    this.setState ({
      currentProfil : i
    });
  }

  display_profils_button()
  {
    const rendu=[];
    for(let i=0; i<this.state.profils.length;i++) 
    rendu.push(
      <button key = {i} onClick = {() => this.handleChange(i)}>{this.state.profils[i].firstname}</button>
    );
    return (<div>{rendu}</div>);
  }

  render() {
    return (
      <div>
        <p>Coucou
        </p>

        {this.display_profils_button()}

        <Profil value = {this.state.profils[this.state.currentProfil]} />

      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);