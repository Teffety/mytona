 const canvas__two = document.getElementById('canvas__two');
 const ctx = canvas__two.getContext('2d');

 // resize the canvas to fill browser window dynamically
 window.addEventListener('load', resizeCanvas, false);
 window.addEventListener('resize', resizeCanvas, false);


 function resizeCanvas() {
     canvas__two.width = window.innerWidth;
     canvas__two.height = window.innerHeight;
     const bg = document.getElementById('bg');
     ctx.drawImage(bg, 0, 0, canvas__two.width, canvas__two.height); 
    addHeaderTwo()
    addFooterTwo();
 }
 function addFooterTwo(){
    const tutorial = document.getElementById('tutorial');
    ctx.drawImage(tutorial, canvas__two.width / 2.9, 30, canvas__two.width / 3.25, canvas__two.height / 4);
 }
 function addHeaderTwo() {
  const ho_gui = document.getElementById('ho_gui');
  ctx.drawImage(ho_gui, 0, canvas__two.height - canvas__two.height / 5.7, canvas__two.width, canvas__two.height / 5.7);
 }