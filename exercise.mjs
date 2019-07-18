// import {obj_send} from 'config';

// var obj = obj_send();
// console.log(obj);

console.log("hello");

var obj = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

if(localStorage.getItem("Info")){
    //console.log(JSON.parse(localStorage.getItem("Info")));
    main();
}else{
    localStorage.setItem("Info", JSON.stringify(obj));
    main();
}

function main(){
    var taskArr = JSON.parse(localStorage.getItem("Info"));
    var table = document.createElement("table");
    table.setAttribute("class","table table-striped");
    for (let i=0; i<taskArr.length;i++){
        taskInfo = {
            taskName : taskArr[i].name,
            taskDate : taskArr[i].date,
            taskAssign : taskArr[i].assigned
        }
        //console.log(taskInfo);
        displayTask(taskInfo,table);
    }
    document.getElementById("tb_id").appendChild(table);

    function displayTask(taskInfo,table){
        
        
        var tr = document.createElement("tr");
        // tr.setAttribute("class","table table-striped");
        var td1 = document.createElement("td");
        td1.innerHTML = taskInfo.taskName;
        var td2 = document.createElement("td");
        td2.innerHTML = taskInfo.taskDate;
        var td3 = document.createElement("td");
        td3.innerHTML = taskInfo.taskAssign;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
       
    }

    document.getElementById("subBut").onclick = ()=>{
        var newTask = {
            name : document.getElementById("taskN").value,
            date : document.getElementById("taskD").value,
            assigned : document.getElementById("taskA").value 
        }
        
        taskArr.push(newTask);
        localStorage.setItem("Info", JSON.stringify(taskArr));
    }
}