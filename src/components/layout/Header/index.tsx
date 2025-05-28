import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="vlt-header">
      <div className="vlt-navbar vlt-navbar--main vlt-navbar--fixed">
        <div className="vlt-navbar-background"></div>
        <div className="vlt-navbar-inner">
          <div className="vlt-navbar-inner--left">
            {/* Logo */}
            <Link className="vlt-navbar-logo" href="/">
              <Image 
                className="black" 
                src="/assets/img/root/logo-black.webp" 
                alt="Logotipo Trinity Web"
                width={200}
                height={60}
              />
              <Image 
                className="white" 
                src="/assets/img/root/logo-white.webp" 
                alt="Logotipo Trinity Web"
                width={200}
                height={60}
              />
            </Link>
            {/* Contacts */}
            <nav className="vlt-navbar-contacts d-none d-md-block">
              <ul>
                <li>
                  <Link href="https://api.whatsapp.com/send?phone=5511952498126&text=Tudo%20bem?%20Poderia%20falar%20com%20alguem%20respons%C3%A1vel%20pela%20Trinity%20Web?">
                    (11) 95249-8126
                  </Link>
                </li>
                <li className="sep">/</li>
                <li>
                  <Link href="mailto:contato@thetrinityweb.com.br">
                    contato@thetrinityweb.com.br
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="vlt-navbar-inner--right">
            <div className="d-flex align-items-center">
              {/* Menu Burger */}
              <Link 
                className="vlt-menu-burger js-offcanvas-menu-open" 
                aria-label="Menu Mobile"
                href="#"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="square"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 