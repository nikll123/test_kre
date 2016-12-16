function Vector(point1, point2)
{
  this.begin = point1;
  this.end = point2;
}

Vector.prototype.draw = function(context)
{
context.beginPath();
context.moveTo(this.begin.x,this.begin.y);
context.lineTo(this.end.x,this.end.y);
context.stroke();

console.log("begin = " + this.begin.x + ',' + this.begin.y + ";  end = " + this.end.x + ", " + this.end.y );

}