// const str = "abcdefg";
// let result = str.match(/abc/);
// console.log(result);

// const str = "abc123xyz";
// let result = str.match(/\d\d\d/);
// console.log(result);

// const str = "896.";
// let result = str.match(/\./);
// console.log(result);

// const str = "man.";
// let result = str.match(/[m]/);
// console.log(result);

// const str = "bogdog.";
// let result = str.match(/[^bog]/);
// console.log(result);

// const str = "Ann.";
// let result = str.match(/[A-Z]/);
// console.log(result);

// const str = "wazazzzzup.";
// let result = str.match(/z{4}/);
// console.log(result);

// const str = "aabbbbcc.";
// let result = str.match(/aa+b+c+/);
// console.log(result);

// const str = "24 files found?.";
// let result = str.match(/\d+/);
// console.log(result);

// const str = "   24 files found?.";
// let result = str.match(/\s\s/);
// console.log(result);

// const str = "Mission: successful";
// let result = str.match(/^M.+ful$/);
// console.log(result);

const myRegExp = /^(\s*\d{4}|\d{6})$/;
console.log(myRegExp.test(1457));
