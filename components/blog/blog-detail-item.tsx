import React from 'react';

function BlogDetailItem(props) {
    return (
        <>
            <div className="col-lg-9">
                <article className="entry single-entry">
                    <figure className="entry-media">
                        <img src="/assets/images/blog/single/1.jpg" alt="image desc"/>
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
                            Cras ornare tristique elit.
                        </h2>

                        <div className="entry-cats">
                            in <a href="#">Lifestyle</a>,
                            <a href="#">Shopping</a>
                        </div>

                        <div className="entry-content editor-content">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                                vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                                laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
                                nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
                                luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
                                commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
                                tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <a
                                    href="#">ultrices sagittis</a>, mi neque euismod dui, eu pulvinar
                                nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                                dapibus sed, urna.</p>

                            <div className="pb-1"></div>

                            <img src="/assets/images/blog/single/2.jpg" alt="image"
                                 className="float-left"/>

                            <h3>Quisque volutpat mattiseros. </h3>

                            <ul>
                                <li>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                                    sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                    justo. Suspendisse potenti.
                                </li>
                                <li>Sed egestas, ante et vulputate volutpat, eros pede semper est,
                                    vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                                    adipiscing, commodo quis, gravida id, est.
                                </li>
                                <li>Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                    lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis,
                                    mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                                    Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                                    urna.
                                </li>
                            </ul>

                            <div className="pb-1 clearfix"></div>

                            <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                                ligula <a href="#">sollicitudin laoreet</a> viverra, tortor libero
                                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                                eros pede semper est, vitae luctus metus libero eu augue. Morbi
                                purus libero, faucibus adipiscing, commodo quis, gravida id, est.
                                Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                                felis. </p>

                            <blockquote>
                                <p>“ Sed egestas, ante et vulputate volutpat, eros pede semper est,
                                    vitae luctus metus libero eu augue. ”</p>
                            </blockquote>

                            <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
                                est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                                lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                                neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                                pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi
                                interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
                                ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
                                libero dolor a purus. </p>

                            <div className="pb-1"></div>

                            <h3>Morbi interdum mollis sapien.</h3>

                            <img src="/assets/images/blog/single/3.jpg" alt="image"/>

                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                justo. Suspendisse potenti. Sed egestas, ante et vulputate
                                volutpat, eros pede semper est, vitae luctus metus libero eu
                                augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                                gravida id, est. Sed lectus. Praesent <a href="#">elementum
                                    hendrerit</a> tortor. Sed semper lorem at felis. Vestibulum
                                volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
                                pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus
                                eu, fermentum et, dapibus sed, urna.</p>

                            <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                                Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
                                tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                                Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                                Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
                                diam sit amet mi ullamcorper vehicula. Integer adipiscing risus
                                a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc
                                sem lacus, accumsan quis, faucibus non, congue vel, arcu. </p>
                        </div>

                        <div className="entry-footer row no-gutters flex-column flex-md-row">
                            <div className="col-md">
                                <div className="entry-tags">
                                    <span>Tags:</span> <a href="#">photography</a> <a href="#">style</a>
                                </div>
                            </div>

                            <div className="col-md-auto mt-2 mt-md-0">
                                <div className="social-icons social-icons-color">
                                    <span className="social-label">Share this post:</span>
                                    <a href="#" className="social-icon social-facebook" title="Facebook"
                                       target="_blank"><i className="icon-facebook-f"></i></a>
                                    <a href="#" className="social-icon social-twitter" title="Twitter"
                                       target="_blank"><i className="icon-twitter"></i></a>
                                    <a href="#" className="social-icon social-pinterest"
                                       title="Pinterest" target="_blank"><i
                                        className="icon-pinterest"></i></a>
                                    <a href="#" className="social-icon social-linkedin" title="Linkedin"
                                       target="_blank"><i className="icon-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="entry-author-details">
                        <figure className="author-media">
                            <a href="#">
                                <img src="/assets/images/blog/single/author.jpg" alt="User name"/>
                            </a>
                        </figure>

                        <div className="author-body">
                            <div className="author-header row no-gutters flex-column flex-md-row">
                                <div className="col">
                                    <h4><a href="#">John Doe</a></h4>
                                </div>
                                <div className="col-auto mt-1 mt-md-0">
                                    <a href="#" className="author-link">View all posts by John Doe <i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="author-content">
                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas
                                    auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. </p>
                            </div>
                        </div>
                    </div>
                </article>

                <nav className="pager-nav" aria-label="Page navigation">
                    <a className="pager-link pager-link-prev" href="#" aria-label="Previous"
                       tabIndex={-1}
                        // tabIndex="-1"
                    >
                        Previous Post
                        <span className="pager-link-title">Cras iaculis ultricies nulla</span>
                    </a>

                    <a className="pager-link pager-link-next" href="#" aria-label="Next"
                       tabIndex={-1}
                        // tabIndex="-1"
                    >
                        Next Post
                        <span className="pager-link-title">Praesent placerat risus</span>
                    </a>
                </nav>

                <div className="related-posts">
                    <h3 className="title">Related Posts</h3>


                    <div className="owl-carousel owl-simple" data-toggle="owl"
                         data-owl-options='{
                                        "nav": false,
                                        "dots": true,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":1
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            }
                                        }
                                    }'>
                        <article className="entry entry-grid">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/blog/grid/3cols/post-1.jpg"
                                         alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body">
                                <div className="entry-meta">
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
                            </div>
                        </article>

                        <article className="entry entry-grid">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/blog/grid/3cols/post-2.jpg"
                                         alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body">
                                <div className="entry-meta">
                                    <a href="#">Nov 21, 2018</a>
                                    <span className="meta-separator">|</span>
                                    <a href="#">0 Comments</a>
                                </div>

                                <h2 className="entry-title">
                                    <a href="single.html">Vivamus ntulla necante.</a>
                                </h2>

                                <div className="entry-cats">
                                    in <a href="#">Lifestyle</a>
                                </div>
                            </div>
                        </article>

                        <article className="entry entry-grid">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/blog/grid/3cols/post-3.jpg"
                                         alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body">
                                <div className="entry-meta">
                                    <a href="#">Nov 18, 2018</a>
                                    <span className="meta-separator">|</span>
                                    <a href="#">3 Comments</a>
                                </div>

                                <h2 className="entry-title">
                                    <a href="single.html">Utaliquam sollicitudin leo.</a>
                                </h2>

                                <div className="entry-cats">
                                    in <a href="#">Fashion</a>,
                                    <a href="#">Lifestyle</a>
                                </div>
                            </div>
                        </article>

                        <article className="entry entry-grid">
                            <figure className="entry-media">
                                <a href="single.html">
                                    <img src="/assets/images/blog/grid/3cols/post-4.jpg"
                                         alt="image desc"/>
                                </a>
                            </figure>

                            <div className="entry-body">
                                <div className="entry-meta">
                                    <a href="#">Nov 15, 2018</a>
                                    <span className="meta-separator">|</span>
                                    <a href="#">4 Comments</a>
                                </div>

                                <h2 className="entry-title">
                                    <a href="single.html">Fusce pellentesque suscipit.</a>
                                </h2>

                                <div className="entry-cats">
                                    in <a href="#">Travel</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="comments">
                    <h3 className="title">3 Comments</h3>

                    <ul>
                        <li>
                            <div className="comment">
                                <figure className="comment-media">
                                    <a href="#">
                                        <img src="/assets/images/blog/comments/1.jpg" alt="User name"/>
                                    </a>
                                </figure>

                                <div className="comment-body">
                                    <a href="#" className="comment-reply">Reply</a>
                                    <div className="comment-user">
                                        <h4><a href="#">Jimmy Pearson</a></h4>
                                        <span
                                            className="comment-date">November 9, 2018 at 2:19 pm</span>
                                    </div>

                                    <div className="comment-content">
                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                            libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                                            mollis. Ut justo. Suspendisse potenti. </p>
                                    </div>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    <div className="comment">
                                        <figure className="comment-media">
                                            <a href="#">
                                                <img src="/assets/images/blog/comments/2.jpg"
                                                     alt="User name"/>
                                            </a>
                                        </figure>

                                        <div className="comment-body">
                                            <a href="#" className="comment-reply">Reply</a>
                                            <div className="comment-user">
                                                <h4><a href="#">Lena Knight</a></h4>
                                                <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                            </div>

                                            <div className="comment-content">
                                                <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div className="comment">
                                <figure className="comment-media">
                                    <a href="#">
                                        <img src="assets/images/blog/comments/3.jpg" alt="User name"/>
                                    </a>
                                </figure>

                                <div className="comment-body">
                                    <a href="#" className="comment-reply">Reply</a>
                                    <div className="comment-user">
                                        <h4><a href="#">Johnathan Castillo</a></h4>
                                        <span
                                            className="comment-date">November 9, 2018 at 2:19 pm</span>
                                    </div>

                                    <div className="comment-content">
                                        <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                                            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                                            pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="reply">
                    <div className="heading">
                        <h3 className="title">Leave A Reply</h3>
                        <p className="title-desc">Your email address will not be published. Required
                            fields are marked *</p>
                    </div>

                    <form action="#">
                        <label htmlFor="reply-message" className="sr-only">Comment</label>
                        <textarea name="reply-message" id="reply-message"
                                  cols={30}
                            // cols="30"
                                  rows={4}
                            // rows="4"

                                  className="form-control" required placeholder="Comment *"></textarea>

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="reply-name" className="sr-only">Name</label>
                                <input type="text" className="form-control" id="reply-name"
                                       name="reply-name" required placeholder="Name *"/>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="reply-email" className="sr-only">Email</label>
                                <input type="email" className="form-control" id="reply-email"
                                       name="reply-email" required placeholder="Email *"/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-primary-2">
                            <span>POST COMMENT</span>
                            <i className="icon-long-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BlogDetailItem;