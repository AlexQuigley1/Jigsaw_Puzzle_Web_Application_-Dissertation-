package JigsawPuzzle;	
	
	import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
	import org.springframework.boot.autoconfigure.SpringBootApplication;
	import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import DatabasePackage.DatabaseController;

	@SpringBootApplication
	public class Startup extends WebMvcConfigurerAdapter {

	    public static void main(String[] args) throws SQLException {
	    	
	    	DatabaseController database = new DatabaseController();
	    	
	        SpringApplication.run(Startup.class, args);
	    }
	}



