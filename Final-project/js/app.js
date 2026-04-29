document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const backToTop = document.getElementById('backToTop');
  const collapseElement = document.getElementById('rootinNav');

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 130;
    let currentId = sections[0]?.id || '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      if (scrollPosition >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute('href').replace('#', '');
      if (target === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function toggleBackToTop() {
    if (window.scrollY > 400) {
      backToTop.style.display = 'grid';
    } else {
      backToTop.style.display = 'none';
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseElement);
      if (bsCollapse && window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
        bsCollapse.hide();
      }
    });
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    updateActiveLink();
    toggleBackToTop();
  });

  updateActiveLink();
  toggleBackToTop();

// Carousel

const carousel = new bootstrap.Carousel(
  document.getElementById('reviewsCarousel')
);

const prevIcon = document.getElementById('prevIcon');
const nextIcon = document.getElementById('nextIcon');
const dots = document.querySelectorAll('.carousel-indicator-icon');
  
function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.getElementById('reviewsCarousel').addEventListener('slide.bs.carousel', (event) => {
  updateDots(event.to);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  prevIcon.src = 'img/icon/arrowR_onclick_b_icon.svg';
  carousel.prev();

  setTimeout(() => {
    prevIcon.src = 'img/icon/arrowR_b_icon.svg';
  }, 200);
});
document.getElementById('nextBtn').addEventListener('click', () => {
  nextIcon.src = 'img/icon/arrowL_onclick_b_icon.svg';
  carousel.next();

  setTimeout(() => {
    nextIcon.src = 'img/icon/arrowL_b_icon.svg';
  }, 200);
});


});

