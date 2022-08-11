const React = require('react');


class Home extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>Welcome to House of Mozes</title>
            </head>
            <body >
                <h1 >World Famous Fabric and Goods Curated Collection</h1>
                <div>
                    <a href='/api/v1/fabrics'><button><h3>View Fabrics</h3></button></a>
                    <a href='/api/v1/fabrics/new'><button><h3>Add New Fabric</h3></button></a>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Home;