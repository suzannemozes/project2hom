const React = require('react');

class Index extends React.Component {
    render() {
        const fabrics = this.props.fabrics;
        return (
          <html>
             <head>
                <title>{fabrics.name}</title>
                <link rel="stylesheet" href="/css/index.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css?family=Ramaraja|Karla|Oswald|" rel="stylesheet"></link>
             </head>
             <body>
             <div> 
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
                </div>
                  
                <div >
                  <div className='container'>
                        {fabrics.map((fabric) => {
                          console.log(fabric)
                            return (
                                
                                <div className='item'> 
                                  <div >  
                                  <a href={`/api/v1/fabrics/${fabric.id}`}><img src={fabric.image} alt={fabric.alt} className='bgSizeCover' /></a><br></br>

                                  <h3><a href={`/api/v1/fabrics/${fabric.id}`}> 
                                    {fabric.name.charAt(0).toUpperCase() + fabric.name.slice(1)}{' '} 
                                    in {' '} 
                                    {fabric.color.charAt(0).toUpperCase() + fabric.color.slice(1)} 
                                    </a> </h3>
                                    <br></br>
                                    ${fabric.price} USD/yd 
                                    </div>
                                </div>
                               
                            );
                        })}
                        
                  </div>
              </div>
              </body>
              <footer>
                <a href="/api/v1/fabrics/new"><button>Add New Product</button></a>
              </footer>
           </html>
        )
    }
  }
  module.exports = Index;

