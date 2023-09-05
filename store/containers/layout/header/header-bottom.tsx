import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

function HeaderBottom() {
    return (
        <div className={`${styles['header-bottom']} ${styles['sticky-header']}`}>
            <div className={styles.container}>
                <div className={styles['header-left']}>
                    <div className={`${styles.dropdown} ${styles['category-dropdown']}`}>
                        <a href="#" className={styles['dropdown-toggle']} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                            Browse Categories
                        </a>

                        <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu']}`}>
                            <nav className={`${styles['side-nav']} ${styles['side-nav']}`}>
                                <ul className={`${styles['menu-vertical']} ${styles['sf-arrows']} ${styles['menu-vertical']}`}>
                                    <li className={`${styles['item-lead']} ${styles['item-lead']}`}><a href="#">Daily offers</a></li>
                                    <li className={`${styles['item-lead']} ${styles['item-lead']}`}><a href="#">Gift Ideas</a></li>
                                    <li><a href="#">Beds</a></li>
                                    <li><a href="#">Lighting</a></li>
                                    <li><a href="#">Sofas & Sleeper sofas</a></li>
                                    <li><a href="#">Storage</a></li>
                                    <li><a href="#">Armchairs & Chaises</a></li>
                                    <li><a href="#">Decoration</a></li>
                                    <li><a href="#">Kitchen Cabinets</a></li>
                                    <li><a href="#">Coffee & Tables</a></li>
                                    <li><a href="#">Outdoor Furniture</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className={styles['header-center']}>
                    <nav className={styles['main-nav']}>
                        <ul className={`menu sf-arrows ${styles['menu']}`}>
                            <li className={`megamenu-container active ${styles['megamenu-container']}`}>
                                <Link href="/"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>Home</a></Link>

                                <div className={`megamenu demo ${styles['megamenu-demo']}`}>
                                    <div className={`${styles['menu-col']} ${styles['menu-col']}`}>
                                        <div className={`menu-title ${styles['menu-title']}`}>Choose your demo</div>

                                        <div className={`megamenu-action text-center ${styles['megamenu-action']}`}>
                                            <Link href="/"><a className={`btn btn-outline-primary-2 view-all-demos ${styles['view-all-demos']}`}><span>View All Demos</span><i className={`icon-long-arrow-right ${styles['icon-long-arrow-right']}`}></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="/category"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>Shop</a></Link>

                                <div className={`${styles.megamenu} ${styles['megamenu-md']} ${styles['megamenu-md']}`}>
                                    <div className={`row no-gutters ${styles['row-no-gutters']}`}>
                                        <div className={`col-md-8 ${styles['col-md-8']}`}>
                                            <div className={`${styles['menu-col']} ${styles['menu-col']}`}>
                                                <div className={`row ${styles['row']}`}>
                                                    <div className={`col-md-6 ${styles['col-md-6']}`}>
                                                        <div className={`menu-title ${styles['menu-title']}`}>Shop with sidebar</div>
                                                        <ul>
                                                            <li><Link href="/category-list"><a>Shop List</a></Link></li>
                                                            <li><Link href="/category-2cols"><a>Shop Grid 2 Columns</a></Link></li>
                                                            <li><Link href="/category"><a>Shop Grid 3 Columns</a></Link></li>
                                                            <li><Link href="/category-4cols"><a>Shop Grid 4 Columns</a></Link></li>
                                                            <li><Link href="/category-market"><a><span>Shop Market<span className={`tip tip-new ${styles['tip-new']}`}>New</span></span></a></Link></li>
                                                        </ul>

                                                        <div className={`menu-title ${styles['menu-title']}`}>Shop no sidebar</div>
                                                        <ul>
                                                            <li><Link href="/category-boxed"><a><span>Shop Boxed No Sidebar<span className={`tip tip-hot ${styles['tip-hot']}`}>Hot</span></span></a></Link></li>
                                                            <li><Link href="/category-fullwidth"><a>Shop Fullwidth No Sidebar</a></Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className={`col-md-6 ${styles['col-md-6']}`}>
                                                        <div className={`menu-title ${styles['menu-title']}`}>Product Category</div>
                                                        <ul>
                                                            <li><Link href="/product-category-boxed"><a>Product Category Boxed</a></Link></li>
                                                            <li><Link href="/product-category-fullwidth"><a><span>Product Category Fullwidth<span className={`tip tip-new ${styles['tip-new']}`}>New</span></span></a></Link></li>
                                                        </ul>
                                                        <div className={`menu-title ${styles['menu-title']}`}>Shop Pages</div>
                                                        <ul>
                                                            <li><Link href="/cart"><a>Cart</a></Link></li>
                                                            <li><Link href="/checkout"><a>Checkout</a></Link></li>
                                                            <li><Link href="/wishlist"><a>Wishlist</a></Link></li>
                                                            <li><Link href="/dashboard"><a>My Account</a></Link></li>
                                                            <li><Link href="#"><a>Lookbook</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`col-md-4 ${styles['col-md-4']}`}>
                                            <div className={`banner banner-overlay ${styles['banner-overlay']}`}>
                                                <Link href="/">
                                                    <a className={`banner banner-menu ${styles['banner-menu']}`}>
                                                        <img src="assets/images/menu/banner-1.jpg" alt="Banner"/>
                                                        <div className={`banner-content banner-content-top ${styles['banner-content-top']}`}>
                                                            <div className={`banner-title text-white ${styles['banner-title']}`}>Last Chance<span><strong>Sale</strong></span></div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="/product"><a className={`${styles['sf-with-ul']}`}>Product</a></Link>

                                <div className={`${styles.megamenu} ${styles['megamenu-sm']}`}>
                                    <div className={`${styles.row} ${styles['no-gutters']}`}>
                                        <div className={`${styles['col-md-6']}`}>
                                            <div className={`${styles['menu-col']}`}>
                                                <div className={`${styles['menu-title']}`}>Product Details</div>
                                                <ul>
                                                    <li><Link href="/product"><a>Default</a></Link></li>
                                                    <li><Link href="/product-centered"><a>Centered</a></Link></li>
                                                    <li><Link href="/product-extended"><a><span>Extended Info<span className={`tip tip-new ${styles['tip-new']}`}>New</span></span></a></Link></li>
                                                    <li><Link href="/product-gallery"><a>Gallery</a></Link></li>
                                                    <li><Link href="/product-sticky"><a>Sticky Info</a></Link></li>
                                                    <li><Link href="/product-sidebar"><a>Boxed With Sidebar</a></Link></li>
                                                    <li><Link href="/product-fullwidth"><a>Full Width</a></Link></li>
                                                    <li><Link href="/product-masonry"><a>Masonry Sticky Info</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={`${styles['col-md-6']}`}>
                                            <div className={`${styles.banner} ${styles['banner-overlay']}`}>
                                                <Link href="/category">
                                                    <a>
                                                        <img src="assets/images/menu/banner-2.jpg" alt="Banner" />
                                                        <div className={`banner-content banner-content-bottom ${styles['banner-content-bottom']}`}>
                                                            <div className={`banner-title text-white ${styles['banner-title']}`}>New Trends<span><strong>spring 2019</strong></span></div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="#"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>Pages</a></Link>
                                <ul>
                                    <li>
                                        <Link href="/about"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>About</a></Link>
                                        <ul>
                                            <li><Link href="/about"><a>About 01</a></Link></li>
                                            <li><Link href="/about-2"><a>About 02</a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/contact"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>Contact</a></Link>
                                        <ul>
                                            <li><Link href="/contact"><a>Contact 01</a></Link></li>
                                            <li><Link href="/contact-2"><a>Contact 02</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/login"><a>Login</a></Link></li>
                                    <li><Link href="/faq"><a>FAQs</a></Link></li>
                                    <li><Link href="/404"><a>Error 404</a></Link></li>
                                    <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/blog"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>Blog</a></Link>
                                <ul>
                                    <li><Link href="/blog"><a>Classic</a></Link></li>
                                    <li><Link href="/blog-listing"><a>Listing</a></Link></li>
                                    <li>
                                        <Link href="#"><a>Grid</a></Link>
                                        <ul>
                                            <li><Link href="/blog-grid-2cols"><a>Grid 2 columns</a></Link></li>
                                            <li><Link href="/blog-grid-3cols"><a>Grid 3 columns</a></Link></li>
                                            <li><Link href="/blog-grid-4cols"><a>Grid 4 columns</a></Link></li>
                                            <li><Link href="/blog-grid-sidebar"><a>Grid sidebar</a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Masonry</a></Link>
                                        <ul>
                                            <li><Link href="/blog-masonry-2cols"><a>Masonry 2 columns</a></Link></li>
                                            <li><Link href="/blog-masonry-3cols"><a>Masonry 3 columns</a></Link></li>
                                            <li><Link href="/blog-masonry-4cols"><a>Masonry 4 columns</a></Link></li>
                                            <li><Link href="/blog-masonry-sidebar"><a>Masonry sidebar</a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Mask</a></Link>
                                        <ul>
                                            <li><Link href="/blog-mask-grid"><a>Blog mask grid</a></Link></li>
                                            <li><Link href="/blog-mask-masonry"><a>Blog mask masonry</a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#"><a>Single Post</a></Link>
                                        <ul>
                                            <li><Link href="/single"><a>Default with sidebar</a></Link></li>
                                            <li><Link href="/single-fullwidth"><a>Fullwidth no sidebar</a></Link></li>
                                            <li><Link href="/single-fullwidth-sidebar"><a>Fullwidth with sidebar</a></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="#"><a className={`sf-with-ul ${styles['sf-with-ul']}`}>Elements</a></Link>
                                <ul>
                                    <li><Link href="/elements-products"><a>Products</a></Link></li>
                                    <li><Link href="/elements-typography"><a>Typography</a></Link></li>
                                    <li><Link href="/elements-titles"><a>Titles</a></Link></li>
                                    <li><Link href="/elements-banners"><a>Banners</a></Link></li>
                                    <li><Link href="/elements-product-category"><a>Product Category</a></Link></li>
                                    <li><Link href="/elements-video-banners"><a>Video Banners</a></Link></li>
                                    <li><Link href="/elements-buttons"><a>Buttons</a></Link></li>
                                    <li><Link href="/elements-accordions"><a>Accordions</a></Link></li>
                                    <li><Link href="/elements-tabs"><a>Tabs</a></Link></li>
                                    <li><Link href="/elements-testimonials"><a>Testimonials</a></Link></li>
                                    <li><Link href="/elements-blog-posts"><a>Blog Posts</a></Link></li>
                                    <li><Link href="/elements-portfolio"><a>Portfolio</a></Link></li>
                                    <li><Link href="/elements-cta"><a>Call to Action</a></Link></li>
                                    <li><Link href="/elements-icon-boxes"><a>Icon Boxes</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <i className="la la-lightbulb-o"></i><p>Clearance<span
                    className="highlight">&nbsp;Up to 30% Off</span></p>
                </div>
            </div>
        </div>

    );
}

export default HeaderBottom;