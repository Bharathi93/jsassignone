var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//Displays only the list of programmers//

console.log("Display object based on value..")
  for(var i=0;i<6;i++)
  {
  if(myObj[i].occupation=="Programmer")

  console.log(myObj[i].name+" "+myObj[i].age);
  }

//sorting the objects in descending order//

console.log("Sorting of elements in descending order..")
myObj.sort(function(a, b){
    return a.age - b.age;
});
myObj.reverse();
for(var i=0;i<6;i++)
{
console.log(myObj[i].name+" "+myObj[i].age+" "+myObj[i].occupation);
}
//Recreate the objects//
console.log("Recreate the objects..");
reArrange();
function reArrange()
{
  var Array1=[];
  var Array2 =[];
  for(i =0;i<myObj.length;i++)
  {
    if(myObj[i].occupation === "Team Leader")
    {
      Array1.push({name:myObj[i].name,age:myObj[i].age});
    }
    if(myObj[i].occupation === "Programmer")
    {
      Array2.push({name:myObj[i].name,age:myObj[i].age});
    }
  }
  var Obj ={"Team Leader":Array1,"Programmer":Array2}
  console.log(Obj);
}
