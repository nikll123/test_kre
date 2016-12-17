function Point(x, y, z)
{
  this.x = x;
  this.y = y;
  this.z = z;
}

  function get2d(val, z, sign)
  {
    var res2d = val;
    if (z != 0)
    {
      res2d  = res2d + sign * z * Math.cos(Math.PI/4) * 0.8;
    }
    return res2d;
  }

Point.prototype.draw = function(context)
{
context.beginPath();
context.moveTo(this.x2d(),this.y2d());
context.lineTo(this.x2d() + 1,this.y2d() + 1);
context.stroke();

//console.log( "x = " + this.x + "; y = " + this.y + "; z = " + this.z);

}

Point.prototype.x2d = function()
{
  return get2d(this.x, this.z, -1);
}

Point.prototype.y2d = function()
{
  return get2d(this.y, this.z, 1);
}

