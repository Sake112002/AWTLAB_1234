var fs=require('fs');
fs.readFile("file.txt",function(err,data)
{
    console.log(data.toString());
})
fs.writeFile("file.txt","Welcome to IT-A",function(err,data)
{
    console.log("data inserted");
})
fs.appendFile("file.txt"," from cvr",function(err,data)
{
    console.log("data appended");
})
 