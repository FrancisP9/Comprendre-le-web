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
  const sections = document.querySelectorAll('.section');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const webVersions = document.querySelectorAll('.web-version');

  const options = {
      threshold: 0.1 // 10% de la section doit être visible pour déclencher l'animation
  };

  // Créer un observateur d'intersection
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Ajouter la classe visible lorsque l'élément entre dans le viewport
          } else {
              entry.target.classList.remove('visible'); // Retirer la classe visible lorsque l'élément sort du viewport
          }
      });
  }, options);

  // Observer les sections, items de la timeline et versions du Web
  sections.forEach(section => {
      observer.observe(section);
  });
  
  timelineItems.forEach(item => {
      observer.observe(item);
  });

  webVersions.forEach(version => {
      observer.observe(version);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Forcer le scroll vers le haut au chargement de la page après un léger délai
  setTimeout(function() {
      window.scrollTo(0, 0);
  }, 10); // Délai court pour s'assurer que la page est bien chargée avant de forcer le scroll

  // Initialisation de l'effet Matrix
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  
  // Fonction pour redimensionner le canvas sur les appareils mobiles
  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }

  // Appel initial de la fonction et écouteur pour le redimensionnement
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let fontSize = 14;
  const drops = [];

  // Ajuster la taille des colonnes et des polices sur mobile
  function setupMatrix() {
      if (window.innerWidth <= 600) {
          fontSize = 10;  // Réduire la taille de la police sur mobile
      } else {
          fontSize = 14;
      }

      const columns = Math.floor(canvas.width / fontSize * 0.75);
      drops.length = 0;  // Réinitialiser les gouttes
      for (let i = 0; i < columns; i++) {
          drops[i] = 1;
      }
  }

  setupMatrix();
  window.addEventListener('resize', setupMatrix);

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
  const sections = document.querySelectorAll('.section');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const webVersions = document.querySelectorAll('.web-version');

  const options = {
      threshold: 0.3 // 30% de la section doit être visible pour déclencher l'animation
  };

  // Créer un observateur d'intersection
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Ajouter la classe visible lorsque l'élément entre dans le viewport
          } else {
              entry.target.classList.remove('visible'); // Retirer la classe visible lorsque l'élément sort du viewport
          }
      });
  }, options);

  // Observer les sections, items de la timeline et versions du Web
  sections.forEach(section => {
      observer.observe(section);
  });

  timelineItems.forEach(item => {
      observer.observe(item);
  });

  webVersions.forEach(version => {
      observer.observe(version);
  });
});
