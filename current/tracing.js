
const svgLeft = document.querySelector("#left-sil-line");
const svgRight = document.querySelector("#right-sil-line");
const lengthLeft = svgLeft.getTotalLength();
const lengthRight = svgRight.getTotalLength();

// start position of the drawing - normal display pre-animation
svgLeft.style.strokeDasharray = lengthLeft;
svgRight.style.strokeDasharray = lengthRight;
// hides the svg before the scrolling starts
svgLeft.style.strokeDashoffset = lengthLeft;
svgRight.style.strokeDashoffset = lengthRight;

// offset the svg dash by the same amount as the percentage scrolled
window.addEventListener("scroll", function () {

  const scrollT = document.documentElement.scrollTop
  const scrollH = document.documentElement.scrollHeight
  const pixels =  window.pageYOffset-3000;
  const bodyT= document.body.scrollTop
  const scrollpercentLeft = 2000 / (scrollH-scrollT);
  const scrollpercentRight = 2050 / (scrollH-scrollT);
//   console.log("bodyT",bodyT)
// console.log("scrollTop",scrollT)
// console.log("scrollHeight",scrollH)
// console.log("pct",scrollpercent)
  const drawLeft = lengthLeft * scrollpercentLeft;
  const drawRight = lengthRight * scrollpercentRight;
// console.log("draw",drawLeft)
  // Reverse the drawing (when scrolling upwards)
  svgLeft.style.strokeDashoffset = lengthLeft - drawLeft;
 svgRight.style.strokeDashoffset = lengthRight - drawRight;
});