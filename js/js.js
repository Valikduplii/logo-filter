const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}
function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search__checkbox');
searchSelect.addEventListener("click", function (e) {
	searchSelect.classList.toggle('_active');
})
let checkboxCategories = document.querySelectorAll('.checkbox__input');
for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("click", function (e) {
		checkboxCategory.classList.toggle('_active');
		let checkboxActiveCategories = document.querySelectorAll('.checkbox__input._active')
		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_categories');
			let searchQuantity = searchSelect.querySelector('.span_title');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
		} else {
			searchSelect.classList.remove('_categories');
		}
	});
}
$('.input-group').on('click', '.button-plus', function (e) {
	incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function (e) {
	decrementValue(e);
});
const priceSlid = document.querySelector('.price-filter__2');
noUiSlider.create(priceSlid, {
	connect: true,
	start: [0, 200000],
	tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
	range: {
		'min': [0],
		'max': [200000]
	}
});
const priceSlider2 = document.querySelector('.price-filter__slider');
noUiSlider.create(priceSlider2, {
	connect: true,
	start: [0, 200000],
	tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
	range: {
		'min': [0],
		'max': [200000]
	}
});
var priceStart2 = document.getElementById('price-start');
var priceEnd2 = document.getElementById('price-end');
priceStart2.addEventListener('change', setPriceValues);
priceEnd2.addEventListener('change', setPriceValues);
function setPriceValues() {
	let priceStart2Value;
	let priceEnd2Value;
	if (priceStart2.value != '') {
		priceStart2Value = priceStart2.value;
	}
	if (priceEnd2.value != '') {
		priceEnd2Value = priceEnd2.value;
	}
	priceSlid.noUiSlider.set([priceStart2Value, priceEnd2Value]);
}
var priceStart = document.getElementById('price-start2');
var priceEnd = document.getElementById('price-end2');
priceStart.addEventListener('change', setPriceValues2);
priceEnd.addEventListener('change', setPriceValues2);
function setPriceValues2() {
	let priceStartValue;
	let priceEndValue;
	if (priceStart.value != '') {
		priceStartValue = priceStart.value;
	}
	if (priceEnd.value != '') {
		priceEndValue = priceEnd.value;
	}
	priceSlider2.noUiSlider.set([priceStartValue, priceEndValue]);
}
/*
window.onload = function () {
	var menuElem = document.getElementById('dropdown-menu'),
		titleElem = menuElem.querySelector('.title');
	titleElem.onclick = function (event) {
		var target = elem = event.target;
		while (target != this) {
			if (target == menuElem) {
				if (elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
				menuElem.classList.toggle('open')
				return;
			}
			target = target.parentNode;
		}
		menuElem.classList.remove('open');
	}
}




var marginMin = document.getElementById('slider-margin-value-min');
var marginMax = document.getElementById('slider-margin-value-max');

	priceSlid.noUiSlider.on('update', function (values, handle) {
   if (handle) {
      marginMax.innerHTML(value) = values[handle];
   } else {
      marginMin.innerHTML(value) = values[handle];
   }
});


function fun1() {
   var rng=document.getElementById('r1'); //rng - это ползунок
   var i1=document.getElementById('i1'); // i1 - input
   i1.value=rng.value;
}
*/