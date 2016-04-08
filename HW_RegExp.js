/^0x([a-f]|\d)*?$/gm 
//0xfff
//0xab34209ab
//0x00001

/^0o\d*$/gm
//0o657575765
//0o12341230
//0o0000

/^0b[01]+$/gm
//0b0000001111
//0b1111111001
//0b1101010101

var str = "Hello, my name is ${1+1}"
var result = str.replace(/\$\{([\d\/\*\-\+]+?)\}/g, function(all, match)
{
    return eval(match)
});

console.log(result)
