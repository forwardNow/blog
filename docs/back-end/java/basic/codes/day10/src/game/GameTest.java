package game;

public class GameTest {
    public static void main(String[] args) {
        Role role1 = new Role("乔峰", 100, '男');
        Role role2 = new Role("周芷若", 100, '女');

        role1.showRoleInfo();
        role2.showRoleInfo();

        while (true) {
            role1.attack(role2);

            if (role2.getBlood() == 0) {
                break;
            }

            role2.attack(role1);

            if (role1.getBlood() == 0) {
                break;
            }
        }
    }
}
