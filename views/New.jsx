const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Fabric Page</h1>
            <form action="/api/v1/fabrics" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Image: <input type="text" name="image" /><br/>
                <input type="submit" name="" value="Create Fabric"/>
             </form>
        </div>);
  }
}

module.exports = New;