const React = require('react');
const fabrics = require('../models/fabrics');

class New extends React.Component {
  render() {
    return (
      <html>
      <head>
         <title>Edit</title>
         <link rel="stylesheet" href="/css/index.css"/>
         <link rel="preconnect" href="https://fonts.googleapis.com"></link>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
         <link href="https://fonts.googleapis.com/css?family=Ramaraja|Karla|Oswald|" rel="stylesheet"></link>
      </head>
      <body >
          <div> 
            <div className='spacer'>Shop with Free Delivery! Promo Code: PERSCHOLASRTT14</div>
            <div className='bannerContainer'>
              <div className='bannerLeft'>
                <div><a href="/">House of Mozes</a></div>
              </div>

              <div className='bannerRight'>
                <a className='subBannerRight' href="/api/v1/fabrics">shop</a> 
                <a className='subBannerRight' href="/api/v1/fabrics/new">add</a> 
                <a className='subBannerRight'>journal</a>
                <a href="/api/v1/fabrics/dog" className='subBannerRight'>dogHouse</a>
                <a href="/api/v1/fabrics/home" className='subBannerRight'>home by H.O.M</a>
                <a href="/api/v1/fabrics/remnant" className='subBannerRight'>remnants</a>
              </div>
              </div>
                </div>

                <div className='newBuffer'></div>
                 <h1 className='formheader'>add PRODUCT</h1>
                 <div className='newBuffer'></div>
                <div className="staatliches">
            <form className="button" action="/api/v1/fabrics/:category" method="POST">
                Name: <input type="text" name="name" placeholder="MUST ADD NAME"/><br/>
                Color: <input type="text" name="color" /><br/>
                Image: <input type="text" name="image" defaultValue=".jpg"/><br/>
                Stock: <input type="text" name="stock" /><br/>
                Category: <input type="text" name="category" /><br/>
                Price: <input type="text" name="price" /><br/>
                Length: <input type="text" name="length" /><br/>
                Width: <input type="text" name="width" /><br/>
                Material: <input type="text" name="material" /><br/>
                Designer: <input type="text" name="designer" /><br/>
                Category2: <input type="text" name="category2" /><br/>
                Image 2: <input type="text" name="image2" /><br/>
                Alt: <input type="text" name="alt"/><br/>
                <input className="button createProduct" type="submit" name="" value="CREATE PRODUCT"/>
             </form>
        </div>
      </body>
    </html>
    )
  }
}

module.exports = New;