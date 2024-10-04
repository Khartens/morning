//Города
const dropbtn = document.querySelector('.dropbtn');
let div = document.getElementsByClassName('dropdown-content');

  for(let  i = 0; i < div.length;i++){
    for(let  j = 0; j < div[i].children.length;j++){
      div[i].children[j].addEventListener('click',function(){

        dropbtn.innerHTML = this.innerHTML;

      })
    }
}

//добавление активного класса
window.myFunction = function(event) {
  document.querySelectorAll('ul li.active-drop').forEach(function(item) {
  item.classList.remove('active-drop');
})
  event.target.classList.add("active-drop");
};

document.querySelector('.header__wrapper-dropdown').addEventListener('click', function() {
  let elementOne = document.querySelector('.header__wrapper-dropdown_content');
  const drop = document.querySelector('.header__wrapper-dropdown');
  if (elementOne.classList.contains("drop_active")) {
    elementOne.classList.remove("drop_active");
    drop.classList.remove("drop_main");
  } else {
    elementOne.classList.add("drop_active");
    drop.classList.add("drop_main");
  }
  
  document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(drop);
    if(!click) {
      elementOne.classList.remove("drop_active");
      drop.classList.remove("drop_main");
    }
  })
})

//menu
const header = document.querySelector('.header');
const btnMenu = document.querySelector(".header__wrapper-burger");
const menu = document.querySelector(".header__wrapper-box");
const list = document.querySelectorAll('.header__wrapper-nav_list-item');
const body = document.body;
const paddingOff = window.innerWidth - document.body.offsetWidth + 'px';
let fixBlock = document.querySelectorAll('fix-block');

const toggleMenu = function () {
  menu.classList.toggle("active");
  btnMenu.classList.toggle('active_menu');
  body.classList.toggle("noscroll");
  header.classList.toggle('bg-active');
  list.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });
  profile.classList.remove("open");
}

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});
document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnMenu;
  const menu_is_active = menu.classList.contains("active");

  if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
  }
  
});
// menu account
const accountBtn = document.querySelector(".header__account-wrap");
const profile = document.querySelector(".header__account-profile");
const profileList = document.querySelectorAll('.header__account-profile_nav-item ');
const profileListMenu = document.querySelectorAll('.menu-list_item');
const toggleMenuTwo = function () {
  profile.classList.toggle("open");
  body.classList.toggle("noscroll");
  profileList.forEach((link) => {
    link.addEventListener("click", closeOnClickTwo);
  });
  profileListMenu.forEach((link) => {
    link.addEventListener("click", closeOnClickTwo);
  });
  menu.classList.remove("active");
  btnMenu.classList.remove('active_menu');
  header.classList.remove('bg-active');
}
accountBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenuTwo();
});
document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == profile || profile.contains(target);
  const its_btnMenu = target == accountBtn;
  const menu_is_active = profile.classList.contains("open");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenuTwo();
  }
});


function closeOnClick() {
    menu.classList.remove('active');
    btnMenu.classList.remove('active_menu');
    body.classList.remove("noscroll");
    header.classList.remove('bg-active');
    profile.classList.remove('open');
    body.classList.remove("noscroll");
}
function closeOnClickTwo() {
  profile.classList.remove('open');
  body.classList.remove("noscroll");
}





//accrodion
const accordions = document.querySelectorAll(".accordion");

if(accordions) {
    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
    };
    
    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("open");
        content.style.maxHeight = null;
    };
    
    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__control");
        const content = accordion.querySelector(".accordion__content");
    
        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });
}
//slider
const office = document.querySelector('.office');
if(office) {
  window.addEventListener('DOMContentLoaded', () => {
      const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;
    
        breakpoint = window.matchMedia(breakpoint);
    
        const enableSwiper = function(className, settings) {
          swiper = new Swiper(className, settings);
    
          if (callback) {
            callback(swiper);
          }
        }
    
        const checker = function() {
          if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
          } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
          }
        };
    
        breakpoint.addEventListener('change', checker);
        checker();
      }
    
      resizableSwiper(
        '(max-width: 1380px)',
        '.about_slider',
        {
          spaceBetween: 30,
          slidesPerView: 1,
          navigation: {
            nextEl: '.about-next',
            prevEl: '.about-prev',
          },
          autoHeight: true,
          breakpoints: {
              760: {
                spaceBetween: 32,
                slidesPerView: 2,
                autoHeight: false,
              }
          }
        }
      );
    
      resizableSwiper(
        '(max-width: 760px)',
        '.office_slider',
        {
          slidesPerView: 1,
          autoHeight: true,
          spaceBetween: 1,
          navigation: {
            nextEl: '.office-next',
            prevEl: '.office-prev',
          },
        }
      );
  });
}

const swiper = new Swiper('.catalog__wrapper-reviews_swiper', {
  navigation: {
    nextEl: '.catalog-next',
    prevEl: '.catalog-prev',
  },
});

// header скролл 
window.addEventListener('scroll', function() {
  if (window.scrollY >= 1) {
    header.classList.add('header-scroll'); // Добавить класс, который будет менять стили
  } else {
    header.classList.remove('header-scroll'); // Убрать
  }
});

//Кнопка еще
const truncate = (text, limit) => {
  return text.substr(0, limit) + '...';
}

const toggleText = (e, item) => {
  const text = item.querySelector('.demo');
  let newText = '';
    
  if (!item.dataset.text) {
    item.dataset.text = text.innerHTML;
  }
  
  newText = (item.classList.contains('active'))
    ? item.dataset.text
    : truncate(item.dataset.text, item.offsetWidth / 4.3);
  
  text.innerHTML = newText;
  item.classList.toggle('active'); 
}

document.querySelectorAll('.box').forEach(item => {
  const btn = item.querySelector('.btns');
  toggleText(null, item);
  
  btn.addEventListener('click', e => toggleText(e, item));
});

//Все цены 
const price = document.querySelector('.catalog__wrapper-right_cost-price');
const catalog = document.querySelector('.catalog__wrapper-right_cost-wrap');

price.addEventListener('click', () => {
  catalog.classList.toggle('catalog-active');
  price.classList.toggle('price-active');
})