function Vector(point1, point2)
{
  this.begin = point1;
  this.end = point2;
  this.color = "#000000"; 
}

Vector.prototype.draw = function(context)
{
context.beginPath();
context.strokeStyle = this.color;
context.moveTo(this.begin.x2d(),this.begin.y2d());
context.lineTo(this.end.x2d(),this.end.y2d());
context.stroke();

//console.log("begin = " + this.begin.x + ',' + this.begin.y + ";  end = " + this.end.x + ", " + this.end.y );

}