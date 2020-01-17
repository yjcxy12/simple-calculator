export const trimEndZeros = n => (/\.\d+0+$/.test(n) ? n.replace(/0+$/, '') : n);

export const getResult = ({ cachedOperator, cachedNumber = 0, currentNumber }) => {
  let result;

  switch (cachedOperator) {
    case 'plus':
      result = Number(cachedNumber) + Number(currentNumber);
      break;
    case 'minus':
      result = Number(cachedNumber) - Number(currentNumber);
      break;
    case 'multiply':
      result = Number(cachedNumber) * Number(currentNumber);
      break;
    case 'divide':
      result = Number(cachedNumber) / Number(currentNumber);
      break;
    default:
      result = Number(currentNumber);
      break;
  }

  const precisionRes = trimEndZeros(result.toPrecision(9)).replace('.', '');
  return precisionRes.length > 9 ? 'overflow' : trimEndZeros(result.toPrecision(9)).replace(/\.$/, '');
};
