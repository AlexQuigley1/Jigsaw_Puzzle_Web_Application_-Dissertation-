package TestPackage;
import javax.swing.JFrame;

public class JigsawShape{

	public JigsawShape(String title) {
		JFrame frame = new JFrame();
		frame.setSize(640, 480);
		frame.setTitle(title);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		Shape shape = new Shape(200,200);
		frame.add(shape);
		frame.setVisible(true);
	}
	

    public static void main(String [] args){
    	new JigsawShape("Window");
    	
    }
    }


