const React = require('react');

class Cart extends React.Component{
  render(){
    const {fabrics} = this.props;
    return(
        <html >
        <head>
            <title>{fabrics.name}</title>
        </head>
        <body >
            <h1>Show page</h1>
            <h1>{this.props.title}</h1>
            <p>                
              Name: {fabrics.name}<br/>
            <h2>Price: {fabrics.price}</h2>
            <img width={200} src={fabrics.image}></img>
            </p>

            {/* HOME BUTTON */}
            <a href="/api/v1"><button><h3>HOME</h3></button></a><br/>
        
            {/* KEEP SHOPPING BUTTON */}
            <a href="/api/v1/fabrics"><button><h3>KEEP SHOPPING</h3></button></a><br/>

            {/* CHECK OUT BUTTON -- NOT WORING, removed href*/}
            <button><h3>CHECK OUT</h3></button><br/>
      
        </body>
    </html>
    )
  }
}
module.exports= Cart;