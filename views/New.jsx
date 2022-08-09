const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Fabrics Page</h1>
            <form action="/fabrics" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                MadeOf: <input type="text" name="madeof" /><br/>
                Width: <input type="text" name="width" /><br/>
                Color: <input type="text" name="length" /><br/>
                Color: <input type="text" name="color" /><br/>
                IsPreWashed: <input type="checkbox" name="isPreWashed" /><br/>
                IsOrganic: <input type="checkbox" name="isOrganic" /><br/>
                <input type="submit" name="" value="Create Fabric"/>
             </form>
        </div>);
  }
}

module.exports = New;