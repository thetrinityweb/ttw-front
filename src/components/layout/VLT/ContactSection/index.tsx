import Image from "next/image";

export default function ContactSection() {
    return (
        <div className="vlt-section pp-scrollable" data-anchor="Contato" data-brightness="dark">
        <div className="vlt-section__vertical-align">
            <div className="vlt-section__content">
                {/* Ken Burn Effect */}
                <div className="vlt-section__ken-burn-background"><Image src="/assets/images/bg-abstract.webp" alt="" width={1920} height={1080} /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-1">
                            {/* Animated Block */}
                            <div className="vlt-animated-block" style={{ animationDelay: '0s', animationDuration: '700ms' }}>
                                <h1 className="has-white-color">Contato</h1>
                                <div className="vlt-gap-20"></div>
                                <p className="has-gray-color">Entre em contato conosco para<br />transformar suas ideias em realidade.</p>
                                <div className="vlt-gap-50"></div>
                                <div className="has-white-color">
                                    <h6 className="vlt-display-1 has-gray-color">Email:</h6>
                                    <div className="vlt-gap-5"></div>
                                    <a href="mailto:contato@thetrinityweb.com.br">contato@thetrinityweb.com.br</a>
                                </div>
                                <div className="vlt-gap-30"></div>
                                <div className="has-white-color">
                                    <h6 className="vlt-display-1 has-gray-color">Telefone:</h6>
                                    <div className="vlt-gap-5"></div>
                                    <a href="tel:+5511952498126">(11) 95249-8126</a>
                                </div>
                                <div className="vlt-gap-40"></div>
                                <a className="vlt-btn vlt-btn--secondary" href="https://goo.gl/maps/your-address-here" target="_blank">
                                    <span className="vlt-btn__text">Como chegar</span>
                                    <span className="vlt-btn__icon vlt-btn__icon--right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="vlt-gap-70--sm"></div>
                        </div>
                        <div className="col-lg-6">
                            {/* Animated Block */}
                            <div className="vlt-animated-block" style={{ animationDelay: '100ms', animationDuration: '700ms' }}>
                                <h5 className="has-white-color">Estamos sempre em busca de grandes parcerias. Vamos conversar e criar <span className="has-first-color">algo incrível juntos!</span></h5>
                                <div className="vlt-gap-40"></div>
                                <form className="vlt-contact-form" noValidate>
                                    <div className="vlt-form-row two-col">
                                        <div className="vlt-form-group">
                                            <label className="has-white-color" htmlFor="name">Seu nome (obrigatório)</label>
                                            <input type="text" id="name" name="name" required placeholder="Seu Nome" />
                                        </div>
                                        <div className="vlt-form-group">
                                            <label className="has-white-color" htmlFor="email">Seu email (obrigatório)</label>
                                            <input type="email" id="email" name="email" required placeholder="Seu Email" />
                                        </div>
                                    </div>
                                    <div className="vlt-form-row two-col">
                                        <div className="vlt-form-group">
                                            <label className="has-white-color" htmlFor="category">Categoria (opcional)</label>
                                            <input type="text" id="category" name="category" placeholder="Categoria" />
                                        </div>
                                        <div className="vlt-form-group">
                                            <label className="has-white-color" htmlFor="budget">Escolha um Orçamento (BRL)</label>
                                            <select id="budget" name="budget">
                                                <option value="2500-5000">R$ 2.500 - R$ 5.000</option>
                                                <option value="5000-50000">R$ 5.000 - R$ 50.000</option>
                                                <option value="50000+">R$ 50.000 +</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="vlt-form-group">
                                        <label className="has-white-color" htmlFor="message">Sua Mensagem</label>
                                        <textarea name="message" id="message" rows={3} placeholder="Mensagem"></textarea>
                                    </div>
                                    <div className="message success">Sua mensagem foi enviada com sucesso...</div>
                                    <div className="message danger">Desculpe, algo deu errado!</div>
                                    {/* Button */}
                                    <button className="vlt-btn vlt-btn--primary">
                                        <span className="vlt-btn__text">Enviar Mensagem</span>
                                        <span className="vlt-btn__icon vlt-btn__icon--right"></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}