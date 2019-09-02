const headerSvg = document.querySelectorAll('#header-svg path');
console.log(headerSvg);

for (let index = 0; index < headerSvg.length; index++) {
  console.log(`index: ${index} ${headerSvg[index].getTotalLength()}`);
}
