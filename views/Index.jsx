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
                  
                  <ul>
                        {fabrics.map((fabric) => {
                          console.log(fabric)
                            return (
                                <li>
                                     The{' '}
                                    <a href={`/api/v1/fabrics/${fabric.id}`}>
                   
                                        {fabric.name.charAt(0).toUpperCase() + fabric.name.slice(1)}</a>{' '} is {fabric.color}  <br></br>
                                    <img width={200} src={fabric.image} />
                                    <br />
                                    {/* <form action={`/api/v1/fabrics/${fabric.id}?_method=DELETE`} method="POST">
                                      <button type="submit">Delete</button>
                                    </form> */}
                                    <form action={`/api/v1/fabrics/${fabric.id}?_method=DELETE`} method="POST">
                                  <button type="submit"><h4>Delete Entry</h4></button>
                                  </form>
                                    {/* <a href={`/api/v1/fabrics/${fabric.id}/edit`}>Edit fabric</a> */}
                                    <a href={`/api/v1/fabrics/${fabric.id}/edit`}><button type="submit"><h4>Edit Entry</h4></button></a>
                                </li>
                            );
                        })}
                    </ul>
                    <a href="/api/v1"><button><h3>Back to Main Directory!</h3></button></a><br/>
                </div>
        )
    }
  }
  module.exports = Index;