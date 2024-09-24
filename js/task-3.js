function getElementWidth (content, padding, border) {

    let elementContent =  Number.parseFloat(content);
    let elemePadding =  Number.parseFloat(padding);
    let elementBorder =  Number.parseFloat(border);
    const boxSizing = elementContent + elemePadding * 2 + elementBorder *2 ;

    console.log(boxSizing);

}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

console.log(getElementWidth("315px", "6px", "1.7px")); // 330.4