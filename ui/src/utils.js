const randomId = (type, length) => {
    let numeric = "0123456789";
    let alphanumeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let chars = "";
    if (type === "numeric") {
      chars = numeric;
    } else if (type === "alphanumeric") {
      chars = alphanumeric;
    } else if (type === "alphabet") {
      chars = alphabet;
    }
    let code = "";
    for (let i = 0; i < length; i++) {
      let randNum = Math.floor(Math.random() * chars.length);
      code += chars.substring(randNum, randNum + 1);
    }
    return code;
  }
  
  const makeId = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

module.exports = { randomId, makeId };