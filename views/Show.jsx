const React = require('react');


class Show extends React.Component {
  render(){
      const fabrics = this.props.fabrics;
      return(
          <html >
          <head>
              <title>{fabrics.name}</title>
          </head>
          <body >
              <h1>Show page</h1>
              <p>                
                Name: {fabrics.name}<br/>
                Stock: {fabrics.stock}
              <h2>Price: {fabrics.price}</h2>
              <img width={200} src={fabrics.image}></img>
              <h2>Available: {fabrics.stock}</h2>
              </p>

              {/* HOME BUTTON */}
              <a href="/api/v1"><button><h3>HOME</h3></button></a><br/>

              {/* EDIT BUTTON -- not working!!*/}
              {/* <a href="/api/v1/fabrics/${fabrics.id}/edit"><button><h3>EDIT FABRIC</h3></button></a><br/> */}

              {/* BUY BUTTON */}
              <a href="/api/v1/fabrics/cart"><button><h3>BUY</h3></button></a><br/>

              {/* BACK TO INDEX BUTTON */}
              <a href="/api/v1/fabrics"><button><h3>View Index</h3></button></a><br/>

              
          </body>
          </html>
      )
  };
};

module.exports = Show;
