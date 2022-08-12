const React = require('react');


class Show extends React.Component {
  render(){
      const {fabrics} = this.props;
      return(
          <html >
          <head>
              <title>{fabrics.name}</title>
          </head>
          <body >
              <h1>Show page</h1>
              <h2>{fabrics.name}</h2>
              <img src={fabrics.image}></img>

              <a href="/api/v1"><button><h3>HOME</h3></button></a><br/>
              {/* <a href="/api/v1/fabrics/${fabrics.id}/edit"><button><h3>EDIT FABRIC</h3></button></a><br/> */}//not working
              <a href="/api/v1/fabrics"><button><h3>View Index</h3></button></a><br/>
              
          </body>
          </html>
      )
  };
};

module.exports = Show;
