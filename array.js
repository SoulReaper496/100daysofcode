    // creating a array 
    let array =["Chennai","Bangalore","Mumbai","Hyderabad",5,6,"string"];
    array[2]="Delhi";
   // console.log(typeof array);
   console.log(typeof array);  
   var ne = array[4] + array[6];
   console.log ( ne);
   var n = array[4] + array[5];
console.log (n)
console.log(typeof n);

// Array functions

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
 
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for( let i = 0 ; i < companies.length; i++){
//       console.log(companies[i]);
//   };
//foreach

  companies.forEach(function(company){
      console.log(company.start);
  })

 // filter 

      const canGo = [];
      for (let i = 0; i < ages.length; i++){
          if(ages[i]>=18){
              canGo.push(ages[i]);
          }
      }
   
    console.log(canGo);

    //filter methods for same code

    const canDrink = ages.filter( age => age >=21);
       
        console.log(canDrink);
    
    //find a smallest
  var smallest = canGo[0];
  for(var i=1; i<canGo.length; i++){
      if(canGo[i]<smallest){
          smallest = canGo[i];
      }
      console.log(smallest);
  }
  //using short to find max
  let a =canGo.sort((a,b) => a-b)
  const max = a[a.length-1];
 // console.log(a);
  console.log(a);
  console.log (max);
    
  //using filter to identify specific string match

  const str = companies.filter(company => company.category === "Retail");
  console.log (str);

  //map

  const test = companies.map ( company  => `${company.name} [${company.start} - ${company.end}]` );
  console.log(test);

  //map with numbers

//   const squreno = ages.map (age => Math.sqrt(age));
//   console.log (squreno);

//using multiple maps 
 
const squreno = ages.
map (age => Math.sqrt(age)).
map(age => age *2);
 console.log (squreno);


 //sSORT
// sort method using normal function..
 const startcmpny = companies.sort(function (a,b){
     if (a.start > b. start){
         return 1;
     }else {
         return -1;
     }
 })


 // sort using arrow functions

 const startofcompanies = companies .sort((a,b)=> a.end < b.end ? 1 : -1);
 console.log(startofcompanies)

 //reduce 

 //using normal function
    
//  const addAges = ages.reduce(function (total, age){
//       return total + age;
// });
// console.log (addAges);

//using Arrow functions

const addAges = ages.reduce( (total, age) =>
     total + age);
console.log (addAges);

//getting total timeperiod of companies 

const totalYears = companies.reduce(function (total, company){
    return total + (company.end - company.start);
},0);
console.log(totalYears);

//combined functions of ages

 const combine = ages 
 .map (age => age *2)
 .filter(age => age>40)
 .sort((a,b) => b -a)
// .reduce ((total,b) => total + b, 0)

 console.log(combine);