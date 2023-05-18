let convertBtn = document.getElementById("btnConvert");
let text = document.getElementById("text").innerText;
convertBtn.onclick = change;
function change() {
  let codeArr = [];
  for (let i of text) {
    let code = i.charCodeAt();
    codeArr.push(code);
  }
  let str = codeArr.join(",");
  document.getElementById("text").innerText = str;
}
let splitbtn = document.getElementById("splitBtn");
splitbtn.onclick = function () {
  let comb = [];
  let substr = "";
  let lastStr = text;
  for (let i = 0; i < lastStr.length - 1; i++) {
    if (!substr.includes(lastStr[i])) {
      substr += lastStr[i];
    } else {
      comb.push(substr);
      lastStr = lastStr.slice(lastStr.indexOf(lastStr[i] + 1));
      substr = "";
    }
  }
  let longest = "";
  for (let i of comb) {
    if (i.length > longest.length) {
      longest = i;
    }
  }
  document.getElementById("text").innerHTML = longest;
};

let first = {
  first1: document.getElementById("first1").innerText,
  first2: document.getElementById("first2").innerText,
  first3: document.getElementById("first3").innerText,
};

function sortCol(obj) {
  let mas = [];
  for (let i in obj) {
    mas.push(obj[i]);
  }
  mas.sort((a, b) => a.localeCompare(b));
  document.getElementById("first1").innerText = mas[0];
  document.getElementById("first2").innerText = mas[1];
  document.getElementById("first3").innerText = mas[2];
}
