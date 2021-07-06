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
  function loopQ1() {
    for (let index = 0; index <programmers.length; index++) {
        const firstname = programmers[index].split(" ")[0];
        console.log({firstname})
        
    }
  }
  

  function loopQ2() {
    for (let index = 0; index <programmers.length; index++) {
        const lastname = programmers[index].split(" ")[programmers[index].split(" ").length-1];
        console.log({lastname})
        
    }
  }
  
  

  function loopQ3() {
    
    for (let index = 0; index <programmers.length; index++) {
        const firstnameChar = programmers[index].split(" ")[0].length;
        console.log({firstnameChar})
    }
    
  }
  
  function loopQ4() {
    for (let index = 0; index <programmers.length; index++) {
        const lastnameChar = programmers[index].split(" ")[1].length;
        console.log({lastnameChar})
    }
  }
  function loopQ5() {
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
    programmers.sort((a,b)=>a.split(" ")[a.split(" ").length-1].split("")[0] > b.split(" ")[b.split(" ").length-1].split("")[0] ? 1 : -1)

    console.log(programmers[0].split(" ")[programmers[0].split(" ").length-1].split("")[0])
    console.log({programmers}) 
}

function sortQ3() {
    programmers.sort((a,b)=>a.split(" ")[0].length -  b.split(" ")[0].length)
    console.log({programmers}) 
}

function sortQ4() {
    programmers.sort((a,b)=>b.split(" ")[0].length -  a.split(" ")[0].length)
    console.log({programmers}) 
}

// filter 
function filterQ1() {
    const x = programmers.filter( el=>el.split(" ")[0].split("")[0] === "L")
    console.log({x})
}
function filterQ2() {
    const x = programmers.filter( el=>el.split(" ")[el.split(" ").length-1].split("")[0] === "T")
    console.log({x})
}
function filterQ3() {
    const x = programmers.filter( el=>el.split(" ")[0].length < 4)
    console.log({x})
}
function filterQ4() {
    const x = programmers.filter( el=>el.split(" ")[0].length > 4)
    console.log({x})
}
function filterQ5() {
    const x = programmers.filter( el=>el.split(" ")[0].length + el.split(" ")[el.split(" ").length-1].length > 8)
    console.log({x})
}
function filterQ6() {
    const x = programmers.filter( el=>el.split(" ")[0].length + el.split(" ")[el.split(" ").length-1].length < 8)
    console.log({x})
}
function filterQ6() {
    const x = programmers.filter( el=>el.split(" ")[el.split(" ").length-1].split("")[0] === "K" && el.split(" ")[el.split(" ").length-1].split("")[el.split(" ")[el.split(" ").length-1].split("").length -1]==="n" )
    console.log({x})
}
function filterQ7() {
    const x = programmers.filter( el=>el.split(" ")[0].length === 3)
    console.log({x})
}
function filterQ8() {
    const x = programmers.filter( el=>el.split(" ")[0].split("")[0] === "A")
    console.log({x})
}
function filterQ9() {
    const x = programmers.filter( el=>el.split(" ")[0].split("")[0] ===  el.split(" ")[el.split(" ").length-1].split("")[0] )
    console.log({x})
}


//map

// Create a betterProgrammers2 array of objects with a property full name

const betterProgrammers2 = programmers.map(mapQ1)
function mapQ1(element) {

    return {fullname:element}
}
console.log(betterProgrammers2)

const betterProgrammers3 = programmers.map(mapQ2)
function mapQ2(element) {
    return { abbreviation: element.split(" ")[0].split("")[0] + element.split(" ")[element.split(" ").length-1].split("")[0]}
}
console.log(betterProgrammers3)

const betterProgrammers4 = programmers.map(mapQ3)
function mapQ3(element) {
    
    return { planet: element}
}
console.log(betterProgrammers4)

const betterProgrammers5 = programmers.map(mapQ4)
function mapQ4(element) {
    const x = element.split(" ")[0].split("").reverse().join("")
    const y = element.split(" ")[element.split(" ").length-1].split("").reverse().join("")
    return {codeName: x+" " +y}
    
}
console.log(betterProgrammers5)

