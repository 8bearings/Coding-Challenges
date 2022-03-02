// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

function hello(name) {
    if(name == '' || name == undefined){
       return "Hello, World!"
     }else{
       let nameS = name.split('') 
       let map = nameS.map(e => e.toLowerCase())
        map.shift()
          map.unshift(nameS[0].toUpperCase())
       return 'Hello, '+ map.join('') +'!'
     }
 }

 