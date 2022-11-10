package stringdemo;

import java.util.Scanner;

public class StringDemo6 {
    public static void main(String[] args) {
        // 键盘录入一个字符串，统计该字符串中大写字母字符，小写字母字符，数字字符出现的次数(不考虑其他字符)

        System.out.println("请输入字符串：");
        String input = new Scanner(System.in).next();

        int totalOfCapitalLetter = 0;
        int totalOfLowercaseLetters = 0;
        int totalOfNumLetter = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);

            if (ch >= 'A' && ch <= 'Z') {
                totalOfCapitalLetter++;
            } else if (ch >= 'a' && ch <= 'z') {
                totalOfLowercaseLetters++;
            } else if (ch >= '0' && ch <= '9') {
                totalOfNumLetter++;
            }
        }

        System.out.println("大写字母字符个数： " + totalOfCapitalLetter);
        System.out.println("小写字母字符个数： " + totalOfLowercaseLetters);
        System.out.println("数字字符个数： " + totalOfNumLetter);
    }
}
