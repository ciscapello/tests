import { Task } from "../types";

export function getObjects(obj: Task) {
  const objArr: Task[] = [];
  let levelIndex = 1;
  getProp(obj);

  function getProp(o: Task) {
    o.nestingLevel = levelIndex;
    objArr.push(o);
    if (o.hasOwnProperty("sub")) {
      levelIndex++;
      o.sub?.map((elem) => {
        return getProp(elem);
      });
    } else {
      console.log("Finite value: ", objArr);
    }
  }
  console.log(objArr);
  return objArr;
}
