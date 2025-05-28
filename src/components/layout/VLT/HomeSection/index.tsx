export default function HomeSection() {
    return (
        <div className="vlt-section pp-scrollable" data-anchor="Home" data-brightness="dark"
            style={{ backgroundImage: 'url(/assets/images/root/red-background.webp)' }}>
            <div className="vlt-section__vertical-align">
                <div className="vlt-section__content">
                    {/* Particles */}
                    <div className="vlt-section__particles">
                        <div className="vlt-particle vlt-fade-in-left vlt-custom--1451"
                            style={{ backgroundImage: 'url(/assets/images/root/plus-dark-pattern.webp)', transitionDuration: '1s' }}>
                        </div>
                        <div className="vlt-particle d-none d-xl-block vlt-fade-in-right vlt-custom--1512"
                            style={{ backgroundImage: 'url(/assets/images/root/elipse-home-slide.webp)', transitionDuration: '1.5s', transitionDelay: '300ms' }}>
                        </div>
                        <div className="vlt-particle twlogo-vitrine"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 offset-lg-1">
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '0s', animationDuration: '700ms' }}>
                                    <h5 className="vlt-display-1 has-white-color">Trinity Web</h5>
                                    <div className="vlt-gap-10"></div>
                                    <h1 className="vlt-large-heading has-white-color slogam">
                                        Transformando ideias<br />em negócios
                                    </h1>
                                    <div className="vlt-gap-40"></div>
                                    <div className="row">
                                        <div className="col-auto">
                                            {/* Counter Up Small */}
                                            <div className="vlt-counter-up-small" data-ending-number="05" data-animation-speed="1000" data-delimiter="">
                                                <span className="counter">00</span>
                                                <p className="vlt-display-1">Anos no<br />mercado</p>
                                            </div>
                                            <div className="vlt-gap-20--sm"></div>
                                        </div>
                                        <div className="col-auto">
                                            {/* Counter Up Small */}
                                            <div className="vlt-counter-up-small" data-ending-number="33" data-animation-speed="1000" data-delimiter="">
                                                <span className="counter">0</span>
                                                <p className="vlt-display-1">Clientes<br />satisfeitos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vlt-gap-40"></div>
                                    <a className="vlt-link has-white-color" href="https://conteudo.thetrinityweb.com.br/portfolio/" target="_blank">
                                        Veja nosso portfolio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}