function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.drawImage(document.getElementById('sevone'), 200, 180);

  ctx.drawImage(document.getElementById('sevone'), 50, 100, 100, 50, 300, 80, 100, 50);
  
  ctx.drawImage(document.getElementById('venospray'),20,5);

  ctx.drawImage(document.getElementById('venospray'),200,5,50,150);

}