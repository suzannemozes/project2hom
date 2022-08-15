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
               {/* <div> 
               <div className='spacer'>Shop with Free Delivery! Promo Code: PERSCHOLASRTT14</div>

               <div className='bannerContainer'>
                 <div className='bannerLeft'>
                   <div><a href="/api/v1/">House of Mozes</a></div></div>
                 <div className='bannerRight'>
                  
                     <a className='subBannerRight' href="/api/v1/fabrics">shop</a> 
            
                     <a className='subBannerRight' href="/api/v1/fabrics/new">add</a> 
                     <a className='subBannerRight'>journal</a>
                </div>
                </div>
                </div> */}
              
                <div className='section contact-card'>
                  <h2 className='section-header'>House of Mozes</h2>
                <div className='contact-info'>
                    <a class='grid-item-header grid-item-header-left'>
                        Curated
                        <br></br>
                        Textiles
                    </a>
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
                </div>
                    Suzanne Mozes <br>
                    </br>New York City
 {/* <img src="https://i.imgur.com/nEIY2AE.jpg" className="bgSizeContain"/> */}
                    {/* <h3 class="grid-item-header grid-item-header-left">World Famous Fabric and Goods Curated Collection</h3> */}
                  {/* <p class="grid-item-text grid-item-text-left">
                    <a href='/api/v1/fabrics'><button><h3>View Fabrics</h3></button></a>
                    <a href='/api/v1/fabrics/new'><button><h3 >Add New Fabric</h3></button></a>
                  </p> */}
       
    </body>
  </html>
        );
    }
}

module.exports = Home;