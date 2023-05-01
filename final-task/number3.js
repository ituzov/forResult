const unique = (arrNumber) => {
  const arrNew = [];
  arrNumber.forEach(item => {
      if (!arrNew.includes(item)){
          arrNew.push(item)
      }
  });
    console.log(arrNew)
}
unique([1, 1, 2, 2, 4, 2, 3, 7, 3])