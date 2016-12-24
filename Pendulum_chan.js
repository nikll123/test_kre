function Pendulum(point, length, plummetSize)
{
  this.pointFixed = new Point(point.x, point.y, 0);
//  this.x = point.x;
//  this.y = point.y;
  this.angle = 0;
  this.color = "#000000";
  this.length = length;
  this.plummetSize = plummetSize;
    
}

Pendulum.prototype.draw = function(context, phase)
{
 
  this.angle = Math.PI / 10 * Math.sin((2 * Math.PI / 360) * phase);

  var x1 = this.pointFixed.x + this.length * Math.sin(this.angle),
      y1 = this.pointFixed.y + this.length * Math.cos(this.angle); 
  pointMoveable = new Point(x1, y1, 0);
  vector = new Vector (this.pointFixed, pointMoveable);
  
  //circledraw(context, pointMoveable, this.plummetSize);
  
  vector.color = this.color;
  vector.draw(context);

  pointMoveable.y = pointMoveable.y +  this.plummetSize/2;
  cube = new Cube (pointMoveable, this.plummetSize);
  cube.draw(context);
  
  //console.log (pointMoveable.x, pointMoveable.y);
};

function circledraw(context, point, radius) 
{
  var circle = new Path2D();
      circle.moveTo(point.x, point.y);
  circle.arc(point.x, point.y, radius, 0, 2 * Math.PI);
  context.fill(circle);
}

