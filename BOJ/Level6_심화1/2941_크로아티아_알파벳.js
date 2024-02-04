let input=require('fs').readFileSync('input.txt').toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);
