let openMobileMenuButton = document.querySelector(".page-header__mobile-menu-button");
let mobileMenu = document.querySelector(".page-header__mobile-menu");

openMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle('page-header__mobile-menu--show');
});

let mobileMenuLinks = document.querySelectorAll('.mobile-nav__item a');

mobileMenuLinks.forEach(mobileMenuLink => {
  mobileMenuLink.addEventListener('click', () => {
    mobileMenu.classList.remove('page-header__mobile-menu--show');
  });
});

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();