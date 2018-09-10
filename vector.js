/// Basic vector functions
function Vector(x,y){
  this.x = x;
  this.y = y;
};

// Normalise the vector with your canvas
Vector.prototype.canvas = function(obj){
  return new Vector(this.x -= obj.x,this.y -= obj.y);
};

// subtract vectors
Vector.prototype.subtract = function(obj){
  return new Vector(this.x - obj.x,this.y - obj.y);
};

// add vectors
Vector.prototype.add = function(obj){
  return new Vector(this.x += obj.x,this.y += obj.y);
};

// return magnitude of vector
Vector.prototype.magnitude = function(){
  return Math.sqrt((this.x*this.x) + (this.y*this.y));
};

// display vector
Vector.prototype.show = function(){
  return [this.x,this.y];
};

// dot product between vectors
Vector.prototype.dot = function(obj){
  return this.x*obj.x+this.y*obj.y
};

// angle between vectors
Vector.prototype.angle = function(obj){
  return Math.acos(this.dot(obj)/(temp.magnitude()*obj.magnitude()));
};


/* More functionality coming soon
Vector.prototype.multiply = function(obj){}
Vector.prototype.divide = function(obj){}
Vector.prototype.dot = function(obj){}
Vector.prototype.cross = fucntion(obj){}
*/
