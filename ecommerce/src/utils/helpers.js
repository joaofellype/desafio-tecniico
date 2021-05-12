const addZeroes = (num) => {
  if (num) {
    return num
      .toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 })
      .toString()
      .replace(".", ",");
  }
  return false;
};

export default {
  addZeroes,
};
