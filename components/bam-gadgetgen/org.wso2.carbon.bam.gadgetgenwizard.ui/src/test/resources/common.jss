<%			
	var db = new Database("jdbc:h2:/Users/srinath/code/wso2-projects/ot-analytics/resources/db/ot-analytics2", "", "");	
	
	var date = new Date(); 
    var months = 12*date.getFullYear() + date.getMonth(); 
    
   	var count = 0; 
	
	function wrtieDataDefinitions(result, columnName1, columnName2){
	    count = count +1; 
		var resultset = new Object();
		var groupNames = new Array();
		
		for (i=0;i<300 && i < result.length;i++){
			var monthsPassed = "A" + count + "A" +result[i].MONTHSPASSED; 
			if(!resultset[monthsPassed]){
				resultset[monthsPassed] = new Array();
				groupNames.push(monthsPassed); 
			}
			if(columnName1){
				var val1 = result[i][columnName1]; 
				var pair = [val1.replace(/[^A-z0-9]+/g,""), result[i][columnName2]]; 
				resultset[monthsPassed].push(pair); 
			}else{
				resultset[monthsPassed].push([i, result[i][columnName2]]);
			}
		}
		
		
		for (i=0; i < groupNames.length;i++){	
			var tempdata = resultset[groupNames[i]];
			tempdata = tempdata.slice(0,Math.min(5, tempdata.length)); 
			var dataAsStr= stringify(tempdata).replace(/\"]/g,"]").replace(/, \"/g,",");
			
			var months = parseInt(groupNames[i].replace(/A[0-9]+A/g, ""));
			var date = new Date((months/12), months%12, 15); 
			
			%>
			var <%=groupNames[i]%> = {
	            type: 'line',
	            title: '<%=date.getFullYear()+"/"+(date.getMonth()+1)%>',
	            data:<%=dataAsStr%>
	        }
	        <%
		}
		return stringify(groupNames).replace(/\"/g,""); 
	}
	
	
	
		function writeADataDefinitions(dataName, result, columnName1, columnName2, count){
			var i=0;
			var data = new Array();
			for (i=0;i<10 && i < result.length;i++)
			{
				if(columnName1){
					var val1 = result[i][columnName1]; 
					var pair = [val1.replace(/[^A-z0-9]+/g,""), result[i][columnName2]]; 
					data.push(pair); 
				}else{
					data.push([i, result[i][columnName2]]);
				}
            }
            
           	var dataAsStr= stringify(data).replace(/\"]/g,"]").replace(/, \"/g,",");
			%>
			var <%=dataName%> = {
            	type: 'line',
            	title: '<%=dataName%>',
            	data:<%=dataAsStr%>
            }
            <%
		}
		
		
		function printTable(data, columnNames, count){
			var i = 0; var j = 0; 
			%>
			<table border="1">
			<tr>
			<%
			for (i=0;i < columnNames.length;i++){ 
				print("<td>"+ columnNames[i] + "</td>");
			}
			print("</tr>\n<tr>");
			for (j=0;j< count && j < data.length;j++){
				for (i=0;i < columnNames.length;i++){ 
					if(columnNames[i] == "COOKIE"){
						print("<td><a href=\"user.jss?userID=" + data[j].COOKIE+ "\">show profile</a></td>");
					}else if(columnNames[i] == "ORG"){
						print("<td><a href=\"org.jss?org=" + data[j].ORG+ "\">"+data[j].ORG+"</a></td>");
						
					}else{
						print("<td>"+ data[j][columnNames[i]] + "</td>");
					}
				}
				print("</tr>\n");
			}
			%>
			</table>
			<%
		}
%>    
	
