
let firstName = "Ekom";
let lastName= "Ikie";
let name = firstName +" " + lastName;
let courses = ['HTML','CSS','Javascript'];
   
let numCourses= courses.length;
function oddNoAndCourses(){
    console.log(name + " " + courses);
for ( let i=1; i<=200; i++)
    if(numCourses %2!==0 &&((i % 2)!==0))//if number of courses are odd
           console.log(i);
}
    
oddNoAndCourses();
    