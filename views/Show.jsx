const React = require('react');


class Show extends React.Component {
  render(){
      const fabrics = this.props.fabrics;
      let qty;
      let btn;
      if (fabrics.stock == 0){
        qty = "OUT OF STOCK"
        btn = null;
      } else {
        qty = fabrics.stock;
        btn = <form action={`/api/v1/fabrics/${fabrics.id}?_method=PUT`} method="POST">
        <input type="hidden" name="name" value={fabrics.name}/>
        <input type="hidden" name="color" value={fabrics.color} />
        <input type="hidden" name="image" value={fabrics.image} />
       <input type="hidden" name="stock" value={fabrics.stock - 1}/>
        <input type="hidden" name="category" value={fabrics.category}/>
        <input type="hidden" name="price" value={fabrics.price} />
        <input type="hidden" name="length" value={fabrics.length} />
        <input type="hidden" name="width" value={fabrics.width} />
        <input type="hidden" name="material" value={fabrics.material} />
        <input type="hidden" name="designer" value={fabrics.designer} />
        <input type="hidden" name="category2" value={fabrics.category2}/>
        <input type="hidden" name="image2" value={fabrics.image2} />
        <input type="hidden" name="alt" value={fabrics.alt} />
        <input type="submit" name="" value="Add to Cart"/>
     </form>;
      }
      return(
          <html >

          <head>
              <title>{fabrics.name}</title>
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
                 <div><a href="/api/v1/">House of Mozes</a></div></div>
                 <div className='bannerRight'>
                  
                     <a className='subBannerRight' href="/api/v1/fabrics">shop</a> 
            
                     <a className='subBannerRight' href="/api/v1/fabrics/new">add</a> 
                     <a className='subBannerRight'>journal</a>
                </div>
                </div>
                </div>

            <div className='containerShow'>
            <div className='showLeft'> 
              
              <img width={400} src={fabrics.image}></img><br></br> 
              </div> 
              
              <div className='showRight'>
                <div>
              <h1>{fabrics.name} by {fabrics.designer} </h1>

              <h2>Price: ${fabrics.price}</h2>
              <h3>Stock: {qty}</h3>
              <h3>Item Description</h3><br></br>
                Length: {fabrics.length} <br/>
                Width: {fabrics.width} <br/>
                Material: {fabrics.material} <br/>
                Color: {fabrics.color} <br/>
                Categories: {fabrics.category}, {fabrics.category2} <br/>
                <br/>
                </div>
                <div className='buttonContainer' width="300px"> 
              {/* DELETE */}
              <form action={`/api/v1/fabrics/${fabrics.category}/${fabrics.id}?_method=DELETE`} method="POST">
              <button type="submit">Delete</button></form>

              {/* EDIT */}
              <a href={`/api/v1/fabrics/${fabrics.category}/${fabrics.id}/edit`}><button type="submit">Edit Entry</button></a>
              
              <a>{btn}</a>
              {/* INDEX */}
              <a href="/api/v1/fabrics"><button>View Index</button></a>
              {/* <a href="/api/v1"><button><h3>View All Products</h3></button></a><br/> */}
              </div>
              
             </div>
             </div>
              
          </body>
          </html>
      )
  };
};

module.exports = Show;
