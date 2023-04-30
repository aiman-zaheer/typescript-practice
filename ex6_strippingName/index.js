var name1 = "      \t\n\nAiman       \nZaheer      " + "   \n\t\nHello  ";
console.log("\tOriginal Text: ".concat(name1, "\n"));
console.log("\tAfter removing whitespaces:\n".concat(name1.replace(/\s+/g, ' ').trim()));
