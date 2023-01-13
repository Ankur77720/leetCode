class Solution {

  public static int[] twoSum(int[] nums, int target) {
    int[] finalValues = new int[2];
    for (int i = 0; i < nums.length; i++) {
      System.out.println("i = " + i);
      int secondSum = target - nums[i];
      int nextIndex = 0;
      for (int j = 0; j < nums.length; j++) {
        System.out.print(" j = " + j);
        if (nums[j] == secondSum && j != i) {
          System.out.println();
          nextIndex = j;
          finalValues[0] = i;
          finalValues[1] = nextIndex;
          return finalValues;
        }
      }
    }
    return finalValues;
  }

  public static void main(String[] args) {
    int[] arr = { 2, 7, 11, 15 };
    System.out.println(twoSum(arr, 9));
  }
}
