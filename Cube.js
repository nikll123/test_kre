function Cube(point, edge)
{
  this.x = point.x;
  this.y = point.y;
  this.z = point.z;
  this.color = "#000000";
  this.rotationx = 0;
  this.rotationy = 0;
  this.rotationz = 0;
  this.sidelenght = edge;
    
}

Cube.prototype.draw = function(context)
{

var edgehalf = this.sidelenght / 2,  
    x1 = this.x - edgehalf,  
    y1 = this.y - edgehalf,  
    z1 = this.z + edgehalf,   
    z2 = this.z - edgehalf;
pointA1 = new Point(x1, y1, z1);
pointA2 = new Point(x1, y1, z2);

var x1 = this.x + edgehalf,  
    y1 = this.y - edgehalf,  
pointB1 = new Point(x1, y1, z1);
pointB2 = new Point(x1, y1, z2);

var x1 = this.x + edgehalf,  
    y1 = this.y + edgehalf,  
pointC1 = new Point(x1, y1, z1);
pointC2 = new Point(x1, y1, z2);

var x1 = this.x - edgehalf,  
    y1 = this.y + edgehalf,  
pointD1 = new Point(x1, y1, z1);
pointD2 = new Point(x1, y1, z2);
  
vector = new Vector (pointA1, pointB1);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointB1, pointC1);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointC1, pointD1);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointD1, pointA1);
vector.color = this.color;
vector.draw(context);



vector = new Vector (pointA2, pointB2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointB2, pointC2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointC2, pointD2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointD2, pointA2);
vector.color = this.color;
vector.draw(context);



vector = new Vector (pointA1, pointA2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointB1, pointB2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointC1, pointC2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (pointD1, pointD2);
vector.color = this.color;
vector.draw(context);

};

