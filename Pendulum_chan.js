function Pendulum(point, length, plummetSize)
{
  this.pointFixed = point;
  this.pointFree = new Point(point.x, point.y + length, point.z);
  this.angle = 0;
  this.color = "#000000";
  this.length = length;
  this.plummet = new Cube (this.pointFree, plummetSize);
}

Pendulum.prototype.draw = function(context)
{
  vector = new Vector (this.pointFixed, this.pointFree);
  vector.color = this.color;
  vector.draw(context);
  this.plummet.draw2(context);
  
  //console.log (pointMoveable.x, pointMoveable.y);
};


Pendulum.prototype.setAngle = function(angle)
{
 
  this.angle = angle * Math.PI / 180;

  var x1 = this.pointFixed.x + this.length * Math.sin(this.angle),
      y1 = this.pointFixed.y + this.length * Math.cos(this.angle); 
  this.pointFree = new Point(x1, y1, this.pointFree.z);
  var ax = 0,  
      ay = 0, 
      az = (Math.acos((this.pointFree.x - this.pointFixed.x) / this.length)) * 180 / Math.PI;  
      
  this.plummet.rotate(this.pointFree, 0, 0, az);
    
};

