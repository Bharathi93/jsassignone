
var a = process.argv[2];
    var i = 0, j = 0, k;
    
    for (var i = 0; i < a; i++)
    {
        for (var k = a-1; k >= i; k--)
        {
            process.stdout.write(" ");
        }
        for (j = 0; j <= i; j++)
        {
            process.stdout.write(" "+"*");
        }
        process.stdout.write("\n");
    }
