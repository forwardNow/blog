package stringdemo;

public class StringDemo9 {
    public static void main(String[] args) {
        int num = 2135;
        String result = "";

        result = convertToCapitalNumber(num);

        result = addZero(result);

        result = insertUnits(result);

        System.out.println(result);
    }


    private static String convertToCapitalNumber(int num) {
        String result = "";
        String[] capitalNumbers = {"零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"};

        while (num != 0) {
            int singleDigit = num % 10;
            result = capitalNumbers[singleDigit] + result;

            num = num / 10;

            if (num == 0) {
                break;
            }
        }

        return result;
    }

    private static String addZero(String target) {
        String result = "";
        String zeros = "";

        for (int i = 0, len = target.length(); i < 7 - len; i++) {
            zeros += "零";
        }

        result = zeros + target;

        return result;
    }

    private static String insertUnits(String target) {
        String result = "";
        String[] units = {"佰", "拾", "万", "仟", "佰", "拾", "元"};

        for (int i = 0; i < target.length(); i++) {
            char digit = target.charAt(i);
            String unit = units[i];

            result = result + (digit + unit);
        }

        return result;
    }
}
