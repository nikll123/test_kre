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

function rotate(a)
{
  var res2d = val;
  if (z != 0)
  {
    res2d  = res2d + sign * z * Math.cos(Math.PI/4) * 0.6;
  }
  return res2d;
}


Point.prototype.rotate = function (ax, ay, az)  // углы в градусах
{
    var a = 0,
        l = 0;
        k = Math.PI / 180;

  if ((ax != 0) && ((this.y != 0) || (this.z != 0)))  // вращение вокруг оси Ox } 
  {
    a = Math.atan2(this.y, this.z);
    l = Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.z, 2));
    a = a +  k * ax;
    this.z = l * Math.cos(a);
    this.y = l * Math.sin(a);
  }
  
  if ((ay != 0) && ((this.x != 0) || (this.z != 0)))  // вращение вокруг оси Oy }
  {
    a = Math.atan2(this.z, this.x);
    l = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.z, 2));
    a = a +  k * ay;
    this.x = l * Math.cos(a);
    this.z = l * Math.sin(a);
  }
  
  if ((az != 0) && ((this.x != 0) || (this.y != 0)))  // вращение вокруг оси Оz } 
  {
    a = Math.atan2(this.y, this.x);
    l = Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2));
    a = a +  k * az;
    this.x = l * Math.cos(a);
    this.y = l * Math.sin(a);
  }

}