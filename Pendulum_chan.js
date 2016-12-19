function Pendulum(point, lenght, weight)
{
  this.pointFixed = new Point(point.x, point.y, 0);
//  this.x = point.x;
//  this.y = point.y;
  this.angle = 0;
  this.color = "#000000";
  this.lenght = lenght;
  this.weight = weight;
    
}

Pendulum.prototype.draw = function(context, phase)
{
 
  this.angle = Math.PI / 5 * Math.sin((2 * Math.PI / 360) * phase);

  var x1 = this.pointFixed.x + this.lenght * Math.sin(this.angle),
      y1 = this.pointFixed.y + this.lenght * Math.cos(this.angle); 
  pointMoveable = new Point(x1, y1, 0);
  vector = new Vector (this.pointFixed, pointMoveable);
  circledraw(context, pointMoveable, this.weight);
  vector.color = this.color;
  vector.draw(context);
};

function circledraw(context, point, radius) 
{
  var circle = new Path2D();
      circle.moveTo(point.x, point.y);
  circle.arc(point.x, point.y, radius, 0, 2 * Math.PI);
  context.fill(circle);
}

