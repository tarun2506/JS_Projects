// const hikeBtn = document.querySelector('.hike-explore');
// const slide = document.querySelector('.hike');
// const hikeTitle = document.querySelector('.hike-title')
// const hikeSpan = document.querySelector('.hike-span')

// window.addEventListener('scroll', changeColor);

// function changeColor(){
//   const HalfWindowHeight = window.innerHeight / 2;

//   const HikePosition = hikebtn.getBoundingClientRect().top;

//   if(HikePosition < HalfWindowHeight){
//     hikebtn.style.color = 'red';
//   }
// }

// let options = {
//   threshold: 0.5
// }

// let observer = new IntersectionObserver(slideAnimation, options);

// function slideAnimation(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       slide.style.transition = 'all 1s ease 0s';
//       slide.style.transform = 'scale(.5)';
//       slide.style.backgroundColor = 'black';
//       hikeTitle.style.transition = 'all 1s ease 0s';
//       hikeTitle.style.transform = 'rotate(360deg)';
//       hikeTitle.style.color = 'linear-gradient(to right, red , yellow)';
//       hikeSpan.style.transition = 'all 1s ease 0s';
//       hikeSpan.style.color = 'red';
//     }
//   });
// }

// observer.observe(slide);
// observer.observe(hikeBtn);
// observer.observe(hikeTitle);
// observer.observe(hikeSpan);





// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//   triggerElement: '.hike-title',
//   triggerHook: 0.5
// }).addIndicators({colorStart: 'white', colorTrigger: 'White'})
// .setClassToggle('.hike-title', 'color')
// .addTo(controller);














