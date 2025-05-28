import Image from "next/image";

export default function BlogSection() {
    return (
        <div className="vlt-section pp-scrollable" data-anchor="Blog" data-brightness="light">
            <div className="vlt-section__vertical-align">
                <div className="vlt-section__content">
                    {/* Particles */}
                    <div className="vlt-section__particles">
                        <div className="vlt-particle vlt-custom--1259 vlt-fade-in-right" style={{ backgroundImage: 'url(/assets/images/root/plus-light-pattern.png)', animationDelay: '750ms' }}></div>
                        <div className="vlt-particle vlt-custom--2355 vlt-fade-in-left" style={{ backgroundImage: 'url(/assets/images/root/elipse-light.png)', animationDelay: '500ms' }}></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '0s', animationDuration: '700ms' }}>
                                    <div className="d-block d-md-flex align-items-center justify-content-between">
                                        <h1>Blog</h1>
                                        <div className="vlt-gap-30--sm"></div><a className="vlt-btn vlt-btn--primary" href="#"><span className="vlt-btn__text">Ver mais posts</span></a>
                                    </div>
                                </div>
                                <div className="vlt-gap-50"></div>
                                <div className="row">
                                    <div className="col-md-4">
                                        {/* Animated Block */}
                                        <div className="vlt-animated-block" style={{ animationDelay: '100ms', animationDuration: '700ms' }}>
                                            {/* Blog Post */}
                                            <article className="vlt-post">
                                                <div className="vlt-post-thumbnail"><Image src="https://picsum.photos/300/200" alt="" width={300} height={200} />
                                                    <a className="vlt-post-thumbnail__link" href="#"></a>
                                                </div>
                                                <div className="vlt-post-content">
                                                    <header className="vlt-post-header">
                                                        <div className="vlt-post-meta"><span>Personal</span><span>01 June, 2020</span>
                                                        </div>
                                                        <h3 className="vlt-post-title"><a href="#">Lights winged seasons fish abundantly evening.</a></h3>
                                                    </header>
                                                    <footer className="vlt-post-footer"><a className="vlt-post__link vlt-link-with-arrow" href="#"><span className="vlt-link-with-arrow__text">Leia mais</span><span className="vlt-link-with-arrow__icon">🡒</span></a></footer>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="vlt-gap-40--sm"></div>
                                    </div>
                                    <div className="col-md-4">
                                        {/* Animated Block */}
                                        <div className="vlt-animated-block" style={{ animationDelay: '200ms', animationDuration: '700ms' }}>
                                            {/* Blog Post */}
                                            <article className="vlt-post">
                                                <div className="vlt-post-thumbnail"><Image src="https://picsum.photos/300/200" alt="" width={300} height={200} />
                                                    <a className="vlt-post-thumbnail__link" href="#"></a>
                                                    <div className="badge"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark">
                                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></div>
                                                </div>
                                                <div className="vlt-post-content">
                                                    <header className="vlt-post-header">
                                                        <div className="vlt-post-meta"><span>Travel</span><span>01 June, 2020</span>
                                                        </div>
                                                        <h3 className="vlt-post-title"><a href="#">Given void great you’re good appear also fifth.</a></h3>
                                                    </header>
                                                    <footer className="vlt-post-footer"><a className="vlt-post__link vlt-link-with-arrow" href="#"><span className="vlt-link-with-arrow__text">Leia mais</span><span className="vlt-link-with-arrow__icon">🡒</span></a></footer>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="vlt-gap-40--sm"></div>
                                    </div>
                                    <div className="col-md-4">
                                        {/* Animated Block */}
                                        <div className="vlt-animated-block" style={{ animationDelay: '300ms', animationDuration: '700ms' }}>
                                            {/* Blog Post */}
                                            <article className="vlt-post">
                                                <div className="vlt-post-thumbnail"><Image src="https://picsum.photos/300/200" alt="" width={300} height={200} />
                                                    <a className="vlt-post-thumbnail__link" href="#"></a>
                                                </div>
                                                <div className="vlt-post-content">
                                                    <header className="vlt-post-header">
                                                        <div className="vlt-post-meta"><span>Discuss</span><span>01 June, 2020</span>
                                                        </div>
                                                        <h3 className="vlt-post-title"><a href="#">Winged moved stars, fruit creature seed night.</a></h3>
                                                    </header>
                                                    <footer className="vlt-post-footer"><a className="vlt-post__link vlt-link-with-arrow" href="#"><span className="vlt-link-with-arrow__text">Leia mais</span><span className="vlt-link-with-arrow__icon">🡒</span></a></footer>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}