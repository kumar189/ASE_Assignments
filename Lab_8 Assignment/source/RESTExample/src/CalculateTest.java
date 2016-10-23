import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculateTest {

	Calculate calculation = new Calculate();
	int sum = calculation.sum(18);
	int testSum = 64800;


	@Test
	public void testSum() {
		System.out.println("@Test sum(): " + sum + " = " + testSum);
		assertEquals(sum, testSum);
	}

}