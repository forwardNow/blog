import java.util.Scanner;

/**
 * 两整数（被除数 num1，除数 num2）相除，
 * 不能使用 / * % 的情况下获取商和余数
 */
public class Division {
    /*
    num1 ÷ num2 = quotient ... remainder
    => num1 = num2 * quotient + remainder
    通过不停的减 num2，得到 商和余数
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入 被除数 num1：");
        int num1 = scanner.nextInt();
        System.out.println("请输入 除数 num2：");
        int num2 = scanner.nextInt();

        int originNum1 = num1;

        int quotient = 0;
        int remainder;

        while (num1 - num2 >= 0) {
            num1 -= num2;
            quotient++;
        }

        remainder = num1;

        System.out.println("商：" + quotient + "\t" + (quotient == originNum1 / num2));
        System.out.println("余：" + remainder + "\t" + (remainder == originNum1 % num2));
    }
}
