export default class formatHelper {
  static numberSeperator(number) {
    if (typeof number === "string") {
      return number?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  static priceFormatter(number) {
    if (typeof number === "string") {
      return parseFloat(number).toFixed(5);
    } else {
      return number.toFixed(5);
    }
  }
}
