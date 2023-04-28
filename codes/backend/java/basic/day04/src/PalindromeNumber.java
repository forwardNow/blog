import java.util.Scanner;

/**
 * 回文数： 正序与倒序是同一个数的数字，如 121、 123321
 * 给定一个整数，判断这个数字是否为回文数
 */
public class PalindromeNumber {
    // 核心就是如何把一个整数倒过来
    public static void main(String[] args) {
        System.out.println("请输入数字：");
        int num = new Scanner(System.in).nextInt();

        int temp = num;
        int reversedNum = 0;

        while (temp != 0) {
            int tailNum = temp % 10;
            reversedNum = reversedNum * 10 + tailNum;
            temp /= 10;
        }

        if (num == reversedNum) {
            System.out.println(num + " 是回文数");
        } else {
            System.out.println(num + " 不是回文数");
        }
    }
}
