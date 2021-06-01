var fs = require('fs');
var tsxFiles = [];

var counter = 0;
function readDirectory(path) {

    var files = fs.readdirSync(path + "/");
    files.forEach(element => {
        if(element.includes(".tsx"))
        {
            //do nothing
        }
        else if (element.includes(".ts")) {
            tsxFiles.push(path + "/" + element);
        }
        else if (!element.includes(".")) {
            readDirectory(path + "/" + element)
        }



    });


}


function testComment() {

    
    tsxFiles.forEach(element => {
        // read the first line and if there isnt a comment for id and name return false
        
        var data = fs.readFileSync(element);
        
        if (data.includes("//Bevan Muirhead : 1365268")) {
                    //console.log(element + "    true" )
                    counter ++;
                }
                else { // doesnt include proper comment
                   
                    
                
                    //console.log(element + "    false" )
                
                

                }
           
            
        

    });
       
}

readDirectory("./src");


testComment();

if(counter==6)
{
    console.log(true);
}
else{
    console.log(false);
}