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

              <a href="/api/v1"><button><h3>Back to Main Directory!</h3></button></a><br/>

              <a href="/api/v1/fabrics"><button><h3>View Index</h3></button></a><br/>
              
          </body>
          </html>
      )
  };
};

module.exports = Show;







// const React = require('react')


// class Show extends React.Component {
//   render() {
//     console.log(this.props)
//       const { fabrics } = this.props.fabrics; // this.props is whatever index we passed in from the parent as a property (this.props is the way to refer to it in here)
//       // console.log(fabrics.image)
//       return (
//               <div>
//                   <h1>Fabric Show Page</h1>
//                   <h2>{fabrics.name}</h2>
//                   <img src={fabrics.image}></img>
//                   <a href='/api/v1/fabrics/'> back to index </a>
               
//               </div>
//       )
//   }
// }
// module.exports = Show;
