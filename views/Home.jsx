const React = require('react');
const fabrics = require('../models/fabrics');


class Home extends React.Component {
    render() {
        return (
            <html>
            <head>
               <title>HOME</title>
               <link rel="stylesheet" href="/css/index.css"/>
               <link rel="preconnect" href="https://fonts.googleapis.com"></link>
               <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
               <link href="https://fonts.googleapis.com/css?family=Ramaraja|Karla|Oswald|" rel="stylesheet"></link>
            </head>
            <body>
                <div className='section'>
                  <h2 className='section-header'>House of Mozes</h2>
                <div className='boxLeft staatliches'>
                    <div className='grid-item-header grid-item-header-left'>
                        Curated
                        <br></br>
                        Textiles
                    </div>
                    <p class="grid-item-text grid-item-text-left">We love to collect remnant textiles and make one-of-a-kind designs with them. We speak, teach, and consult at tech companies and startups. 
                      <a href="https://instagram.com/houseofmozes"> Say hi! </a>
                      <br></br>
                      <br></br>
                      House of Mozes
                      <br></br>
                      New York City
                    </p>
                <div class="contact-picture">
                   <a href='/api/v1/fabrics'><img src="https://imgur.com/iM9Ndiz.jpg" class="contact-picture-img" width="1160" height="1160" loading="lazy" /></a>
                </div>
                </div>
                <div className='indexContainer'>
                  <button><a href="/api/v1/fabrics/dog">DogHouse of Mozes</a></button>
                  <button><a href="/api/v1/fabrics/home">Home by H.O.M.</a></button>
                  <button><a href="/api/v1/fabrics/remnant">Remnants + Deadstock</a></button>
                </div>
                </div>
                    copyright 2022 | Suzanne Mozes | New York City
  
       
    </body>
  </html>
        );
    }
}

module.exports = Home;