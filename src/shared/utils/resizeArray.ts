export const resizeArray = (array: any[], index: number, getNewElement: any) => {
  while (array.length > index) {
    array.pop();
  }

  while (array.length < index) {
    array.push(getNewElement());
  }
};

export default resizeArray;
