
// var winH = window.innerHeight;
// var position = winH * 0.1;
// var scrollY = window.scrollY;
// var posFromTop = item4.getBoundingClientRect().top;
// var absolutePos = scrollY + posFromTop;

// const step1Page = document.querySelector("#step1Page");
// const step2Page = document.querySelector("#step2Page");
// const result = document.querySelector('#result');

// const select = [];
/* 윈도우의 높이 */
var winH = window.innerHeight; //500

const step1Page = document.querySelector("#step1");
const step2Page = document.querySelector('#step2');
const step2H = step2Page.getBoundingClientRect().top;
const step3Page = document.querySelector('#step3');
const step3H = step3Page.getBoundingClientRect().top;
const step4Page = document.querySelector('#step4');
const step4H = step4Page.getBoundingClientRect().top;
const step5Page = document.querySelector('#step5');
const step5H = step5Page.getBoundingClientRect().top;

const img2_1 = document.querySelector("#step2-1");
const img2_1H = img2_1.getBoundingClientRect().top;
const img2_2 = document.querySelector("#step2-2");
const img2_2H = img2_2.getBoundingClientRect().top;
const img2_3 = document.querySelector("#step2-3");
const img2_3H = img2_3.getBoundingClientRect().top;
const img3_1 = document.querySelector("#step3-1");
const img3_1H = img3_1.getBoundingClientRect().top;
const img3_2 = document.querySelector("#step3-2");
const img3_2H = img3_2.getBoundingClientRect().top;
const img4_1 = document.querySelector("#step4-1");
const img4_1H = img4_1.getBoundingClientRect().top;
const img4_2 = document.querySelector("#step4-2");
const img4_2H = img4_2.getBoundingClientRect().top;
const img5_1 = document.querySelector("#step5-1");
const img5_1H = img5_1.getBoundingClientRect().top;


// document.body.addEventListener('scroll', function(){
//   console.write(scrollY);
//   statusCare.style.width = (scrollY/(document.body.scrollHeight-winH))*100 + "%"; 
//   if(step2H <= winH*0.3){
//     step1Page.style.WebkitAnimation = "fadeOut 1s";
//     step1Page.style.animation = "fadeOut 1s";
//     setTimeout(() => {
//       step2Page.style.WebkitAnimation = "fadeIn 1s";
//       step2Page.style.animation = "fadeIn 1s";
//       setTimeout(() => {
//         step1Page.style.visibility = "hiddne";
//         step2Page.style.visibility = "visible";
//       }, 450);
//     }, 450);
    
//   }
// });
  // const 스크롤이넘어간정도 = viewportHeight - fromViewportToParentHeight;
  // const divHeight = parentDiv.clientHeight;
  // let scrollRate = 스크롤이넘어간정도/divHeight * 100;
  // if(스크롤이넘어간정도/divHeight * 100 <0){
  //   scrollRate = 0;
  // }else if(스크롤이넘어간정도/divHeight * 100 > 100){
  //   scrollRate = 100;
  // }

  //       //스타일 적용하는 부분
  //       const childDiv = document.querySelector('.child_div');
  //       childDiv.style.transform = `scale(${scrollRate/100})`;
