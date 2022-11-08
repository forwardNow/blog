package game;

import java.util.Random;

public class Role {
    private String name;
    private int blood;
    private char gender;
    private String face;

    private String[] BOY_FACES = {
            "风流俊雅",
            "气宇轩昂",
            "相貌英俊",
            "五官端正",
            "相貌平平",
            "一塌糊涂",
            "面目狰狞"
    };
    private String[] GIRL_FACES = {
            "美奂绝伦",
            "沉鱼落雁",
            "婷婷玉立",
            "身材娇好",
            "相貌平平",
            "相貌简陋",
            "惨不忍睹"
    };

    // attack 攻击描述：
    private String[] ATTACKS_DESC = {
            "%s使出了一招【背心钉】，转到对方的身后，一掌向%s背心的灵台穴拍去。",
            "%s使出了一招【游空探爪】，飞起身形自半空中变掌为抓锁向%s。",
            "%s大喝一声，身形下伏，一招【劈雷坠地】，捶向%s双腿。",
            "%s运气于掌，一瞬间掌心变得血红，一式【掌心雷】，推向%s。",
            "%s阴手翻起阳手跟进，一招【没遮拦】，结结实实的捶向%s。",
            "%s上步抢身，招中套招，一招【劈挂连环】，连环攻向%s。"
    };

    // injured 受伤描述：
    String[] INJURED_DESC={
            "结果%s退了半步，毫发无损",
            "结果给%s造成一处瘀伤",
            "结果一击命中，%s痛得弯下腰",
            "结果%s痛苦地闷哼了一声，显然受了点内伤",
            "结果%s摇摇晃晃，一跤摔倒在地",
            "结果%s脸色一下变得惨白，连退了好几步",
            "结果『轰』的一声，%s口中鲜血狂喷而出",
            "结果%s一声惨叫，像滩软泥般塌了下去"
    };

    public Role() {
    }

    public Role(String name, int blood, char gender) {
        this.name = name;
        this.blood = blood;
        this.gender = gender;

        this.setFace(null);
    }

    public void showRoleInfo() {
        System.out.printf("【%s】%s, 外貌 %s\n", this.name, this.gender, this.face);
    }

    public void attack(Role other) {
        this.doAttackDesc(other);
        this.doInjuredDesc(other);
    }

    private void doAttackDesc(Role other) {
        int randomIndex = new Random().nextInt(this.ATTACKS_DESC.length);
        System.out.printf(this.ATTACKS_DESC[randomIndex] + "\n", this.name, other.name);
    }

    private void doInjuredDesc(Role other) {
        Random random = new Random();
        int attackBlood = random.nextInt(20) + 1; // 1 ~ 20
        int remainingBlood = Math.max(other.getBlood() - attackBlood, 0);

        other.setBlood(remainingBlood);

        String desc;

        if (remainingBlood >= 90) {
            desc = this.INJURED_DESC[0];
        } else if (remainingBlood >= 80) {
            desc = this.INJURED_DESC[1];
        } else if (remainingBlood >= 70) {
            desc = this.INJURED_DESC[2];
        } else if (remainingBlood >= 60) {
            desc = this.INJURED_DESC[3];
        } else if (remainingBlood >= 40) {
            desc = this.INJURED_DESC[4];
        } else if (remainingBlood >= 30) {
            desc = this.INJURED_DESC[5];
        } else if (remainingBlood >= 20) {
            desc = this.INJURED_DESC[6];
        } else {
            desc = this.INJURED_DESC[7];
        }

        System.out.printf(desc + "\n", other.getName());

        if (remainingBlood == 0) {
            System.out.printf("%s KO %s \n", this.name, other.getName());
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBlood() {
        return blood;
    }

    public void setBlood(int blood) {
        this.blood = blood;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getFace() {
        return face;
    }

    public void setFace(String face) {
        if (face != null) {
            this.face = face;
            return;
        }

        if (this.gender == '男') {
            int randomIndex = new Random().nextInt(this.BOY_FACES.length);
            this.face = this.BOY_FACES[randomIndex];
        } else {
            int randomIndex = new Random().nextInt(this.GIRL_FACES.length);
            this.face = this.GIRL_FACES[randomIndex];
        }
    }
}
