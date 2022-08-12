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
        <input type="submit" name="" value="Add to Cart"/>
     </form>;
      }
      return(
          <html >
          <head>
              <title>{fabrics.name}</title>
          </head>
          <body >
              <h1>{fabrics.name}</h1>
              <p>                
                Stock: {fabrics.stock}
              <h3>Price: ${fabrics.price}</h3>
              {btn}
              <img width={200} src={fabrics.image}></img>
              <h2>Available: {qty}</h2>
              </p>

              {/* HOME BUTTON */}
              <a href="/api/v1"><button><h3>HOME</h3></button></a><br/>

              {/* EDIT BUTTON*/}
              {/* <a href="/api/v1/fabrics/:id/edit"><button><h3>EDIT FABRIC</h3></button></a> */}

              <a href={`/api/v1/fabrics/${fabrics.id}/edit`}><button type="submit"><h4>Edit Entry</h4></button></a><br/>

              {/* BACK TO INDEX BUTTON */}
              <a href="/api/v1/fabrics"><button><h3>View Index</h3></button></a><br/>

              
          </body>
          </html>
      )
  };
};

module.exports = Show;
