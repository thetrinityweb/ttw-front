import Link from "next/link";

export default function ServicesSection() {
  return (
    <div 
      className="vlt-section pp-scrollable" 
      id="servicos-section" 
      data-anchor="Servicos" 
      data-brightness="light"
    >
      <div className="vlt-section__vertical-align">
        <div className="vlt-section__content">
          {/* Particles */}
          <div className="vlt-section__particles">
            <div 
              className="vlt-particle vlt-custom--1259 vlt-fade-in-right"
              style={{ 
                backgroundImage: 'url(/assets/img/root/plus-light-pattern.webp)', 
                animationDelay: '750ms' 
              }}
            />
            <div 
              className="vlt-particle vlt-custom--2355 vlt-fade-in-left"
              style={{ 
                backgroundImage: 'url(/assets/img/root/elipse-light.webp)', 
                animationDelay: '500ms' 
              }}
            />
          </div>
          
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                {/* Animated Block */}
                <div 
                  className="vlt-animated-block"
                  style={{ animationDelay: '100ms', animationDuration: '700ms' }}
                >
                  <p className="title-servicos">O que podemos oferecer?</p>
                </div>
                <div className="vlt-gap-70" />
                
                <div className="row">
                  {/* Web Design */}
                  <div className="col-md-4">
                    <div 
                      className="vlt-animated-block"
                      style={{ animationDelay: '200ms', animationDuration: '700ms' }}
                    >
                      <div className="vlt-services">
                        <p className="vlt-services__title">
                          <Link 
                            target="_blank"
                            href="https://conteudo.thetrinityweb.com.br/blog/conheca-o-que-e-web-design-e-o-que-faz/"
                          >
                            Web Design
                          </Link>
                        </p>
                        <p className="vlt-services__text">
                          Desenvolvimento de sites institucionais, blogs e lojas virtuais. 
                          Sempre utilizando as melhores práticas em <i>User Experience (UX)</i> e <i>User Interface (UI)</i>.
                        </p>
                        <Link 
                          className="vlt-services__link vlt-link-with-arrow"
                          target="_blank"
                          href="https://conteudo.thetrinityweb.com.br/blog/conheca-o-que-e-web-design-e-o-que-faz/"
                        >
                          <span className="vlt-link-with-arrow__text">Veja mais</span>
                          <span className="vlt-link-with-arrow__icon">🡒</span>
                        </Link>
                      </div>
                    </div>
                    <div className="vlt-gap-40" />
                  </div>

                  {/* Otimização */}
                  <div className="col-md-4">
                    <div 
                      className="vlt-animated-block"
                      style={{ animationDelay: '300ms', animationDuration: '700ms' }}
                    >
                      <div className="vlt-services">
                        <p className="vlt-services__title">
                          <Link
                            href="https://conteudo.thetrinityweb.com.br/blog/como-fazer-a-otimizacao-de-seu-site/"
                            target="_blank"
                          >
                            Otimização
                          </Link>
                        </p>
                        <p className="vlt-services__text">
                          Otimizamos o site para ter as melhores notas possíveis para o Google, 
                          utilizando as métricas do <i>Core Vitals</i> e <i>GTMetrix</i>.
                        </p>
                        <Link 
                          className="vlt-services__link vlt-link-with-arrow"
                          href="https://conteudo.thetrinityweb.com.br/blog/como-fazer-a-otimizacao-de-seu-site/"
                          target="_blank"
                        >
                          <span className="vlt-link-with-arrow__text">Veja mais</span>
                          <span className="vlt-link-with-arrow__icon">🡒</span>
                        </Link>
                      </div>
                    </div>
                    <div className="vlt-gap-40" />
                  </div>

                  {/* Manutenção / Segurança */}
                  <div className="col-md-4">
                    <div 
                      className="vlt-animated-block"
                      style={{ animationDelay: '400ms', animationDuration: '700ms' }}
                    >
                      <div className="vlt-services">
                        <p className="vlt-services__title">
                          <Link
                            href="https://conteudo.thetrinityweb.com.br/blog/manutencao-de-seu-site/"
                            target="_blank"
                          >
                            Manutenção / Segurança
                          </Link>
                        </p>
                        <p className="vlt-services__text">
                          Sua aplicação precisa sempre estar segura, recebendo atualizações de 
                          segurança e realizar um backup frequentemente.
                        </p>
                        <Link 
                          className="vlt-services__link vlt-link-with-arrow"
                          href="https://conteudo.thetrinityweb.com.br/blog/manutencao-de-seu-site/"
                          target="_blank"
                        >
                          <span className="vlt-link-with-arrow__text">Veja mais</span>
                          <span className="vlt-link-with-arrow__icon">🡒</span>
                        </Link>
                      </div>
                    </div>
                    <div className="vlt-gap-40--sm" />
                  </div>

                  {/* Branding */}
                  <div className="col-md-4">
                    <div 
                      className="vlt-animated-block"
                      style={{ animationDelay: '500ms', animationDuration: '700ms' }}
                    >
                      <div className="vlt-services">
                        <p className="vlt-services__title">
                          <Link href="https://conteudo.thetrinityweb.com.br/blog/branding-conheca-mais-sobre/">
                            Branding
                          </Link>
                        </p>
                        <p className="vlt-services__text">
                          Criamos sua identidade visual (Logotipo, Slogans, Paleta de Cores, etc.), 
                          para poder ser utilizado em seu site e em suas redes sociais.
                        </p>
                        <Link 
                          className="vlt-services__link vlt-link-with-arrow"
                          href="https://conteudo.thetrinityweb.com.br/blog/branding-conheca-mais-sobre/"
                        >
                          <span className="vlt-link-with-arrow__text">Veja mais</span>
                          <span className="vlt-link-with-arrow__icon">🡒</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="col-md-4">
                    <div 
                      className="vlt-animated-block"
                      style={{ animationDelay: '500ms', animationDuration: '700ms' }}
                    >
                      <div className="vlt-services">
                        <p className="vlt-services__title">
                          <Link 
                            target="_blank"
                            href="https://conteudo.thetrinityweb.com.br/blog/marketing-de-conteudo-e-seus-beneficios/"
                          >
                            Conteúdo
                          </Link>
                        </p>
                        <p className="vlt-services__text">
                          Para um desempenho melhor no Google, conseguindo cliques orgânicos. 
                          Criamos todo conteúdo para seu Blog e suas Redes Sociais. 
                          Sempre utilizando as melhores práticas.
                        </p>
                        <Link 
                          className="vlt-services__link vlt-link-with-arrow" 
                          target="_blank"
                          href="https://conteudo.thetrinityweb.com.br/blog/marketing-de-conteudo-e-seus-beneficios/"
                        >
                          <span className="vlt-link-with-arrow__text">Veja mais</span>
                          <span className="vlt-link-with-arrow__icon">🡒</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="col-md-4">
                    <div 
                      className="vlt-animated-block"
                      style={{ animationDelay: '500ms', animationDuration: '700ms' }}
                    >
                      <div className="vlt-services">
                        <p className="vlt-services__title">
                          <Link href="#">Marketing</Link>
                        </p>
                        <p className="vlt-services__text">
                          Criamos estratégias para aumentar o tráfego em seu site e em suas redes sociais. 
                          Focando no crescimento dos leads, para seu negócio.
                        </p>
                        <Link className="vlt-services__link vlt-link-with-arrow" href="#">
                          <span className="vlt-link-with-arrow__text">Veja mais</span>
                          <span className="vlt-link-with-arrow__icon">🡒</span>
                        </Link>
                      </div>
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