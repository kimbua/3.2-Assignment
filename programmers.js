const programmers = [
    "Dennis Ritchie",
    "Brian Kernighan",
    "Ken Thompson",
    "Linus Torvalds",
    "Bjarne Stroustrup",
    "Tim Berners-Lee",
    "Donald Knuth",
    "Alan Turing",
    "Mark Zuckerberg",
    "Bill Gates",
    "Larry Page",
    "Elon Musk",
    "Jack Dorsey",
    "Satoshi Nakamoto",
    "Ada Lovelace",
    "Grace Hopper",
    "Dan Ambramov",
    "Jordan Walke",
    "Ryan Dahl",
    "David Heinemeier Hansson",
    "Guido van Rossum",
    "Yukihiro Matsumoto",
    "Sergey Brin",
    "Lyndsey Scott",
    "Abhinav Asthana", 
    "Abhijit Kane", 
    "Ankit Sobti",
    "Loi Tran",
    "Charles Lee",
    "Tuan Nguyen",
    "Tan Vo",
  ];
//loop
  function question1() {
    for (let index = 0; index <programmers.length; index++) {
        const firstname = programmers[index].split(" ")[0];
        console.log({firstname})
        
    }
  }
  

  function question2() {
    for (let index = 0; index <programmers.length; index++) {
        const lastname = programmers[index].split(" ")[1];
        console.log({lastname})
        
    }
  }
  
  

  function question3() {
    
    for (let index = 0; index <programmers.length; index++) {
        const firstnameChar = programmers[index].split(" ")[0].length;
        console.log({firstnameChar})
    }
    
  }
  
  function question4() {
    for (let index = 0; index <programmers.length; index++) {
        const lastnameChar = programmers[index].split(" ")[1].length;
        console.log({lastnameChar})
    }
  }
  function question5() {
    for (let index = 0; index <programmers.length; index++) {
        const lastnameChar = programmers[index].length
        console.log({lastnameChar})
    }
  }
 //sort
  function sortQ1() {
    programmers.sort()
    console.log(programmers) 
  }
function sortQ2() {

    programmers.sort((a,b)=>a.split(" ")[1] -b.split(" ")[1]) 

    console.log(programmers) 
}
sortQ2()
