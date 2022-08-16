// This adds react to our file
const React = require('react');

class DefaultLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">

        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <title>{this.props.title}</title>
        </head>

        <body >
          <div> 
            <div className='spacer'>Shop with Free Delivery! Promo Code: PERSCHOLASRTT14</div>
            <div className='bannerContainer'>
              <div className='bannerLeft'>
                <div><a href="/">House of Mozes</a></div>
              </div>

              <div className='bannerRight'>
                <a className='subBannerRight' href="/api/v1/fabrics">shop</a> 
                <a className='subBannerRight' href="/api/v1/fabrics/new">add</a> 
                <a className='subBannerRight'>journal</a>
                <a href="/api/v1/fabrics/dog" className='subBannerRight'>dogHouse</a>
                <a href="/api/v1/fabrics/home" className='subBannerRight'>home by H.O.M</a>
                <a href="/api/v1/fabrics/remnant" className='subBannerRight'>remnants</a>
              </div>
              </div>
              </div>
        <h1>{this.props.title}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
        </body>
    </html>
    )
  }
}
module.exports= DefaultLayout;