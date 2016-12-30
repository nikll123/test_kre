function Point(x, y, z)
{
  this.x = x;
  this.y = y;
  this.z = z;
  this.Radius = 1;
}

function get2d(val, z, sign)
{
  var res2d = val;
  if (z != 0)
  {
    res2d  = res2d + sign * z * Math.cos(Math.PI/4) * 0.6;
  }
  return res2d;
}

Point.prototype.x2d = function()
{
  return get2d(this.x, this.z, -1);
}

Point.prototype.y2d = function()
{
  return get2d(this.y, this.z, 1);
}


Point.prototype.rotate = function (center, ax, ay, az)  // центр вращения и углы в градусах
{
  var a = 0,
      l = 0,
      dx = 0,
      dy = 0,
      dz = 0;
  k = Math.PI / 180;

  dy = this.y - center.y;
  dz = this.z - center.z;
  if ((ax != 0) && ((dy != 0) || (dz != 0)))  // вращение вокруг оси Ox } 
  {
    a = Math.atan2(dy, dz);
    l = Math.sqrt(Math.pow(dy, 2) + Math.pow(dz, 2));
    a += k * ax;
    this.z = center.z + l * Math.cos(a);
    this.y = center.y + l * Math.sin(a);
  }
  
  dx = this.x - center.x;
  dz = this.z - center.z;
  if ((ay != 0) && ((dx != 0) || (dz != 0)))  // вращение вокруг оси Oy }
  {
    a = Math.atan2(dz, dx);
    l = Math.sqrt(Math.pow(dx, 2) + Math.pow(dz, 2));
    a += k * ay;
    this.x = center.x + l * Math.cos(a);
    this.z = center.z + l * Math.sin(a);
  }
  
  dx = this.x - center.x;
  dy = this.y - center.y;
  if ((az != 0) && ((dx != 0) || (dy != 0)))  // вращение вокруг оси Оz } 
  {
    a = Math.atan2(dy, dx);
    l = Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));
    a += k * az;
    this.x = center.x + l * Math.cos(a);
    this.y = center.y + l * Math.sin(a);
  }

}