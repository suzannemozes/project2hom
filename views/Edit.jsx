const React = require('react')
const Fabrics = require('../models/fabrics');


class Edit extends React.Component {
    render() {
        const fabric = this.props.fabric
        return (
            <div>
                <h1>Edit Fabrics page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/api/v1/fabrics/${fabric.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={fabric.name} /><br/>
                    Color: <input type="text" name="color" defaultValue={fabric.color} /><br/>
                    Image: <input type="text" name="image" defaultValue={fabric.image} /><br/>
                    Stock: <input type="text" name="stock" defaultValue={fabric.stock} /><br/>
                    Category: <input type="text" name="category" /><br/>
                    <input type="submit" name="" value="Edit Fabric"/>
                </form>
                <a href="/api/v1"><button><h3>Back to Main Directory!</h3></button></a><br/>
            </div>
        )
    }
}
module.exports = Edit;