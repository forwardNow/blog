public class PtgTest {
    /** 姓名 */
    private String name;

    /** 性别  */
    private char gender;


    public PtgTest() {
    }

    public PtgTest(String name, char gender) {
        this.name = name;
        this.gender = gender;
    }

    /**
     * 获取
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * 设置
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取
     * @return gender
     */
    public char getGender() {
        return gender;
    }

    /**
     * 设置
     * @param gender
     */
    public void setGender(char gender) {
        this.gender = gender;
    }

    public String toString() {
        return "PtgTest{name = " + name + ", gender = " + gender + "}";
    }
}
