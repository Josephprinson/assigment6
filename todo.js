function logout() {
    window.location = "login.html"
}
function todolist() {
    // alert("button clicked")
    return new Promise((resolve) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status == 200) {

                var data = JSON.parse(this.responseText);
                var output = `
            <table align="center" border=3>
            <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
           
            </tr>`;




                for (let i = 0; i < data.length; i++) {

                    let status = data[i].completed ? "checked" : "";
                    let disabl = data[i].completed ? "disabled" : "";
                    console.log(data[i]);
                    output += `<tr>
                <td>${data[i].id}</td>
                <td>${data[i].title}</td>
                <td><input type="checkbox" ${status} ${disabl} onclick="checkCount()"/></td>              
                              
                </tr>`
                }
                output += '</table>'
                document.getElementById('tbl').innerHTML = output
                resolve(output)

            }
        }

        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', 'true');
        xhttp.send();
    })
}
function changeData() {
    todolist().then((response) => {
        document.getElementById('tbl').innerHTML = response
    })
}
var count = 0
function incCheck() {
    return new Promise((resolve, reject) => {
        console.log('hii');
        count++
        if (count == 6)
            resolve()
    })
}

function checkCount() {
    incCheck().then(() => alert('you have checked 5 marks  '))
}