function reversingStrings(s) {
  s = s.split("").reverse().join("");
  console.log(s);
}
try {
  reversingStrings(5);
} catch (e) {
  console.log(e.message);
}
