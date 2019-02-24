import java.util.Scanner;

public class lab {
    public static void main(String[] args) {
        Scanner scaner = new Scanner(System.in);
        double num1 = Double.parseDouble(scaner.nextLine());
        double num2 = Double.parseDouble(scaner.nextLine());

        double sum = num1 +num2;
        System.out.printf("%.2f", sum);
    }
}