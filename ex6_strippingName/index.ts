let name1:String = "      \t\n\nAiman       \nZaheer      "+"   \n\t\nHello  ";

console.log(`\tOriginal Text: ${name1}\n`)
console.log(`\tAfter removing whitespaces:\n${name1.replace(/\s+/g,' ').trim()}`);