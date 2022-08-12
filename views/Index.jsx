const React = require('react');

class Index extends React.Component {
    render() {
        const fabrics = this.props.fabrics;
        return (
          <html>
            <head>
              <title>tk</title>
              <link rel="stylesheet" href="/css/index.css" ></link>
            </head>
                <div className='tktktkt'>
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
              </html>
        )
    }
  }
  module.exports = Index;