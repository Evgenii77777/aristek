let marvel = [];
let dc = [];
let result = { marvel, dc };
const er = new Error("Не достаточно данных");

const groupBy = (arr, key) => {
  if (key === undefined || arr === undefined) {
    console.error(er);
  }

  arr.forEach((el) => {
    if (key === el.universe) {
      marvel.push(el);
    } else {
      dc.push(el);
    }
  });

  return result;
};

groupBy(
  [
    { id: 1, universe: "marvel", name: "Spider Man" },
    { id: 2, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" },
  ],
  "marvel"
);

console.log(result);
