   //1)
 
 class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
      if(rating==undefined){
        this.rating="PG"
      }
      else{
        this.rating=rating;
      }
    }
  
    }
      var  movie1 = new movie("ABC","MARVEL")
      var movie2 = new movie("XYZ","DC","PG15")
      console.log(movie1,movie2)

      OUTPuT: movie {title: 'ABC', studio: 'MARVEL', rating: 'PG'} 
              movie {title: 'XYZ', studio: 'DC', rating: 'PG15'} 
//..................................................................................................................


               class movie {
              constructor(title, studio, rating) {
                this.title = title;
                this.studio = studio;
                this.rating = rating;
                if(rating==undefined){
                  this.rating="PG"
                }
                else{
                  this.rating=rating;
                }
              }
            
              getPG(array) {
                var result = [];
                for(var i=0;i<array.length;i++){
                    if(array[i].rating == "PG"){
                        result.push(array[i]);
                    }
                }
                return result;

              }
            }
              var movie1 = new movie ("ABC", "MARVEL");
              var movie2 = new movie ("XYZ", "DC", "PG15");
              var movie3 = new movie ("CDE","RRR");
              var movie4 = new movie ("FGHI","JKL","PG13");

              console.log(movie1, movie2, movie3, movie4);

              OUTPUT: movie {title: 'ABC', studio: 'MARVEL', rating: 'PG'}
                      movie {title: 'XYZ', studio: 'DC', rating: 'PG15'}
                      movie {title: 'CDE', studio: 'RRR', rating: 'PG'}
                      movie {title: 'FGHI', studio: 'JKL', rating: 'PG13'}
 //...................................................................................



        //d)              class movie {
                        constructor(title, studio, rating) {
                          this.title = title;
                          this.studio = studio;
                          this.rating = rating;
                          if(rating==undefined){
                            this.rating="PG"
                          }
                          else{
                            this.rating=rating;
                          }
                        }
                      
                        }
                          var CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
                          console.log(CasinoRoyale);

                          OUTPUT:
                          movie {title: 'Casino Royal', studio: 'Eon Productions', rating: 'PG13'}
  // .................................................. 

//2)
 class circle {
    constructor(radius,color) {
      this.radius = radius;
      this.color = color;
    }
}
var obj1 = new circle (1.0,"red");
console.log(obj1.radius);
console.log(obj1.color);

OUTPUT: 1
       red 



//get radius of circle..................

        class circle {
        constructor(radius,color) {
        
            this.radius = radius;
            this.color = color;
        }
    get  radiuscircle(){
        return this.radius;
     }
    }

    var obj1 = new circle (1.0,"red");
    console.log(obj1.radiuscircle);

OUTPUT: 1
    
     
        
    
  //get color of circle.......

 class circle {
    constructor(radius,color) {
    
        this.radius = radius;
        this.color = color;
    }
get  colorcircle(){
    return this.color;
 }
}

var obj1 = new circle (1.0,"red");
console.log(obj1.colorcircle);     

OUTPUT: red 



 //get areacircle......

 class circle {
    constructor(radius,color) {
    
        this.radius = radius;
        this.color = color;
    }
    
    get areacircle(){
        return Math.PI*this.radius*this.radius;
    }
    
    
 }
var obj1 = new circle (1.0,"red");

console.log(obj1.areacircle);

OUTPUT:  3.141592653589793 


// get circumference....
class circle {
    constructor(radius,color) {
    
        this.radius = radius;
        this.color = color;
    }
    
    get circumference(){
        return  2*Math.PI*this.radius;
    }
    
    
 }
var obj1 = new circle (1.0,"red");

console.log(obj1.circumference);

OUTPUT: 6.283185307179586 

// 3)

class person{
    constructor(name,age,salary,gender){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.gender = gender;
    }
}
var test = new person("MANOJ","24","30000","MALE");

console.log(test.name);
console.log(test.age);
console.log(test.salary);
console.log(test.gender);

OUTPUT:MANOJ
 24
 30000
 MALE 
 //........................................



 

