import java.util.Scanner;

public class lab {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());
        long sum = 0;
        
		for (int i = 0; i < n; i++) {
            sum += Integer.parseInt(scan.nextLine());
        }
		
        System.out.println("Sum = " + sum);
    }
}