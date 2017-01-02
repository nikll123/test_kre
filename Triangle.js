function Triangle(pointA, pointB, pointC)
{
  this.A = pointA;
  this.B = pointB;
  this.C = pointC;
  this.color = "#000000";

  this.sideA = new Vector(this.A, this.B);
  this.sideB = new Vector(this.B, this.C);
  this.sideC = new Vector(this.C, this.A);

  // Теорема косинусов
  var a = Math.pow(this.sideB.length, 2) + Math.pow(this.sideC.length, 2) - Math.pow(this.sideA.length, 2),
      b = 2 * this.sideB.length * this.sideC.length; 
  this.angleA =  Math.acos(a / b);

  var a = Math.pow(this.sideA.length, 2) + Math.pow(this.sideC.length, 2) - Math.pow(this.sideB.length, 2),
      b = 2 * this.sideA.length * this.sideC.length; 
  this.angleB =  Math.acos(a / b);

  var a = Math.pow(this.sideA.length, 2) + Math.pow(this.sideB.length, 2) - Math.pow(this.sideC.length, 2),
      b = 2 * this.sideA.length * this.sideB.length; 
  this.angleC =  Math.acos(a / b);

 // this.angleC = Math.PI / 2 - this.angleB - this.angleA; 
  
}

Triangle.prototype.draw = function(context)
{
  this.sideA.draw(context);
  this.sideB.draw(context);
  this.sideC.draw(context);
}


Triangle.prototype.draw2 = function(context)
{
this.sideA.draw2(context);
this.sideB.draw2(context);
this.sideC.draw2(context);

}

/*
Vector.prototype.rotate = function(center, ax, ay, az)
{
  this.begin.rotate(center, ax, ay, az);
  this.end.rotate(center, ax, ay, az);
}

*/