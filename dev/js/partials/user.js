'use strict';

window.onload = function () {
	let menuTrigger = document.querySelector('.header__menu'),
		pageBody = document.querySelector('body');
	
	menuTrigger.addEventListener('click', function () {
		pageBody.classList.toggle('open-nav');
	});
	
	let cityTrigger = document.querySelector('.main-nav .city-select__top'),
		citySelect = cityTrigger.parentNode;
	cityTrigger.addEventListener('click', function () {
		citySelect.classList.toggle('city-select_open');
	});
	
	let cityTriggerHeader = document.querySelector('.header .city-select__top'),
		citySelectHeader = cityTriggerHeader.parentNode;
	cityTriggerHeader.addEventListener('click', function () {
		citySelectHeader.classList.toggle('city-select_open');
	});
	document.documentElement.addEventListener('click', function(e) {
		if (e.target !== cityTriggerHeader && !cityTriggerHeader.contains(e.target)) {
			citySelectHeader.classList.remove('city-select_open');
		}
	});
	
	let serviceSections = document.querySelectorAll('.side-services__section');
	for(let i = 0; i < serviceSections.length; i++) {
		let serviceTriggers = serviceSections[i].querySelectorAll('.side-services__top');
		for (let serviceTrigger of serviceTriggers) {
			serviceTrigger.addEventListener('click', function () {
				this.parentNode.classList.toggle('side-services_open');
			});
		}
	}
	
	let serviceNav = document.querySelectorAll('.services-nav__section');
	for(let i = 0; i < serviceNav.length; i++) {
		let serviceNavTriggers = serviceNav[i].querySelectorAll('.services-nav__top');
		for (let serviceNavTrigger of serviceNavTriggers) {
			serviceNavTrigger.addEventListener('click', function () {
				this.parentNode.classList.toggle('services-nav_open');
			});
		}
		document.documentElement.addEventListener('click', function(e) {
			if (e.target !== serviceNav[i] && !serviceNav[i].contains(e.target)) {
				serviceNav[i].classList.remove('services-nav_open');
			}
		});
	}

	// advantageSwiper
	let advantageSwiper = undefined;
	function initSwiper() {
		let screenWidth = window.innerWidth;
		if(screenWidth >= 768 && advantageSwiper === undefined) {
			advantageSwiper = new Swiper('.swiper-advantage', {
				grabCursor: true,
				loop: true,
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 32,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 32,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 32,
					}
				},
				navigation: {
					nextEl: '.swiper-advantage__button_next',
					prevEl: '.swiper-advantage__button_prev',
				}
			});
		} else if (screenWidth <= 767 && advantageSwiper !== undefined) {
			advantageSwiper.destroy();
			advantageSwiper = undefined;
			let advantageSwiperSlides = document.querySelectorAll('.swiper-advantage__slide');
			for(let i = 0; i < advantageSwiperSlides.length; i++) {
				advantageSwiperSlides[i].removeAttribute('style');
			}
			document.querySelector('.swiper-advantage__wrapper').removeAttribute('style');
		}
	}
	initSwiper();
	window.addEventListener('resize', function () {
		initSwiper();
	});

	// instrumentsSwiper
	let instrumentsSwiper = new Swiper('.swiper-instruments', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.slider-instruments__pagination'
		},
		breakpoints: {
			768: {
				centeredSlides: false,
				slidesPerView: 2,
				spaceBetween: 32,
			},
			992: {
				centeredSlides: false,
				slidesPerView: 3,
				spaceBetween: 32,
			},
			1280: {
				centeredSlides: false,
				pagination: false,
				slidesPerView: 4,
				spaceBetween: 32,
			}
		},
		navigation: {
			nextEl: '.swiper-instruments__button_next',
			prevEl: '.swiper-instruments__button_prev',
		}
	});
	
	// mastersSwiper
	let mastersSwiper = new Swiper('.swiper-masters', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.slider-masters__pagination'
		},
		breakpoints: {
			768: {
				centeredSlides: false,
				slidesPerView: 2,
				spaceBetween: 32,
			},
			992: {
				centeredSlides: false,
				slidesPerView: 3,
				spaceBetween: 32,
			},
			1280: {
				centeredSlides: false,
				pagination: false,
				slidesPerView: 3,
				spaceBetween: 32,
			}
		},
		navigation: {
			nextEl: '.swiper-masters__button_next',
			prevEl: '.swiper-masters__button_prev',
		}
	});
	
	// feedbackSwiper
	let feedbackSwiper = new Swiper('.swiper-feedback', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.slider-feedback__pagination'
		},
		breakpoints: {
			768: {
				centeredSlides: false,
				slidesPerView: 2,
				spaceBetween: 32,
			},
			1280: {
				centeredSlides: false,
				pagination: false,
				slidesPerView: 2,
				spaceBetween: 32,
			}
		},
		navigation: {
			nextEl: '.swiper-feedback__button_next',
			prevEl: '.swiper-feedback__button_prev',
		}
	});
	
	// faq
	let faqHeads = document.querySelectorAll('.faq__collapse-header');
	for(let i = 0; i < faqHeads.length; i++) {
		let faqItem = faqHeads[i].parentNode;
		faqHeads[i].addEventListener('click', function () {
			faqItem.classList.toggle('faq__collapse_open');
		});
	}

	// phone mask
	let phoneField = document.getElementById('heroPhone');
	let modalPhone = document.getElementById('modalPhone');
	let maskOptions = {
		mask: '+{7} (000) 000-00-00'
	};
	if (phoneField) {
		let phoneMask = IMask(phoneField, maskOptions);
	}
	if (modalPhone) {
		let modalMask = IMask(modalPhone, maskOptions);
	}
	// date mask
	let dateField = document.getElementById('dateField');
	if (dateField) {
		let dateMask = IMask(dateField,	{
				mask: Date,
				lazy: true
			}
		);
	}
	
	
	// modals
	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
	});
	
	// form steps
	let currentTab = 0; // Current tab is set to be the first tab (0)
	showTab(currentTab); // Display the current tab
	
	function showTab(n) {
		let x = document.getElementsByClassName('modal__form-page');
		x[n].style.display = 'block';
	}
	
	function nextPrev(n) {
		let x = document.getElementsByClassName('modal__form-page');
		if (n === 1 && !validateForm()) return false;
		x[currentTab].style.display = 'none';
		currentTab = currentTab + n;
		if (currentTab >= x.length) {
			document.getElementById('orderForm').submit();
			return false;
		}
		showTab(currentTab);
	}
	
	function validateForm() {
		let x, y, i, valid = true;
		x = document.getElementsByClassName('modal__form-page_1');
		y = x[currentTab].querySelectorAll('input, textarea');
		console.log(y)
		for (i = 0; i < y.length; i++) {
			if (y[i].value === '') {
				y[i].className += ' invalid';
				valid = false;
			}
		}
		return valid;
	}
	
	let nextStep = document.querySelector('.modal__next');
	nextStep.addEventListener('click', function () {
		nextPrev(1)
	})
	
	// modal stars
	let stars = new StarRating('.star-rating', {
		tooltip: false,
		maxStars: 5,
	});
	
	// article slider
	let articleSwiper = new Swiper('.swiper-article', {
		slidesPerView: 1,
		grabCursor: true,
		loop: true,
		pagination: {
			el: '.swiper-article__pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-article__button_next',
			prevEl: '.swiper-article__button_prev',
		}
	});
}
