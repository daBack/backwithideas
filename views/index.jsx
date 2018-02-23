var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Index extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <div className="start-image">
                    <div className="head-content">
                        <div className="head-title">
                            <div className='head-titles'>
                                <h1>Oscar Bäck</h1>
                                <h3>Frontend designer // Photo</h3>
                            </div>
                            <article>
                                Student at Blekinges Tekinska Högskola. Studying webprogramming,
                                love design and photography.
                            </article>

                            <nav>
                                <a href="test">Contact me</a>
                                <a href="/gallery">Gallery</a>
                                <a href="test">About me</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
