(function () {
  // function expression closure to contain variables
  let i = 0;
  const pics = [
    '../../img/slide-img.png',
    '../../img/slide-img2.jpeg',
    '../../img/slide-img3.jpg',
  ];
  const el = document.getElementById('img_to_flip'); // el doesn't change
  function toggle() {
    el.src = pics[i]; // set the image
    i = (i + 1) % pics.length; // update the counter
  }
  setInterval(toggle, 2000);
})();
