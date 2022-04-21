const list = document.createElement("ul");

let state = "show";

const handleClickList = (state) => {
  console.log(state);
};

list.addEventListener("click", () => handleClickList(state));
