function Point(x, y, z)
{
var minX = -200,
    maxX = 200,
    minY = -200,
    maxY = 200,
    minZ = -200,
    maxZ = 200;

  function checkval (val, min, max) {
    if ((x < min) || (x >  max)) {
      throw new Error("Worng value " + val);
    }
  };
  checkval (x, minX, maxX);
  checkval (y, minY, maxY);
  checkval (z, minZ, maxZ);
  this.x = x;
  this.y = y;
  this.z = z;
}

Point.prototype.draw = function(context)
{
context.beginPath();
context.moveTo(this.x,this.y);
context.lineTo(this.x + 1,this.y + 1);
context.stroke();

//console.log( "x = " + this.x + "; y = " + this.y + "; z = " + this.z);

}