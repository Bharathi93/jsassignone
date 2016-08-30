var x = process.argv[2];
console.log("Fibonacci series..");
var a=1,b=0;
var c=null;
while(x>0)
{
c=a;
a=b+a;
b=c;
x--;
console.log(b);
}
