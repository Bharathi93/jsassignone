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
  //a();
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

//if(myObj.value="Programmer")
//console.log(myObj.key);
