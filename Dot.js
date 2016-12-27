function Dot(center, radius)
{
  this.Center = center;
  this.Radius = radius;
}


Dot.prototype.draw = function(context)
{
  var pd2 = new Path2D(),
      x = this.Center.x2d(),
      y = this.Center.y2d();
      pd2.moveTo(x, y);
  pd2.arc(x, y, this.Radius, 0, 2 * Math.PI);
  context.fill(pd2);
}
