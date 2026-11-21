import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, Instagram, MapPin, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';

type Product = {
  name: string;
  price: string;
  image: string;
};

const WHATSAPP_BASE = 'https://wa.me/qr/32IIIB3CSWALH1';

const donutProducts: Product[] = [
  { name: 'Chocolate café', price: '$15', image: '/img/Do_5.jpg' },
  { name: 'Chocolate rosa', price: '$15', image: '/img/Do_6.jpg' },
  { name: 'Chocolate blanco', price: '$15', image: '/img/Do_7.jpg' },
  { name: 'Azúcar', price: '$10', image: '/img/Do_8.jpg' },
];

const flanProducts: Product[] = [
  { name: 'Flan entero', price: '$80', image: '/img/Flan_3.jpg' },
  { name: 'Rebanada', price: '$15', image: '/img/Flan_6.jpg' },
  { name: 'Flan pequeño', price: '$20', image: '/img/Flan_7.jpg' },
];

function orderLink(product: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola, quiero pedir: ${product}`)}`;
}


function Header({ page }: { page: 'home' | 'donas' | 'flanes' }) {
  return (
    <header className="site-header">
      <a href="/" className="brand-lockup" aria-label="Volver a inicio">
        <img src="/img/logo_png.png" alt="Donut's Octa" />
        <span>Donut´s Octa</span>
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        <a className={page === 'home' ? 'active' : ''} href="/">Inicio</a>
        <a className={page === 'donas' ? 'active' : ''} href="/donas">Donas</a>
        <a className={page === 'flanes' ? 'active' : ''} href="/flanes">Flanes</a>
      </nav>
      <a className="header-order" href={orderLink('un pedido especial')} target="_blank" rel="noreferrer">
        <ShoppingBag size={17} /> Pedir ahora
      </a>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <Header page="home" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Repostería artesanal</p>
          <h1>Bienvenidos a<br /><em>Donut´s Octa</em></h1>
          <p className="hero-description">Pequeños antojos, grandes momentos. Hecho con cariño para endulzar tu día.</p>
          <a className="button button-dark" href="#productos">Descubrir sabores <ArrowRight size={18} /></a>
        </div>
        <div className="hero-art hero-logo">
          <div className="hero-sticker">fresco<br /><strong>cada día</strong></div>
          <img src="/img/logo_png.png" alt="Logotipo original de Donut´s Octa" />
        </div>
        <div className="hero-bottom-note"><span /> Sabor que se queda contigo</div>
      </section>

      <main>
        <section className="products-intro section-shell" id="productos">
          <div className="section-heading">
            <div><p className="eyebrow coral-text">Nuestros favoritos</p><h2>Un dulce momento<br /><em>empieza aquí</em></h2></div>
            <p className="section-blurb">Elige tu antojo favorito y déjanos preparar algo delicioso para ti.</p>
          </div>
          <div className="feature-grid">
            <a className="feature-card feature-donuts" href="/donas">
              <div className="feature-label"><span>01</span><h3>Donas</h3><ArrowRight size={20} /></div>
              <img src="/img/don_list.png" alt="Donas decoradas" />
              <span className="card-caption">Colores, chocolate y mucho amor</span>
            </a>
            <a className="feature-card feature-flan" href="/flanes">
              <div className="feature-label"><span>02</span><h3>Flan</h3><ArrowRight size={20} /></div>
              <img src="/img/Flan_3.jpg" alt="Flan entero" />
              <span className="card-caption">Suave, cremoso y casero</span>
            </a>
          </div>
        </section>

        <section className="about-section section-shell">
          <div className="about-image-wrap"><div className="about-tag">Hecho con<br /><strong>cariño</strong></div><img src="/img/img_perfil.jpg" alt="Gato con lentes" /></div>
          <div className="about-copy"><p className="eyebrow coral-text">Conoce nuestra historia</p><h2>Sobre<br /><em>nosotros</em></h2><p>Donut´s octa es un emprendimiento de repostería artesanal dedicado a crear momentos dulces e inolvidables. Elaboramos postres frescos todos los días con ingredientes de alta calidad, pasión por el sabor auténtico y un servicio cálido para consentir a nuestros clientes en cada visita.</p><a className="text-link" href="/donas">Ver nuestros productos <ArrowRight size={18} /></a></div>
        </section>

        <section className="catalog-section section-shell">
          <div className="section-heading compact"><div><p className="eyebrow coral-text">Elige tu favorito</p><h2>Catálogo <em>dulce</em></h2></div><p className="section-blurb">Listos para acompañar tus días especiales.</p></div>
          <div className="catalog-grid">
            <CatalogCard title="Donas" detail="Desde $10" href="/donas" image="/img/don_list.png" />
            <CatalogCard title="Flanes" detail="Desde $15" href="/flanes" image="/img/Flan_3.jpg" />
          </div>
        </section>

        <section className="testimonials-section section-shell">
          <div className="section-heading compact">
            <div><p className="eyebrow coral-text">Lo que dicen de nosotros</p><h2>Momentos que<br /><em>se disfrutan</em></h2></div>
            <p className="section-blurb">La mejor parte de este camino es compartir sabores que dejan una sonrisa.</p>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card"><img src="/img/1.png" alt="Testimonio de una clienta sobre las donas" /></article>
            <article className="testimonial-card"><img src="/img/2.png" alt="Testimonio de una clienta sobre el servicio" /></article>
            <article className="testimonial-card"><img src="/img/3.png" alt="Testimonio de una clienta sobre el flan" /></article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CatalogCard({ title, detail, href, image }: { title: string; detail: string; href: string; image: string }) {
  return <article className="catalog-card"><div className="catalog-image"><img src={image} alt={title} /></div><div className="catalog-info"><div><h3>{title}</h3><p>{detail}</p></div><a className="button button-coral" href={href}>Pedido <ArrowRight size={17} /></a></div></article>;
}

function ListingPage({ type }: { type: 'donas' | 'flanes' }) {
  const isDonas = type === 'donas';
  const products = isDonas ? donutProducts : flanProducts;
  return <div className="page-shell"><Header page={type} /><section className={`listing-hero ${isDonas ? 'listing-donuts' : 'listing-flans'}`}><div><a className="back-link" href="/"><ChevronLeft size={17} /> Volver al inicio</a><p className="eyebrow coral-text">Elige tu favorito</p><h1>{isDonas ? <>Donas que alegran<br /><em>el día</em></> : <>Flanes hechos<br /><em>con calma</em></>}</h1><p>{isDonas ? 'Texturas suaves, coberturas irresistibles y ese toque especial de Donut´s Octa.' : 'Recetas caseras con una textura sedosa y caramelo dorado en cada cucharada.'}</p></div><div className="listing-art">{isDonas ? <><img src="/img/don_list.png" alt="Donas decoradas" /><div className="floating-note">el favorito<br /><strong>de todos</strong></div></> : <><img src="/img/Flan_3.jpg" alt="Flan entero" /><div className="floating-note">hecho<br /><strong>en casa</strong></div></>}</div></section><section className="listing-content section-shell"><div className="listing-title"><div><p className="eyebrow coral-text">Nuestros productos</p><h2>{isDonas ? 'La vitrina de donas' : 'La vitrina de flanes'}</h2></div><span>{products.length} opciones para consentirte</span></div><div className={`product-grid ${!isDonas ? 'flan-grid' : ''}`}>{products.map((product) => <article className="product-card" key={product.name}><div className="product-art"><img src={product.image} alt={product.name} /></div><div className="product-details"><div><h3>{product.name}</h3><strong>{product.price}</strong></div><a className="order-button" href={orderLink(product.name)} target="_blank" rel="noreferrer">Pedido <MessageCircle size={17} /></a></div></article>)}</div></section><Footer /></div>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-brand"><img src="/img/logo_png.png" alt="Donut´s Octa" /><div><strong>Donut´s Octa</strong><span>Momentos dulces, siempre.</span></div></div><div className="footer-location"><MapPin size={17} /> Repostería artesanal con amor</div><div className="footer-social"><a href={WHATSAPP_BASE} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a></div></footer>;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => { const onPopState = () => setPath(window.location.pathname); window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []);
  useEffect(() => { const onClick = (event: MouseEvent) => { const target = event.target as HTMLElement; const link = target.closest('a'); if (!link || link.target === '_blank' || !link.href.startsWith(window.location.origin)) return; const next = new URL(link.href).pathname; if (next === path) return; event.preventDefault(); window.history.pushState({}, '', next); setPath(next); window.scrollTo({ top: 0, behavior: 'smooth' }); }; document.addEventListener('click', onClick); return () => document.removeEventListener('click', onClick); }, [path]);
  if (path === '/donas') return <ListingPage type="donas" />;
  if (path === '/flanes') return <ListingPage type="flanes" />;
  return <HomePage />;
}

export default App;
