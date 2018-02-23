var React = require('react');
var PropTypes = require('prop-types');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/../css/style.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
            console.log("hello world");
          `,
            }}
          />
        </head>
        <body>
            <div className="outer-wrapper">
                <div className="inner-wrapper">
                    {this.props.children}
                </div>
            </div>

        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;
