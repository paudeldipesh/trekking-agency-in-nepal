// function toggleFaq(faqId) {
//     var answer = document.getElementById(faqId);
//     answer.classList.toggle("show");

//     var lastChar = faqId[faqId.length - 1];
//     console.log("arrow" + lastChar);
//     var accordianElement = document.getElementById("arrow" + lastChar);

//     if (accordianElement.innerHTML === '<i class="fa fa-angle-down"></i>') {
//         accordianElement.innerHTML = '<i class="fa fa-angle-up"></i>';
//     } else {
//         accordianElement.innerHTML = '<i class="fa fa-angle-down"></i>';
//     }

//   }

function toggleFaq(faqId) {
  var no = faqId[faqId.length - 1];
  if (faqId[0] == "i") {
    var faqElement = document.querySelector(
      '.faq[data-accordionid="' + no + '"]'
    );
    var answer = faqElement.querySelector(".answer");
  } else {
    var faqElement = document.querySelector('.faq[data-faqid="' + no + '"]');
    var answer = faqElement.querySelector(".answer");
  }
  answer.classList.toggle("show");

  var arrowElement = faqElement.querySelector(".arrow");
  arrowElement.classList.toggle("up");

  if (arrowElement.classList.contains("up")) {
    arrowElement.innerHTML = "<i class='fa fa-angle-up'></i>";
  } else {
    arrowElement.innerHTML = "<i class='fa fa-angle-down'></i>";
  }
}

var Swipes = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});
