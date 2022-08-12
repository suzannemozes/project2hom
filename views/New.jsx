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
                Stock: <input type="text" name="stock" /><br/>
                Category: <input type="text" name="category" /><br/>
                Price: <input type="text" name="price" /><br/>
                Length: <input type="text" name="length" /><br/>
                Width: <input type="text" name="width" /><br/>
                Material: <input type="text" name="material" /><br/>
                Designer: <input type="text" name="designer" /><br/>
                Category2: <input type="text" name="category2" /><br/>
                Image 2: <input type="text" name="image2" /><br/>
                <input type="submit" name="" value="Create Fabric"/>
             </form>
        </div>);
  }
}

module.exports = New;