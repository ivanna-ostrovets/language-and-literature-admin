export const resizeArray = (array: any[], index: number, element: any) => {
  while (array.length > index) {
    array.pop();
  }

  while (array.length < index) {
    array.push(element);
  }
};

export default resizeArray;
