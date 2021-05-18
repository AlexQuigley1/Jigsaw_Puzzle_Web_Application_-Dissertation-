package DatabasePackage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class DatabaseController {
	public static Connection connection;
	
	//sets up database connection
	public DatabaseController() throws SQLException{
		try {
			//attempts to connect to my sql database
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/puzzle?serverTimezone=UTC", "root", "G041tjfd1!");//change password to uni password to make work
		System.out.println("connection established");
		}
		catch(Exception e){
			System.out.println("Connection to database failed");
			System.out.println(e);
		}
	}
	
	//insert into SQL table function
	public static void insertTime(String table, String name, int time) throws SQLException {
		
		//Prepares a string using values passed to function
		String insertStatement = "INSERT INTO " + table + " VALUES (\"" + name + "\", " + time + ")";
	    PreparedStatement prepInsertState = connection.prepareStatement(insertStatement);
	    //executes sql statement
	    prepInsertState.execute();
	}
	
	//gets leader board from sql table
	public static ArrayList[] getLeaderboard(String table) throws SQLException {
		
		//prepares string using table names passed to function
		  String insertStatement = "SELECT * FROM " + table;
	      PreparedStatement prepInsertState = connection.prepareStatement(insertStatement);
	      //executes sql statement
	      ResultSet rs = prepInsertState.executeQuery();
	      
	      //creates arrayList for the sql data
	      ArrayList<String> names = new ArrayList<String>();
	      ArrayList<Integer> times = new ArrayList<Integer>();
	      //loops through adding data from sql table into arrayLists
	      while(rs.next()) {
	    	  names.add(rs.getString(1));
	    	  times.add(rs.getInt(2));
	      }
	      //creates return arrayList
	      ArrayList[] returnArray = {names, times};
	      return returnArray;
	}
}



























