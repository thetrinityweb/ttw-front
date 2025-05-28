export default function TestimonialSection() {
    return (
        <div className="vlt-section pp-scrollable" data-anchor="Depoimentos" data-brightness="dark">
            <div className="vlt-section__vertical-align">
                <div className="vlt-section__content">
                    {/* Ken Burn Effect */}
                    <div className="vlt-section__ken-burn-background">
                        <img src="/assets/images/bg-depoimentos.webp" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '0s', animationDuration: '700ms' }}>
                                    <div className="d-block d-md-flex align-items-center justify-content-between">
                                        <h1 className="has-white-color">Depoimentos</h1>
                                        <div className="vlt-gap-30--sm"></div>
                                        <div className="vlt-testimonial-slider-controls">
                                            <span className="prev">🡐</span>
                                            <span className="pagination"></span>
                                            <span className="next">🡒</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vlt-gap-50"></div>
                                {/* Animated Block */}
                                <div className="vlt-animated-block" style={{ animationDelay: '100ms', animationDuration: '700ms' }}>
                                    {/* Testimonial Slider */}
                                    <div className="vlt-testimonial-slider">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                {/* Testimonial Item */}
                                                <div className="vlt-testimonial-item"
                                                    style={{ background: '#eb000d url(/assets/images/root/cartographer.png) repeat' }}>
                                                    <div className="vlt-testimonial-item__content">
                                                        <p>Como redatora de blog, estou constantemente buscando maneiras de otimizar o desempenho e a experiência do usuário em nossos aplicativos. A implementação da tecnologia SSG (Static Site Generation) foi um divisor de águas para nós. Agora, nossa aplicação é mais rápida, responsiva e eficiente do que nunca.</p>
                                                        <div className="vlt-testimonial-item__meta">
                                                            <p className="nome-dep">Minerva Sofia</p>
                                                            <span>Resumo do Livro</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Testimonial Item */}
                                                <div className="vlt-testimonial-item"
                                                    style={{ background: '#eb000d url(/assets/images/root/cartographer.png) repeat' }}>
                                                    <div className="vlt-testimonial-item__content">
                                                        <p>Trabalho com a Trinity Web praticamente há um ano e nunca havia encontrado um serviço terceirizado para sites com tanta excelência. Na minha empresa, algumas demandas precisam ser feitas instantâneas e a Trinity Web sempre se mostrou presente e nunca demorou mais que 24h para uma alteração. Além disso, começamos um site do zero, que ficou exatamente como queria, e o mais crucial para atração de clientes: um site rápido e bonito. Agradeço pelo serviço e recomendo demais!</p>
                                                        <div className="vlt-testimonial-item__meta">
                                                            <p className="nome-dep">Paola Lacerda</p>
                                                            <span>Pousada LeAnge</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Testimonial Item */}
                                                <div className="vlt-testimonial-item"
                                                    style={{ background: '#eb000d url(/assets/images/root/cartographer.png) repeat' }}>
                                                    <div className="vlt-testimonial-item__content">
                                                        <p>Conheci a Trinity Web através de uma indicação e eles estruturaram e montaram o nosso site. Sempre souberam atender nossas expectativas de maneira rápida e eficiente! Temos uma relação de parceria e amizade! Grandes profissionais!</p>
                                                        <div className="vlt-testimonial-item__meta">
                                                            <p className="nome-dep">Andrei Fachini</p>
                                                            <span>Tiken</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="vlt-gap-70"></div>

                                <div className="customer-logos slider">
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/rdl.webp" alt="Resumo do Livro" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-01.webp" alt="Tiken" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-02.webp" alt="Pousada LeAnge" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-03.webp" alt="Equilibrio das Cartas" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-04.webp" alt="W Trindade Transportes" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-05.webp" alt="Tutto Buono" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-06.webp" alt="IOP Journal" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-07.webp" alt="LDI Engenharia" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-08.webp" alt="Siles & Costa" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-09.webp" alt="Mookita" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-011.webp" alt="Adisa" height="150" width="150" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src="/assets/images/root/cliente-012.webp" alt="Visconde" height="150" width="150" />
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