const React = require('react');

class Index extends React.Component {
    render() {
        const fabrics = this.props.fabrics;
        return (
          <html>
             <head>
                <title>{fabrics.name}</title>
                <link rel="stylesheet" href="/css/index.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css?family=Ramaraja|Karla|Oswald|" rel="stylesheet"></link>
             </head>
             <body>
              
                <div className='spacer'>Shop with Free Delivery!</div>

                <div className='banner'>
                  <div className='banner1'>
                  <div>House of Mozes</div></div>
                  <div className='banner2'>
                    <p > <a className='banner3'>shop</a> <a className='banner3'>add</a> <a className='banner3'>delete</a> <a className='banner3'>update</a>  </p></div>
                </div>
                  
                <div className='gridContainer'>
                  
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
              </body>
           </html>
        )
    }
  }
  module.exports = Index;