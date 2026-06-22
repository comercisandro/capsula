(function () {
  var roomLinks = [
    { href: '../index.html', label: 'Hall' },
    { href: 'texto.html', label: 'Texto' },
    { href: 'audio.html', label: 'Audio' },
    { href: 'video.html', label: 'Video' },
    { href: 'esquema.html', label: 'Esquema' },
    { href: 'actividad.html', label: 'Actividad' },
    { href: 'musica.html', label: 'Musica' },
    { href: 'imagen.html', label: 'Imagen' },
    { href: 'pregunta-final.html', label: 'Pregunta Final' }
  ];

  var pages = {
    texto: 'texto.html',
    audio: 'audio.html',
    video: 'video.html',
    esquema: 'esquema.html',
    actividad: 'actividad.html',
    musica: 'musica.html',
    imagen: 'imagen.html',
    'pregunta-final': 'pregunta-final.html'
  };

  function createNav() {
    var body = document.body;
    var page = body.getAttribute('data-page');
    if (!page || page === 'hall') {
      return;
    }

    var shell = document.querySelector('.page-shell');
    if (!shell) {
      return;
    }

    var nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Navegacion principal del museo');

    var brand = document.createElement('a');
    brand.className = 'brand';
    brand.href = '../index.html';
    brand.textContent = 'Museo Surrealista';
    nav.appendChild(brand);

    var links = document.createElement('div');
    links.className = 'nav-links';

    roomLinks.forEach(function (entry) {
      var link = document.createElement('a');
      link.href = entry.href;
      link.textContent = entry.label;

      if (pages[page] === entry.href) {
        link.setAttribute('aria-current', 'page');
      }

      links.appendChild(link);
    });

    nav.appendChild(links);
    shell.insertBefore(nav, shell.firstChild);
  }

  function markCurrentCards() {
    var current = location.pathname.split('/').pop();
    if (!current) {
      current = 'index.html';
    }

    var anchors = document.querySelectorAll('a[href]');
    anchors.forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      if (href === current || href === './' + current) {
        anchor.setAttribute('aria-current', 'page');
      }
    });
  }

  createNav();
  markCurrentCards();
})();
