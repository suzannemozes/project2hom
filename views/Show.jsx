const React = require('react');
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Show extends React.Component {
    
  render() {
    console.log(this.props)
      const { fabrics } = this.props; // this.props is whatever index we passed in from the parent as a property (this.props is the way to refer to it in here)
      console.log(fabrics.image)
      return (
              <div style={myStyle}>
                  <h1>Fabric Show Page</h1>
                  <h2>{fabrics.name}</h2>
                  <img src={fabrics.image}></img>
                  <a href='/api/v1/fabrics/'> back to index </a>
               
              </div>
      )
  }
}
module.exports = Show;