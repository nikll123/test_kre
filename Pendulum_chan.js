function Pendulum(point, length, plummetSize)
{
  this.pointFixed = point;
  this.angle = 0;
  this.color = "#000000";
  this.length = length;

  this.pointFree = new Point(point.x, point.y + length, point.z);
  this.cord = new Vector (this.pointFixed, this.pointFree);
  this.cord.color = this.color;
  this.plummet = new Cube (this.pointFree, plummetSize);
  this.plummet.color = this.color;
  
}

Pendulum.prototype.draw = function(context)
{
  this.cord.draw(context);
  this.plummet.draw(context);
  
  //console.log (pointMoveable.x, pointMoveable.y);
};

Pendulum.prototype.draw2 = function(context)
{
  this.cord.draw2(context);
  this.plummet.draw2(context);
  
  //console.log (pointMoveable.x, pointMoveable.y);
};

Pendulum.prototype.setAngle = function(angle)
{
 
  this.angle = angle * Math.PI / 180;

  var x1 = this.pointFixed.x + this.length * Math.sin(this.angle),
      y1 = this.pointFixed.y + this.length * Math.cos(this.angle); 
  this.pointFree.x = x1;
  this.pointFree.y = y1;
  this.plummet.build();
  this.plummet.rotate(this.pointFree, 0, 0, -angle);
    
};

