let person1,p2,p3;

function setup() {
  createCanvas(400, 400);
  person = new Student();
  p2= new Student(),
    p3= new Student();
  person.display();
  p2.display();
  p3.display();
}

function draw() {
  background(220);
}

class Student
{
  constructor()
  {
    this.name = "AlphaBeta";
    this.address = 45;
    this.number = int(random(0,100));
  }
  display()
  {
    print("Name = ", this.name);
    print("address :", this.address);
    print("Roll no : " , this.number);
  }
}
    