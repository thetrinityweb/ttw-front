import HomeSection from "../HomeSection";
import ServicesSection from "../ServicesSection";
import TestimonialsSection from "../TestimonialsSection";

export default function MainContent() {
  return (
    <main className="vlt-main">
      {/* Fullpage Slider */}
      <div className="vlt-fullpage-slider" data-loop-top="" data-loop-bottom="" data-speed="800">
        {/* Home */}
        <HomeSection />
        
        {/* Serviços */}
        <ServicesSection />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Progress Bar */}
        <ul className="vlt-fullpage-slider-progress-bar">
          <li data-menuanchor="Home"></li>
          <li data-menuanchor="Services"></li>
          <li data-menuanchor="Experience"></li>
          <li data-menuanchor="Skills"></li>
          <li data-menuanchor="Portfolio"></li>
          <li data-menuanchor="Awards"></li>
          <li data-menuanchor="Depoimentos"></li>
          <li data-menuanchor="Blog"></li>
          <li data-menuanchor="Contato"></li>
        </ul>
        
        {/* Numbers */}
        <div className="vlt-fullpage-slider-numbers" aria-checked="true"></div>
      </div>
    </main>
  );
} 