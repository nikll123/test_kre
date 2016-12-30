function Pendulum(point, length, plummetSize)
{
  this.pointFixed = new Point(point.x, point.y, 0);
  this.pointFree = new Point(0, 0, 0);
//  this.x = point.x;
//  this.y = point.y;
  this.angle = 0;
  this.color = "#000000";
  this.length = length;
  this.plummetSize = plummetSize;
  this.setAngle(0);    
}

Pendulum.prototype.draw = function(context)
{
  vector = new Vector (this.pointFixed, this.pointFree);
  vector.color = this.color;
  vector.draw(context);
  var ax = 0, //(Math.acos((this.pointFree.x - this.pointFixed.x) / this.length)) * 180 / Math.PI, 
      ay = 0, //(Math.atan((this.pointFree.z - this.pointFixed.z) / this.length)) * 180 / Math.PI;
      az = (Math.acos((this.pointFree.x - this.pointFixed.x) / this.length)) * 180 / Math.PI; //- Math.PI / 2; 
      
  centerCube = new Point(this.pointFree.x, this.pointFree.y, this.pointFree.z);
  //centerCube = new Point(0, 0, 0);
  cube = new Cube (centerCube, this.plummetSize);
  cube.rotate(az, 0, 0);
  cube.draw(context);
  
  //console.log (pointMoveable.x, pointMoveable.y);
};


Pendulum.prototype.setAngle = function(angle)
{
 
  this.angle = angle;

  var x1 = this.pointFixed.x + this.length * Math.sin(this.angle),
      y1 = this.pointFixed.y + this.length * Math.cos(this.angle); 
  this.pointFree = new Point(x1, y1, 0);
    
};

