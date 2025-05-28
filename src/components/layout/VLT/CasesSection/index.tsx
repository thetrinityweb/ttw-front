import Image from "next/image";

export default function CasesSection() {
    return (
        <div className="vlt-section pp-scrollable" data-anchor="Cases" data-brightness="light">
            <div className="vlt-section__vertical-align">
                <div className="vlt-section__content">
                    {/* Particles */}
                    <div className="vlt-section__particles">
                        <div className="vlt-particle vlt-custom--2355 vlt-fade-in-left"
                            style={{ backgroundImage: 'url(/assets/images/root/elipse-light.png)', animationDelay: '500ms' }}>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 offset-lg-1">
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '0s', animationDuration: '700ms' }}>
                                    <h4>Cases de Sucesso <span className="has-first-color">que alcançamos.</span></h4>
                                    <div className="vlt-gap-20"></div>
                                    <p>Conheça alguns dos projetos que desenvolvemos e<br />os <strong>resultados alcançados</strong> por nossos clientes.</p>
                                </div>
                                <div className="vlt-gap-50"></div>
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '100ms', animationDuration: '700ms' }}>
                                    {/* Case Item */}
                                    <div className="vlt-award-item">
                                        <div className="vlt-award-item__logo">
                                            <a href="https://conteudo.thetrinityweb.com.br/portfolio">
                                                <Image src="https://picsum.photos/500/500" alt="Resumo do Livro" width={500} height={500} />
                                            </a>
                                        </div>
                                        <div className="vlt-award-item__content">
                                            <h6>Resumo do Livro</h6>
                                            <p>Blog literário com mais de 100 mil visitas mensais.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vlt-gap-30"></div>
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '200ms', animationDuration: '700ms' }}>
                                    {/* Case Item */}
                                    <div className="vlt-award-item">
                                        <div className="vlt-award-item__logo">
                                            <a href="https://conteudo.thetrinityweb.com.br/portfolio">
                                                <Image src="https://picsum.photos/500/500" alt="Pousada LeAnge" width={200} height={100} />
                                            </a>
                                        </div>
                                        <div className="vlt-award-item__content">
                                            <h6>Pousada LeAnge</h6>
                                            <p>Site institucional e estratégia de marketing digital.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vlt-gap-30"></div>
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '300ms', animationDuration: '700ms' }}>
                                    {/* Case Item */}
                                    <div className="vlt-award-item">
                                        <div className="vlt-award-item__logo">
                                            <a href="https://conteudo.thetrinityweb.com.br/portfolio">
                                                <Image src="https://picsum.photos/500/500" alt="Tiken" width={200} height={100} />
                                            </a>
                                        </div>
                                        <div className="vlt-award-item__content">
                                            <h6>Tiken</h6>
                                            <p>E-commerce e gestão de mídias sociais.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vlt-gap-100--md"></div>
                            </div>
                            <div className="col-lg-4 offset-lg-1">
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '400ms', animationDuration: '700ms' }}>
                                    <div className="vlt-slide-photo">
                                        <div className="vlt-slide-photo__inside">
                                            <Image
                                                src="https://picsum.photos/800/962"
                                                alt="Cases de Sucesso Trinity Web" 
                                                width={800}
                                                height={962}
                                            />
                                            {/* Video Button */}
                                            <div className="vlt-video-button center-mode">
                                                <a href="https://vimeo.com/367945766" data-fancybox data-small-btn="true" rel="nofollow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play">
                                                        <polygon points="5 3 19 12 5 21 5 3" />
                                                    </svg>
                                                </a>
                                                <h6>Assista ao Vídeo</h6>
                                            </div>
                                        </div>
                                        <div className="vlt-slide-photo__caption">* Conheça mais sobre nossos cases de sucesso</div>
                                        <div className="vlt-slide-photo__particle vlt-fade-in-left--small negative-z-index"
                                            style={{ right: '-40px', top: '-40px', width: '290px', transitionDelay: '1.2s' }}>
                                            <img src="/assets/images/root/plus-light-pattern.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
