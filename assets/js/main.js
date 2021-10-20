let nickCageImage = "./assets/images/nickCage.png";

let mainEl = $("#nick-cage-container");


let nickCageArray = [];

let animationCount = 0;

let addNickCage = () => {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  let image = $("<img>")
    .attr("src", nickCageImage)
    .css({ top: y + "px", left: x + "px" });

  nickCageArray.push(image);
  mainEl.append(image);
};
let animateNickCage = () => {
  if(animationCount < 10) {

  }
  else if(animationCount < 40) {
    nickCageArray.forEach((img) => {
      let x = Math.round(Math.random() * window.innerWidth);
      let y = Math.round(Math.random() * window.innerHeight);
      img.css({ transition: "1s", top: y + "px", left: x + "px"});
    });
  }
  else if( animationCount < 60) {
    nickCageArray.forEach((img) => {
      let x = Math.round(Math.random() * window.innerWidth);
      let y = Math.round(Math.random() * window.innerHeight);
      let scale = Math.random() * 1.5 + .5;
      img.css({ transition: "1s", top: y + "px", left: x + "px", transform: 'scale(' + scale +')'});
    });
  }
  else if( animationCount < 80) {
    nickCageArray.forEach((img) => {
      let x = Math.round(Math.random() * window.innerWidth);
      let y = Math.round(Math.random() * window.innerHeight);
      let rotateX = Math.round(Math.random() * 180);
      let rotateY = Math.round(Math.random() * 180);
      let rotateZ = Math.round(Math.random() * 180);
      let scale = Math.random() * 1.5 + .5;
      img.css({ transition: "1s", top: y + "px", left: x + "px", transform: 'scale(' + scale +') rotateX(' + rotateX +'deg) rotateY(' + rotateY + 'deg) rotateX(' + rotateZ + 'deg)'});
    });
  }
  animationCount++;
};


setTimeout(() => {
  let interval = 250;
  for(let i = 1; i <= 25; i++) {
    setTimeout(addNickCage, i *interval);
  }
}, 30_000);

setInterval(animateNickCage, 1000);
