const React = require('react');
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
    render() {
        const { fabrics } = this.props;
        return (
                <div>
                  <h1>Fabric Index Page</h1>
                  <nav>
                      <a href="/api/v1/fabrics/new/">Create a new fabric</a>
                    </nav>
                  <div style={myStyle}></div> 
                  
                  <ul>
                        {fabrics.map((fabric) => {
                          console.log(fabric)
                            return (
                                <li>
                                     The{' '}
                                    <a href={`/api/v1/fabrics/${fabric.id}`}>
                   
                                        {fabric.name.charAt(0).toUpperCase() + fabric.name.slice(1)}</a>{' '} is {fabric.color}  <br></br>
                                    <img src={fabric.image} />
                                    <br />
                                    <form action={`/api/v1/fabrics/${fabric.id}`} method="POST"><button type="submit">Delete</button></form>
                                    <a href={`/api/v1/fabrics/${fabric.id}/edit`}>Edit fabric</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
        )
    }
  }
  module.exports = Index;