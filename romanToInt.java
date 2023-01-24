class Solution {
    public int romanToInt(String roman) {
    int res = 0;
    for (int i = 0, j = 1; i < roman.length() - 1; i++, j++) {
      String str = "" + roman.charAt(i) + roman.charAt(j);
      i++;
      j++;
      switch (str) {
        case "CM":
          res = res + 900;

          break;
        case "CD":
          res = res + 400;

          break;
        case "XC":
          res = res + 90;

          break;
        case "XL":
          res = res + 50;

          break;
        case "IX":
          res = res + 9;

          break;
        case "IV":
          res = res + 4;

          break;
        default:
          i--;
          j--;
          str = "" + roman.charAt(i);
          switch (str) {
            case "I":
              res = res + 1;
              break;
            case "X":
              res = res + 10;
              break;
            case "V":
              res = res + 5;
              break;
            case "L":
              res = res + 50;
              break;
            case "C":
              res = res + 100;
              break;
            case "D":
              res = res + 500;
              break;
            case "M":
              res = res + 1000;
              break;
            default:
              System.out.println("Wrong Roman Number");
          }
      }
    }
    return res;
  }
}