// Exercise: Day 5 JavaScript. DNA to RNA Conversion
// Source: https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNALong(dna) {
    let rna = '';
    for (const element of dna) {
        if (element === "T") {
            rna += "U";
        } else {
            rna += element;
        }
    }
    return rna;
}

function DNAtoRNAMedium(dna) {
    let rna = '';
    for (const element of dna) {
        element === "T" ? rna += "U" : rna += element;
    }
    return rna;
}

const DNAtoRNAShort = (dna) => dna.replace(/T/g, "U");

console.log(DNAtoRNALong("GCAT"));
console.log(DNAtoRNAMedium("GCAT"));
console.log(DNAtoRNAShort("GCAT"));