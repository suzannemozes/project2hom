const React = require('react')
const Fabrics = require('../models/fabrics');


class Edit extends React.Component {
    render() {
        const fabrics = this.props.fabrics
        return (
            <div>
                <h1>Edit Fabrics page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/api/v1/fabrics/${fabrics.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" placeholder='Name'/><br/>
                    Color: <input type="text" name="color" placeholder='Color'/><br/>
                    Image: <input type="text" name="image" placeholder='url.jpg'/><br/>
                    <input type="submit" name="" value="Edit Fabric"/>
                </form>
                <a href="/api/v1"><button><h3>Back to Main Directory!</h3></button></a><br/>
            </div>
        )
    }
}
module.exports = Edit;