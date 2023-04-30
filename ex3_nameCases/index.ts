let name1:String = "Aiman zaheer";

let toTitleCase = (n:any)=>{

    let a = n.split(" ");
    let w = a.map((word:any) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
    return w.join(' ')

}

console.log(`lower case: ${name1.toLowerCase()}`);
console.log(`UPPER CASE: ${name1.toUpperCase()}`);
console.log(`Title Case: ${toTitleCase(name1)}`);


