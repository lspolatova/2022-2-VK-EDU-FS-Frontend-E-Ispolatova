/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  try {
      if (!(Number.isInteger(bytes) && bytes >= 0))
        throw new Error("Неправильный аргумент");
      var myArray = [" B", " KB", " MB", " GB", " TB", " PB", " EB"]; 
      for (var i = 0; i <= 5; i = i + 1) {
        if (bytes < 1024)
          break;
        bytes /= 1024;
      }
      return Math.round(bytes * 100) / 100 + myArray[i];
  } catch(ex) {
    return false;                 
  }
}
