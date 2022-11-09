package test1;

import java.util.Scanner;

public class ViewScanner {
    public static void main(String[] args) {
        // next() 背后使用了 new String();
        String str1 = new Scanner(System.in).next(); // abc
        String str2 = "abc";

        System.out.println(str1 == str2); // false
    }
}
