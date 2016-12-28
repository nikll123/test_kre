function Dot(center, radius)
{
  this.center = center;
  this.radius = radius;
  this.color = "#000000";
}


Dot.prototype.draw = function(context)
{
  var pd2 = new Path2D(),
      x = this.center.x2d(),
      y = this.center.y2d();
      pd2.moveTo(x, y);
  pd2.arc(x, y, this.radius, 0, 2 * Math.PI);
  context.fillStyle = this.color; 
  context.fill(pd2);
}
