function Vector(point1, point2)
{
  this.begin = point1;
  this.end = point2;
  this.color = "#000000";
  var dx = this.end.x - this.begin.x,
      dy = this.end.y - this.begin.y,
      dz = this.end.z - this.begin.z;
  xy = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  this.length = Math.sqrt(Math.pow(xy, 2) + Math.pow(dz, 2));
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


Vector.prototype.draw2 = function(context)
{
this.draw(context);
var dx = this.end.x2d() - this.begin.x2d(),
    dy = this.end.y2d() - this.begin.y2d(),
    a =  Math.atan2(dy, dx),
    da = 15 * Math.PI / 180,
    xd21 = this.end.x2d(),
    yd21 = this.end.y2d(); 
    drawWing(context, (a - da), xd21, yd21);
    drawWing(context, (a + da), xd21, yd21);

}


Vector.prototype.rotate = function(center, ax, ay, az)
{
this.begin.rotate(center, ax, ay, az);
this.end.rotate(center, ax, ay, az);
}

drawWing = function (context, a, x0, y0)
{
  var l = 10,
   
    x = (- l * Math.cos(a)) + x0,
    y = (- l * Math.sin(a)) + y0;
  context.beginPath();
  context.strokeStyle = this.color;
  context.moveTo(x0, y0);
  context.lineTo(x, y);
  context.stroke();
}


function coordgrids(context)
{
      var color = "#000000";

      for (i = -200; i < 200; i = i + 50)
      {
        if  (i == 0)
        {
          color = "#aaaaff";
        }
        else 
        {
          color = "#eeeeee";
        }

          vector = new Vector (new Point(i, -200, 0), new Point(i, 200, 0));
          vector.color = color;
          vector.draw(context);
          vector = new Vector (new Point(-200, i, 0), new Point(200, i, 0));
          vector.color = color;
          vector.draw(context);

          vector = new Vector (new Point(i, 0, -200), new Point(i, 0, 200));
          vector.color = color;
          vector.draw(context);
          vector = new Vector (new Point(-200, 0, i), new Point(200, 0, i));
          vector.color = color;
          vector.draw(context);

          vector = new Vector (new Point(0, -200, i), new Point(0, 200, i));
          vector.color = color;
          vector.draw(context);
          vector = new Vector (new Point(0, i, -200), new Point(0, i, 200));
          vector.color = color;
          vector.draw(context);
      }
}
