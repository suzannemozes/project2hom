const React = require('react')
const Fabrics = require('../models/fabrics');


class Edit extends React.Component {
    render() {
        const fabric = this.props.fabric
        return (
          <html>
            <head>
               <title>Edit</title>
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
                     <a href="/api/v1/fabrics/dog">DogHouse of Mozes</a>
                     <a href="/api/v1/fabrics/home">Home by H.O.M.</a>
                     <a href="/api/v1/fabrics/remnant">Remnants + Deadstock</a>
                </div>
                </div>
                </div>
                
              <div>
                <div className='newBuffer'></div>
                 <h1 className='formheader'>edit PRODUCT</h1>
                 <div className='newBuffer'></div>
                <div className="staatliches">
                <form className="button" action={`/api/v1/fabrics/${fabric.category}/${fabric.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={fabric.name} /><br/>
                    Color: <input type="text" name="color" defaultValue={fabric.color} /><br/>
                    Image: <input type="text" name="image" defaultValue={fabric.image} /><br/>
                    Stock: <input type="text" name="stock" defaultValue={fabric.stock} /><br/>
                    Category: <input type="text" name="category" defaultValue={fabric.category}/><br/>
                    Price: <input type="text" name="price" defaultValue={fabric.price} /><br/>
                    Length: <input type="text" name="length" defaultValue={fabric.length}/><br/>
                    Width: <input type="text" name="width" defaultValue={fabric.width}/><br/>
                    Material: <input type="text" name="material" defaultValue={fabric.material} /><br/>
                    Designer: <input type="text" name="designer" defaultValue={fabric.designer}/><br/>
                    Category2: <input type="text" name="category2" defaultValue={fabric.category2}/><br/>
                    Image 2: <input type="text" name="image2" defaultValue={fabric.image2} /><br/>
                    Alt: <input type="text" name="alt" defaultValue={fabric.alt} /><br/>
                    <input type="submit" className='createProduct' name="" value="SAVE EDITS"/>
                </form>
                </div>
               </div>
             
               
              </body>
           </html>
        )
    }
  }

module.exports = Edit;