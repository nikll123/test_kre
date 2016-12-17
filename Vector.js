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
