import BlogSection from '@/src/components/layout/VLT/BlogSection';
import CasesSection from '@/src/components/layout/VLT/CasesSection';
import ContactSection from '@/src/components/layout/VLT/ContactSection';
import FixedSocialsComponents from '@/src/components/layout/VLT/FixedSocialsComponents';
import HomeSection from '@/src/components/layout/VLT/HomeSection';
import ServicesSection from '@/src/components/layout/VLT/ServicesSection';
import TestimonialSection from '@/src/components/layout/VLT/TestimonialSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrinityWeb - Home',
  description: 'TrinityWeb',
};

export default async function Home() {
  return (
    <>
      {/* Header */}
      <header className="vlt-header">
        <div className="vlt-navbar vlt-navbar--main vlt-navbar--fixed">
          <div className="vlt-navbar-background"></div>
          <div className="vlt-navbar-inner">
            <div className="vlt-navbar-inner--left">
              {/* Logo */}
              <a className="vlt-navbar-logo" href="https://thetrinityweb.com.br/">
                <img className="black" src="/assets/images/root/logo-black.webp" alt="Logotipo Trinity Web" />
                <img className="white" src="/assets/images/root/logo-white.webp" alt="Logotipo Trinity Web" />
              </a>
              {/* Contacts */}
              <nav className="vlt-navbar-contacts d-none d-md-block">
                <ul>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5511952498126&text=Tudo%20bem?%20Poderia%20falar%20com%20alguem%20respons%C3%A1vel%20pela%20Trinity%20Web?">
                      (11) 95249-8126
                    </a>
                  </li>
                  <li className="sep">/</li>
                  <li><a href="mailto:contato@thetrinityweb.com.br">contato@thetrinityweb.com.br</a></li>
                </ul>
              </nav>
            </div>
            <div className="vlt-navbar-inner--right">
              <div className="d-flex align-items-center">
                {/* Menu Burger */}
                <a className="vlt-menu-burger js-offcanvas-menu-open" aria-label="Menu Mobile" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu */}
      <div className="vlt-offcanvas-menu">
        <div className="vlt-offcanvas-menu__header">
          {/* Locales */}
          <nav className="vlt-offcanvas-menu__locales">Menu</nav>
          {/* Menu Burger */}
          <a className="vlt-menu-burger vlt-menu-burger--opened js-offcanvas-menu-close" aria-label="Menu Mobile" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </a>
        </div>
        <nav className="vlt-offcanvas-menu__navigation">
          {/* Navigation */}
          <ul className="sf-menu">
            <li data-menuanchor="Home"><a href="#Home">Home</a></li>
            <li data-menuanchor="Servicos"><a href="#Servicos">Serviços</a></li>
            <li data-menuanchor="Portfolio">
              <a href="https://conteudo.thetrinityweb.com.br/portfolio">Portfolio</a>
            </li>
            <li data-menuanchor="Depoimentos"><a href="#Depoimentos">Depoimentos</a></li>
            <li data-menuanchor="Blog">
              <a target="_blank" href="https://conteudo.thetrinityweb.com.br/">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="vlt-offcanvas-menu__footer">
          {/* Socials */}
          <div className="vlt-offcanvas-menu__socials d-flex align-items-center">
            <a href="https://www.facebook.com/TheTrinityWeb/" aria-label="Facebook" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" style={{ fill: '#fff' }}>
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 30 39 L 30 29 L 33.625 29 C 34.129 29 34.555187 28.623047 34.617188 28.123047 L 34.992188 25.123047 C 35.028188 24.839047 34.938047 24.553891 34.748047 24.337891 C 34.559047 24.122891 34.287 24 34 24 L 30 24 L 30 20.5 C 30 19.397 30.897 18.5 32 18.5 L 34 18.5 C 34.552 18.5 35 18.053 35 17.5 L 35 14.125 C 35 13.607 34.604844 13.174906 34.089844 13.128906 C 34.030844 13.123906 32.619984 13 30.833984 13 C 26.426984 13 24 15.616187 24 20.367188 L 24 24 L 20 24 C 19.448 24 19 24.447 19 25 L 19 28 C 19 28.553 19.448 29 20 29 L 24 29 L 24 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/thetrinityweb/" aria-label="Instagram" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" style={{ fill: '#fff' }}>
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511952498126&text=Tudo%20bem?%20Poderia%20falar%20com%20alguem%20respons%C3%A1vel%20pela%20Trinity%20Web?" aria-label="WhatsApp" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" style={{ fill: '#fff' }}>
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
              </svg>
            </a>
          </div>
          {/* Copyright */}
          <div className="vlt-offcanvas-menu__copyright">
            <p>&copy; 2024.<br />Todos direitos reservados.</p>
          </div>
        </div>
      </div>

      {/* Site Overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Fixed Socials */}
      <FixedSocialsComponents />

      {/* Main */}
      <main className="vlt-main">
        {/* Fullpage Slider */}
        <div className="vlt-fullpage-slider" data-loop-top="" data-loop-bottom="" data-speed="800">

          {/* Home Section */}
          <HomeSection />

          {/* Serviços Section */}
          <ServicesSection />

          {/* Cases Section */}
          <CasesSection />

          {/* Depoimentos Section */}
          <TestimonialSection />

          {/* Blog Section */}
          <BlogSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Progress Bar */}
          <ul className="vlt-fullpage-slider-progress-bar">
            <li data-menuanchor="Home"></li>
            <li data-menuanchor="Servicos"></li>
            <li data-menuanchor="Cases"></li>
            <li data-menuanchor="Depoimentos"></li>
            <li data-menuanchor="Blog"></li>
            <li data-menuanchor="Contact"></li>
          </ul>

          {/* Numbers */}
          <div className="vlt-fullpage-slider-numbers" aria-checked="true"></div>
        </div>

        {/* Footer */}
        <footer className="vlt-footer vlt-footer--fixed">
          {/* Copyright */}
          <div className="vlt-footer-copyright">
            <p>&copy;{new Date().getFullYear()}<br />Todos direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}