import java.util.Random;

public class MyRandom {
    public static void main(String[] args) {
        // [0, r) ==> [7, 15]

        // 区间对齐：
        // [7, 15] -> [0, 15 - 7] -> [0, 15 - 7 + 1)

        // 更改起始点：
        // [0, 15 - 7 + 1) + 7 -> [7, 15 + 1) -> [7, 15]

        // 公式：
        // [start, end] = r.nextInt(end - start + 1) + start

        for (int i = 0; i < 10; i++) {
            int num = new Random().nextInt(15 - 7 + 1) + 7;
            System.out.println(num);
        }
    }
}
