function postComment(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
 
	if(name =="" || comment ==""){
		alert("Please enter something first!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px dotted #ccc';
		parent.appendChild(el_name);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'well');
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
 
}