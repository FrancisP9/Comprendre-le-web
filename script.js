document.addEventListener('DOMContentLoaded', function() {
  // Forcer le scroll vers le haut au chargement de la page après un léger délai
  setTimeout(function() {
      window.scrollTo(0, 0);
  }, 10); // Délai court pour s'assurer que la page est bien chargée avant de forcer le scroll

  // Initialisation de l'effet Matrix
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize * 0.75); // Réduction pour optimiser
  const drops = Array(columns).fill(1);

  function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Couleur verte pour l'effet Matrix
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
          }

          drops[i]++;
      }

      requestAnimationFrame(drawMatrix);
  }
  drawMatrix();

  // Sélectionner toutes les sections, les items de la timeline et les versions du Web
  const sections = document.querySelectorAll