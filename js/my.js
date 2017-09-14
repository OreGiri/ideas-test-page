(function() {

  if (!Element.prototype.matches) {

    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {

  if (!Element.prototype.closest) {

    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

$(function() {

	$(document).ready(function(){
  	$(".carousel-header").owlCarousel({
  		items: 1,
			loop: true,
			nav: true,
			autoplay: true,
			autoplayTimeout: 10000,
			smartSpeed: 1000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  	});

  	$(".carousel-section").owlCarousel({
  		items: 4,
  		dots: false,
			loop: true,
			nav: false,
			//mouseDrag: false,
			//touchDrag: false,
			margin: 20,
			autoplay: true,
			autoplayTimeout: 10000,
			smartSpeed: 1000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1,
					loop: true,
					mouseDrag: true,
					touchDrag: true,
				},
				600: {
					items: 2,
					loop: true,
					mouseDrag: true,
					touchDrag: true,
				},
				1000: {
					items: 3,
					loop: true,
					mouseDrag: true,
					touchDrag: true,		
				},
				1200: {
					items: 4,
					loop: false,
					mouseDrag: false,
				},
			},
  	});

		$(".info-contacts-form form").submit(function() {
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				var buttonText = th.find("button")[0].innerHTML;
				th.find("button")[0].innerHTML = "Thank You!";
				setTimeout(function() {
					th.find("button")[0].innerHTML = "Send";
					th.trigger("reset");
				}, 3000);
			});
			return false;
		});

		$(".nav-home").click(function() {
			$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
		});

		$(".nav-services").click(function() {
			var sectionTopCord = $(".s-services")[0].getBoundingClientRect().top + pageYOffset;
			$('html, body').stop().animate({scrollTop: sectionTopCord}, 'slow', 'swing');
		});

		$(".nav-about").click(function() {
			var sectionTopCord = $(".s-about")[0].getBoundingClientRect().top + pageYOffset;
			$('html, body').stop().animate({scrollTop: sectionTopCord}, 'slow', 'swing');
		});

		$(".nav-work").click(function() {
			var sectionTopCord = $(".s-work")[0].getBoundingClientRect().top + pageYOffset;
			$('html, body').stop().animate({scrollTop: sectionTopCord}, 'slow', 'swing');
		});

		$(".nav-contacts").click(function() {
			var sectionTopCord = $(".s-contacts")[0].getBoundingClientRect().top + pageYOffset;
			$('html, body').stop().animate({scrollTop: sectionTopCord}, 'slow', 'swing');
		});

		$('.services-info-eqh').matchHeight();


	});


});

var servicesItem = document.querySelectorAll('.s-services .carousel-section-item');
for (var i = 0; i < servicesItem.length; i++) {
	servicesItem[i].onmouseover = function(e) {
		event.currentTarget.querySelector('.fa').classList.add('services-accent-icon');
	}
	servicesItem[i].onmouseout = function(e) {
		event.currentTarget.querySelector('.fa').classList.remove('services-accent-icon');
	}
}

var aboutItem = document.querySelectorAll('.s-about .carousel-section-item');
for (var i = 0; i < aboutItem.length; i++) (function (i) {
	aboutItem[i].addEventListener("mouseover", function(event) {
		if (aboutItem[i].contains(event.relatedTarget)) return;
		event.target.closest('.carousel-section-item').querySelector('.worker-name').classList.add('worker-name-accent');
		event.target.closest('.carousel-section-item').querySelector('.worker-vacancy').classList.add('worker-vacancy-accent');
		event.target.closest('.carousel-section-item').querySelector('.icon').classList.add('icon-accent');
		event.target.closest('.carousel-section-item').querySelector('.fa-twitter').closest('li').style = "background-color: #74C7D5";
		event.target.closest('.carousel-section-item').querySelector('.fa-facebook').closest('li').style = "background-color: #4F689E";
		event.target.closest('.carousel-section-item').querySelector('.fa-google-plus').closest('li').style = "background-color: #ff8973";
		event.target.closest('.carousel-section-item').querySelector('.fa-linkedin').closest('li').style = "background-color: #3E61AF";

		var icon = event.currentTarget.closest('.carousel-section-item').querySelector('.icon-about')
		aboutBgChangeHover(icon);

		function aboutBgChangeHover(elem) {
			var elem = elem;
			elem.style="opacity: 0.3";
			setTimeout(function(){
				elem.style="opacity: 1; background-image: url('img/icons/icon_team_1_hover.png";
			}, 200);
		};

	});

	aboutItem[i].addEventListener("mouseout", function (event) {
		if (aboutItem[i].contains(event.relatedTarget)) return;
		event.target.closest('.carousel-section-item').querySelector('.worker-name').classList.remove('worker-name-accent');
		event.target.closest('.carousel-section-item').querySelector('.worker-vacancy').classList.remove('worker-vacancy-accent');
		event.target.closest('.carousel-section-item').querySelector('.icon').classList.remove('icon-accent');
		event.target.closest('.carousel-section-item').querySelector('.fa-twitter').closest('li').style = "background-color: #91778E";
		event.target.closest('.carousel-section-item').querySelector('.fa-facebook').closest('li').style = "background-color: #91778E";
		event.target.closest('.carousel-section-item').querySelector('.fa-google-plus').closest('li').style = "background-color: #91778E";
		event.target.closest('.carousel-section-item').querySelector('.fa-linkedin').closest('li').style = "background-color: #91778E";

		var icon = event.currentTarget.closest('.carousel-section-item').querySelector('.icon-about')
		aboutBgChange(icon);

		function aboutBgChange(elem) {
			var elem = elem;
			elem.style="opacity: 0.3";
			setTimeout(function(){
				elem.style="opacity: 1; background-image: url('img/icons/icon_team_1.png";
			}, 200);
		};

	});

	aboutItem[i].onmouseover = function (e) {
		if (event.target.closest('li')) {
			var li = event.target.closest('li');
			li.querySelector('.fa').classList.add('social-hover');
		};
	}

	aboutItem[i].onmouseout = function (e) {
		if (event.target.closest('li')) {
			var li = event.target.closest('li');
			li.querySelector('.fa').classList.remove('social-hover');
		};
	}			
}(i));

var worksPortfolioItems = document.querySelectorAll('.work-portfolio-content-item');


filterPortfolioContent(); ////------------ Filter call !!!!! /////////////////////////////////////////////

var parentElem = document.querySelectorAll(".work-carousel")[0];
var childTargetElems = parentElem.querySelectorAll(".work-portfolio-content-item[data-state='inabled']");

function flexEqWidth(parentElem, childTargetElems) {

	if (childTargetElems.length == 0) return;

	for (var i = 0; i < childTargetElems.length; i++) {
		childTargetElems[i].style.flexGrow = "";
		childTargetElems[i].style.width = "";
	}

	var parentElem = parentElem;
	var parentElemWidth = parentElem.offsetWidth;
	var childrenAmount = childTargetElems.length;
	var childWidth = childTargetElems[0].offsetWidth;
	var itemsInRow = Math.floor(parentElemWidth / childWidth);
	var itemsInLastRow = (childTargetElems.length) % itemsInRow;
	

	while (itemsInLastRow != 0) {
		childTargetElems[childrenAmount-1].style.flexGrow = 0;
		childTargetElems[childrenAmount-1].style.width = childWidth + "px";
		itemsInLastRow--;
		childrenAmount--;
	}

} flexEqWidth(parentElem, childTargetElems);

function flexMarginControl(parentElem, childTargetElems) {

	if (childTargetElems.length == 0) return;

	if (getComputedStyle(document.querySelector(".work-portfolio-content div")).flexWrap == "nowrap") {

		for (var i = 0; i < childTargetElems.length; i++) {
		childTargetElems[i].style.marginRight = "";
		};
		return;
	};

	for (var i = 0; i < childTargetElems.length; i++) {
		childTargetElems[i].style.marginRight = "";
	}

	var targetElemPosition = parseInt(parentElem.offsetWidth / childTargetElems[0].offsetWidth);

	for (var j = targetElemPosition - 1; j < childTargetElems.length; j = j + targetElemPosition) {
		childTargetElems[j].style.marginRight = "0px";
	}
} flexMarginControl(parentElem, childTargetElems);

var mql = window.matchMedia('all and (max-width: 768px)');

frame.onresize = function(){

	flexMarginControl(parentElem, childTargetElems);
  flexEqWidth(parentElem, childTargetElems);
  flexMarginControl(parentElem, childTargetElems);

}



function Select(ul) {

	var mql = window.matchMedia('all and (max-width: 768px)');

	if (mql.matches) {
	  ul.addEventListener("click", openUl);
	  ul.removeEventListener("click", selectLi);
	} else {
		ul.removeEventListener("click", openUl);
		ul.addEventListener("click", selectLiNoHide);
	}

	window.onresize = function() {
		var mql = window.matchMedia('all and (max-width: 768px)');

		if (mql.matches) {
	  	ul.addEventListener("click", openUl);
	  	ul.removeEventListener("click", selectLi);
		} else {
			ul.removeEventListener("click", openUl);
			ul.addEventListener("click", selectLiNoHide);
		}
	}

	function openUl(e) {
		showLi();
		ul.removeEventListener("click", openUl);
		ul.addEventListener("click", selectLi);
		document.addEventListener("click", closeUl)
	}

	function closeUl(e) {
		var target = event.target;
		if (!ul.contains(target) || target.tagName != "LI") {
			hideLi();
			ul.removeEventListener("click", selectLi);
			document.removeEventListener("click", closeUl);
			ul.addEventListener("click", openUl);
		}
	}

	function selectLi(e) {
		var target = event.target;
		if (ul.contains(target) && target.tagName == "LI") {
			makeActive(target);
			ul.removeEventListener("click", selectLi);
			ul.addEventListener("click", openUl);
		}
	}

	function selectLiNoHide(e) {
		var target = event.target;
		if (ul.contains(target) && target.tagName == "LI") {
			makeActive(target);
		}
	}

	function showLi() {
		for (var i = 0; i < ul.children.length; i++) {
			if (ul.children[i].getAttribute('data-state') == "hidden") {
				ul.children[i].setAttribute("data-state", "shown");
			};
		};
		ul.insertBefore(ul.querySelectorAll('li[data-state="active"]')[0], ul.children[0]);
	};

	function hideLi() {
		for (var i = 0; i < ul.children.length; i++) {
			if (ul.children[i].getAttribute('data-state') == "shown") {
				ul.children[i].setAttribute("data-state", "hidden");
			};
		};
	};

	function makeActive(elem) {
		for (var i = 0; i < ul.children.length; i++) {
			ul.children[i].setAttribute("data-state", "hidden")
		};
		elem.setAttribute("data-state", "active");
	};

	this.showLi = showLi;
	this.hideLi = hideLi;
	this.makeActive = makeActive;
}


var workSelect = new Select(document.querySelector('.portfolio-category-select'));


function filterPortfolioContent() {

	var currentFilter = document.querySelector(".portfolio-category-select li[data-state='active']").dataset.value;
	var workPortfolioContent = document.getElementsByClassName("work-portfolio-content-item");

	if(currentFilter == "All") {
		for (var i = 0; i < workPortfolioContent.length; i++) {
			workPortfolioContent[i].setAttribute("data-state", "inabled");
		}
	} else {
		for (var i = 0; i < workPortfolioContent.length; i++) {
			if (workPortfolioContent[i].dataset.type == currentFilter) {
				workPortfolioContent[i].setAttribute("data-state", "inabled");
			} else {
				workPortfolioContent[i].setAttribute("data-state", "disabled");
			};
		};
	};
};

var workPortfolioMenuFilters = document.getElementsByClassName("work-portfolio-menu-filters")[0];
workPortfolioMenuFilters.addEventListener("click", applyFilter);

function applyFilter(e) {
	if (event.target.closest('li')) {
		filterPortfolioContent();
		childTargetElems = parentElem.querySelectorAll(".work-portfolio-content-item[data-state='inabled']");
		flexMarginControl(parentElem, childTargetElems);
		flexEqWidth(parentElem, childTargetElems);
		flexMarginControl(parentElem, childTargetElems);
	};
};

var workPortfolioContentItems = document.querySelectorAll(".work-portfolio-content-item");

for (var i = 0; i < workPortfolioContentItems.length; i++) (function(i){
	workPortfolioContentItems[i].onmouseenter = function() {
		workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-img").classList.add("work-portfolio-content-item-img-hovered");
		workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-hover").style.opacity = "1";
		workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-hover span").style.opacity = "1";

		workPortfolioContentItems[i].onmouseleave = function() {
			workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-img").classList.remove("work-portfolio-content-item-img-hovered");
			workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-hover").style.opacity = "";
			workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-hover span").style.opacity = "";
		};
	};

	workPortfolioContentItems[i].onclick = function() {

		var imgSrc = workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-img").dataset.origin;
		var mql1 = window.matchMedia('all and (max-width: 480px)');
		var mql2 = window.matchMedia('all and (max-height: 414px)');
		if (mql1.matches || mql2.matches) {
			imgSrc = workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-img").style.backgroundImage.slice(4,-1);
		}
		
		var imgTitle = workPortfolioContentItems[i].querySelector(".work-portfolio-content-item-title").innerHTML;
		var modalWindow = document.createElement("div");
		modalWindow.classList.add("modalwindow");
		modalWindow.innerHTML = '<div class="modalwindow-content"><div class="imgbox"><img src=' + imgSrc + ' alt="Фото #2" /><div class="modalwindow-close">+</div></div><div class="modalwindow-imgtitle"></div></div>'
		modalWindow.querySelector(".modalwindow-imgtitle").innerHTML = imgTitle;
		modalWindow.querySelector(".modalwindow-close").onclick = function() {document.documentElement.removeChild(modalWindow)};
		document.documentElement.appendChild(modalWindow);
	}

})(i);

function eqWidth(elems) {
	var widthArr = [];
	for (var i = 0; i < elems.length; i++) {
		widthArr.push(elems[i].offsetWidth);
	}
	var maxWidth = Math.max.apply(null, widthArr);
	for (var i = 0; i < elems.length; i++) {
		elems[i].style.width = maxWidth + "px";
	}
}

eqWidth(document.querySelectorAll(".contacts-object"));

function initMap() {
  var home = {lat: 50.00586002, lng: 36.2212345};
  var map = new google.maps.Map(document.getElementById('googlemap'), {
    zoom: 15,
    center: home,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
    clickableIcons: false,
  });
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}


setTimeout(function() {
	var googleLogo = document.querySelector("#googlemap .gm-style").children[1];
	var googleInfo1 = document.querySelector("#googlemap .gm-style").children[3];
	var googleInfo2 = document.querySelector("#googlemap .gm-style").children[5];
	googleLogo.style.display = "none";
	googleInfo1.style.display = "none";
	googleInfo2.style.display = "none";
}, 1000)

var formFields = document.querySelectorAll(".info-contacts-form input, .info-contacts-form textarea");

for (var i = 3; i < formFields.length; i++) (function(i){
	formFields[i].onchange = function() {
		if (formFields[i].value == "") {
			formFields[i].style.backgroundColor = "#68A097";
		} else {
			formFields[i].style.backgroundColor = "#fff";
		}
	}

	formFields[i].onblur = function() {
		if (formFields[i].value != "") {
			formFields[i].style.backgroundColor = "#fff";
		}	else {
			formFields[i].style.backgroundColor = "#68A097";
		}
	}
	formFields[i].onfocus = function() {
		formFields[i].style.backgroundColor = "#fff";	
	}
	
})(i);

document.querySelector("footer .social").onmouseover = function (e) {
	if (event.target.closest('li')) {
		var li = event.target.closest('li');
		li.querySelector('.fa').classList.add('social-hover');
	};
}

document.querySelector("footer .social").onmouseout = function (e) {
	if (event.target.closest('li')) {
		var li = event.target.closest('li');
		li.querySelector('.fa').classList.remove('social-hover');
	};
}