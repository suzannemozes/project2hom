const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Pokemon Page</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Image: <input type="text" name="image" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
             </form>
        </div>);
  }
}

module.exports = New;