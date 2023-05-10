//

ACME:123-L 
DI:12345-M
ACE:1-12 

function getSupplier(partCode) { 
    let colonPos = code.indexOf(":");
    return code.slice(0, colonPos);
}

function getProductNumber(partCode) {
let colorPros = code.indexOf(":");
let hyphenPos = code.indexOf("-");
return code.slice (colonPos + 1, hyphenPos);
}

function getSize(partCode) {
    let hyphenPos = code.indexOf("-");
    return code.slice(hyphenPos + 1);

}

function testParser(partCode) {

}