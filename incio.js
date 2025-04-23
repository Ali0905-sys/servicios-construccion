document.addEventListener('DOMContentLoaded', function () {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
          destino.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Botón "Ver más" redirige a #servicios
    const btnHero = document.getElementById('btnHero');
    if (btnHero) {
      btnHero.addEventListener('click', function () {
        const servicios = document.querySelector('#servicios');
        if (servicios) {
          servicios.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  
    // Botón "Solicita presupuesto" redirige a WhatsApp
    const btnPresupuesto = document.getElementById('btnPresupuesto');
    if (btnPresupuesto) {
      btnPresupuesto.addEventListener('click', function () {
        const numero = "50687467765";
        const mensaje = encodeURIComponent("Hola, estoy interesado en solicitar un presupuesto.");
        const url = `https://wa.me/${+50672632103}?text=${mensaje}`;
        window.open(url, '_blank');
      });
    }
  
    // Animaciones de tarjetas de servicios
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  });
  