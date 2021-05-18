package JigsawPuzzle;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.imageio.ImageIO;

public class PuzzleController {
	
	//returns the width and height in pieces to index controller
	public static int[] getMultiple(int number){
		//find all factors in order
		ArrayList<Integer> factors = getFactors(number);
		//take middle two as the wanted pair, unless odd in length
		//then take middle number squared
		int multiples[] = new int [2];
		int middle = factors.size()/2;
		if (factors.size()%2==0) {
			multiples[0] = (int) factors.get(middle--);
			multiples[1] = (int) factors.get(middle);
		}
		else {
			multiples[0] = (int) factors.get(middle);
			multiples[1] = (int) factors.get(middle);
		}
		//returns the amount of pieces for jigsaw [width, height]
		return multiples;
	}
	
	public static ArrayList<Integer> getFactors(int number){
		//finds all factors except itself
		ArrayList<Integer> factors = new ArrayList<Integer>();
		for(int i=1;i<=number/2;i++){
	        if(number%i==0){
	        	factors.add(i);
	        }
		}
		factors.add(number);
		return factors;
	}
	
	//resize the images
    public static BufferedImage resize(BufferedImage img, int width, int height) {    	
    	
    	BufferedImage outputImage = new BufferedImage(width, height, img.getType());
        
        Graphics2D g2d = outputImage.createGraphics();
        g2d.drawImage(img, 0, 0, width, height, null);
        g2d.dispose();
        
        return outputImage;
    }
}
