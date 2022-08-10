const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
            <h1>Fabrics index page</h1>
            <ul>
                {
                   this.props.fabrics.map((fabric, i) => {
                    return (
                        <li>
                        The { fabric.name } is { fabric.color }
                        { fabric.upholstery ? `It is upholstery fabric.` : `It is not upholstery fabric.` }
                        <nav>
                           <a href="/fabrics/new">Create a New Fabric</a>
                        </nav>
                        </li>
                        )
                    })
                }
            </ul>
        </div> );
  }
}

module.exports = Index;