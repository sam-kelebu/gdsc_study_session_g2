const changed = document.querySelector(".par");
const btn1 = document.querySelector(".plus");
const btn2 = document.querySelector(".minnus");
btn1.addEventListener("click", () => {
  const value = changed.innerHTML;
  let numvalue = Number(value);
  changed.innerHTML = ++numvalue;
});
btn2.addEventListener("click", () => {
  const value = changed.innerHTML;
  let numvalue = Number(value);
  changed.innerHTML = --numvalue;
});