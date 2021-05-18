package TestPackage;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.geom.GeneralPath;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.JComponent;

import java.lang.Object.*;

public class Shape extends JComponent{
	int width, height;

	public Shape(int w, int h) {
		this.width = w;
		this.height = h;
	}
	
	public void paint (Graphics g) {
		try {
			BufferedImage temp = ImageIO.read(new File("src/main/webapp/img/jigsawtemplate.jpg"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	    Graphics2D g2 = (Graphics2D) g;
	    GeneralPath shape = new GeneralPath();
        shape.moveTo(100, 100);
        shape.lineTo(100+width, 100);
        shape.lineTo(100+width, 100+(height/3));//start of curve
        shape.curveTo(100+width+(width/4), 100+(height/3), 100+width+(width/4), 100+(height/3)*2, 100+width, 100+(height/3)*2);
	    shape.lineTo(100+width, 100+height);
	    shape.lineTo(100+(width/3)*2, 100+height);
	    shape.curveTo(100+(width/3)*2, 100+(height/3)*2, 100+(width/3), 100+(height/3)*2, 100+(width/3), 100+height);
        shape.lineTo(100, 100+height);
        shape.lineTo(100, 100);

        
        Graphics2D g2d = (Graphics2D)g;
        g2d.draw(shape);
        
        
        
        
        
        
        
	}
	
}
