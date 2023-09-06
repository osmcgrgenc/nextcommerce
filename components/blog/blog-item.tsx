import React from 'react';

function BlogItem(props) {
    return (
        <>
            <article className="entry">
                <figure className="entry-media">
                    <a href="single.html">
                        <img src="/assets/images/blog/post-1.jpg" alt="image desc"/>
                    </a>
                </figure>

                <div className="entry-body">
                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                        <span className="meta-separator">|</span>
                        <a href="#">Nov 22, 2018</a>
                        <span className="meta-separator">|</span>
                        <a href="#">2 Comments</a>
                    </div>

                    <h2 className="entry-title">
                        <a href="single.html">Cras ornare tristique elit.</a>
                    </h2>

                    <div className="entry-cats">
                        in <a href="#">Lifestyle</a>,
                        <a href="#">Shopping</a>
                    </div>

                    <div className="entry-content">
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                            leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas,
                            ante et vulputate volutpat, uctus metus libero eu augue.</p>
                        <a href="single.html" className="read-more">Continue Reading</a>
                    </div>
                </div>
            </article>
        </>
    );
}

export default BlogItem;