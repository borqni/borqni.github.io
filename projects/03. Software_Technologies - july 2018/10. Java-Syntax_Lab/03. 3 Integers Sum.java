import java.util.Scanner;

public class lab {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int num1 = scan.nextInt();
        int num2 = scan.nextInt();
        int num3 = scan.nextInt();

        if (!checkNums(num1, num2, num3) &&
                !checkNums(num3, num1, num2) &&
                !checkNums(num2, num3, num1)) {
            System.out.println("No");
        }
    }

    private static boolean checkNums(int first, int second, int sum) {
        if (first + second != sum) {
            return false;
        }

        if (first > second) {
            int temp = first;
            first = second;
            second = temp;
        }
		
        System.out.printf("%d + %d = %d%n", first, second, sum);
        return true;
    }
}