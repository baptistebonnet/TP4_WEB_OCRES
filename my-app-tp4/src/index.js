import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Post extends React.Component {

  constructor(props){
    super(props);
  }

  getLike(i){
    this.props.value[i].like ++;
    document.getElementById("postContainer"+i).innerHTML= this.props.value[i].like;
  }

  display_profils_posts()
  {
    const tab=[];
    for(let i=0; i<this.props.value.length;i++) 
    tab.push(
      <div>
        {this.props.value[i].contenu}
        <button key = {i} onClick = {() => this.getLike(i)}>C'est super</button>
        <span id={"postContainer"+i}>{this.props.value[i].like}</span>
      </div>
    );
    return (<div>{tab}</div>);
  }

	render() {
		return (
      <div>
        {this.display_profils_posts()}
      </div>
		);
	}
}

class Profil extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {color : 'Yellow'};
  }

  getColor(){
    var myString = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
    this.props.value.color = myString;
    document.getElementById("profilContainer").style.backgroundColor= myString;
  }

  render() {
    return (
      <div id="profilContainer" style={{ backgroundColor: this.props.value.color }}>
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
                color : 'Yellow',
                posts : [{contenu : "J'adore les chips",like : 0},{contenu : "J'adore les petites filles, trop mimi",like : 0},{contenu : "Hier soir, je suis parti au parc astérix Trop le fun",like : 0}]
            },
            {
                firstname : "Martine",
                surname : "Marlier",
                date : "25/07/1954",
                picture : "martine.png",
                color : 'Blue',
                posts : [{contenu : "Bonsoir tt le monde",like : 0},{contenu : "Je rejoins facebook version wish",like : 0},{contenu : "Trop bien",like : 0}]
            },
            {
                firstname : "Camille",
                surname : "Lachenille",
                date : "01/03/1994",
                picture : "camille.png",
                color : 'Green',
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
        <Post value = {this.state.profils[this.state.currentProfil].posts} />

      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);