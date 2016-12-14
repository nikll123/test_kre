function Arrow()
{
  this.x = 0;
  this.y = 0;
  this.color = "#ffff00";
  this.rotation = 0;
}

// И рисуем её на canvas-e
Arrow.prototype.draw = function(context)
{
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.lineWidth = 2;
  context.fillStyle = this.color;
  context.beginPath();
  context.moveTo(-50, -25);
  context.lineTo(0, -25);
  context.lineTo(0, -50);
  context.lineTo(50, 0);
  context.lineTo(0, 50);
  context.lineTo(0, 25);
  context.lineTo(-50, 25);
  context.lineTo(-50, -25);
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
};

Arrow.prototype.drawstep = function(context, step)
{

  if (step == 0)
  {
    context.translate(-this.x, -this.y);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(this.x, this.y);
  }
  else
  {
    switch (step)
    {
      case 1:
        context.lineWidth = 2;
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(-50, -25);
        context.lineTo(0, -25);
        break
      case 2:
        context.lineTo(0, -50);
        break
      case 3:
        context.lineTo(50, 0);
        break
      case 4:
        context.lineTo(0, 50);
        break
      case 5:
        context.lineTo(0, 25);
        break
      case 6:
        context.lineTo(-50, 25);
        break
      case 7:
        context.closePath();
        break
      case 8:
        context.fill();
        break
    }
    context.stroke();
  }
};