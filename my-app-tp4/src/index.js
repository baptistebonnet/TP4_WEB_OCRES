import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

profils : [
            {
                prenom: "Bob",
                nom : "Léponge",
                dateN : "01/05/1999",
                imageP : "jeanne.jpg",
                posts : [{contenu : "J'adore les chips",like : 0},{contenu : "J'adore les petites filles, trop mimi",like : 0},{contenu : "Hier soir, je suis parti au parc astérix Trop le fun",like : 0}]
            },
            {
                prenom: "Martine",
                nom : "Marlier",
                dateN : "25/07/1954",
                imageP : "martine.jpg",
                posts : [{contenu : "Bonsoir tt le monde",like : 0},{contenu : "Je rejoins facebook version wish",like : 0},{contenu : "Trop bien",like : 0}]
            },
            {
                prenom: "Camille",
                nom : "Lachenille",
                dateN : "01/03/1994",
                imageP : "camille.jpg",
                posts : [{contenu : "Je suis trop beau",like : 0},{contenu : "Je suis à dalas",like : 0},{contenu : "Les chiens c'est cool",like : 0}]
            }
          ]



class Profil extends React.Component {
 
  render() {
    return (
      
    );
  }
}

class Post extends React.Component {

	render() {
		return (

		)
	}
}



class Page extends React.Component {
  render() {
    return (
  
    );
  }
}



// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);