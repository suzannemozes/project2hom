const React = require('react')

class Edit extends React.Component {
    render() {
        const fabrics = this.props.fabrics
        return (
            <div>
                <h1>Edit Fabrics page</h1>
                <form action={`/api/v1/fabrics/${fabrics.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Image: <input type="text" name="image" /><br/>
                    <input type="submit" name="" value="Edit Fabric"/>
                </form>
            </div>
        )
    }
}
module.exports = Edit;