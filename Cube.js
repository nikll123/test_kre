function Cube(point, edge)
{
  this.x = point.x;
  this.y = point.y;
  this.z = point.z;
  this.color = "#000000";
  this.sidelenght = edge;

var edgehalf = this.sidelenght / 2,  
    x1 = this.x - edgehalf,  
    y1 = this.y - edgehalf,  
    z1 = this.z + edgehalf,   
    z2 = this.z - edgehalf;
this.pointA1 = new Point(x1, y1, z1);
this.pointA2 = new Point(x1, y1, z2);

var x1 = this.x + edgehalf,  
    y1 = this.y - edgehalf;  
this.pointB1 = new Point(x1, y1, z1);
this.pointB2 = new Point(x1, y1, z2);

var x1 = this.x + edgehalf,  
    y1 = this.y + edgehalf;  
this.pointC1 = new Point(x1, y1, z1);
this.pointC2 = new Point(x1, y1, z2);

var x1 = this.x - edgehalf,  
    y1 = this.y + edgehalf;  
this.pointD1 = new Point(x1, y1, z1);
this.pointD2 = new Point(x1, y1, z2);
    
}

Cube.prototype.rotate = function(center, ax, ay, az)
{
this.pointA1.rotate(center, ax, ay, az);
this.pointA2.rotate(center, ax, ay, az);
this.pointB1.rotate(center, ax, ay, az);
this.pointB2.rotate(center, ax, ay, az);
this.pointC1.rotate(center, ax, ay, az);
this.pointC2.rotate(center, ax, ay, az);
this.pointD1.rotate(center, ax, ay, az);
this.pointD2.rotate(center, ax, ay, az);
}

Cube.prototype.draw = function(context)
{
  
vector = new Vector (this.pointA1, this.pointB1);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointB1, this.pointC1);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointC1, this.pointD1);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointD1, this.pointA1);
vector.color = this.color;
vector.draw(context);

//----------------------------------------------
vector = new Vector (this.pointA2, this.pointB2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointB2, this.pointC2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointC2, this.pointD2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointD2, this.pointA2);
vector.color = this.color;
vector.draw(context);

//----------------------------------------------
vector = new Vector (this.pointA1, this.pointA2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointB1, this.pointB2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointC1, this.pointC2);
vector.color = this.color;
vector.draw(context);

vector = new Vector (this.pointD1, this.pointD2);
vector.color = this.color;
vector.draw(context);

};

