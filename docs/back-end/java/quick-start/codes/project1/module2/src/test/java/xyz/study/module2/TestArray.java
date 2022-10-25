package xyz.study.module2;

import java.util.Arrays;

public class TestArray {
    public static void main(String[] args) {
        /*
        定义:
            1. 类型[] 变量名 = new 类型[长度]
            2. 类型[] 变量名 = new 类型[]{ 元素1, 元素2, ... }
            3. 类型[] 变量名 = { 元素1, 元素2, ... }
         */

        int[] nums = new int[3];
        nums[0] = 1;
        nums[1] = 10;
        nums[2] = 100;
        System.out.println(Arrays.toString(nums)); // [1, 10, 100]

        double[] prices = new double[]{1.0, 2.0, 3.0};
        System.out.println(Arrays.toString(prices));

        String[] statements = {"123", "abc", "xyz"};
        System.out.println(Arrays.toString(statements) + '\t' + statements.length);

        // int[] arr = {0};
        // System.out.println(arr[-1]); // ArrayIndexOutOfBoundsException

        for (int num: nums) {
            System.out.println(num);
        }

        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }

        System.out.println(Arrays.toString( new String[3]) ); // [null, null, null]
        System.out.println(Arrays.toString( new int[3]) ); // [0, 0, 0]
        System.out.println(Arrays.toString( new double[3]) ); // [0.0, 0.0, 0.0]
        System.out.println(Arrays.toString( new boolean[3]) ); // [false, false, false]
    }
}
