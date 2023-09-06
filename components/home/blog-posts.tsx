import React from 'react';

function BlogPosts(props) {
    return (
        <>
            <div className="blog-posts">
                <div className="container">
                    <h2 className="title text-center">From Our Blog</h2>

                    <div className="owl-carousel owl-simple carousel-with-shadow" data-toggle="owl"
                         data-owl-options='{
                            "nav": false,
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "600": {
                                    "items":2
                                },
                                "992": {
                                    "items":3
                                }
                            }
                        }'>
                        <article className="entry entry-display">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/demos/demo-2/blog/post-1.jpg" alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body text-center">
                                <div className="entry-meta">
                                    <a href="#">Nov 22, 2018</a>, 0 Comments
                                </div>

                                <h3 className="entry-title">
                                    <a href="single.html">Sed adipiscing ornare.</a>
                                </h3>

                                <div className="entry-content">
                                    <a href="single.html" className="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </article>
                        <article className="entry entry-display">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/demos/demo-2/blog/post-1.jpg" alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body text-center">
                                <div className="entry-meta">
                                    <a href="#">Nov 22, 2018</a>, 0 Comments
                                </div>

                                <h3 className="entry-title">
                                    <a href="single.html">Sed adipiscing ornare.</a>
                                </h3>

                                <div className="entry-content">
                                    <a href="single.html" className="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </article>
                        <article className="entry entry-display">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/demos/demo-2/blog/post-1.jpg" alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body text-center">
                                <div className="entry-meta">
                                    <a href="#">Nov 22, 2018</a>, 0 Comments
                                </div>

                                <h3 className="entry-title">
                                    <a href="single.html">Sed adipiscing ornare.</a>
                                </h3>

                                <div className="entry-content">
                                    <a href="single.html" className="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div className="more-container text-center mt-2">
                        <a href="blog.html"
                           className="btn btn-outline-darker btn-more"><span>View more articles</span><i
                            className="icon-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogPosts;