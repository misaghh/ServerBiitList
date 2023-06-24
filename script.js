
//fetching the json inside the url 
function getServerList() {
    fetch('https://publicapi.battlebit.cloud/Servers/GetServerList')
    .then((Response) => Response.json())
    .then((data) => {

        // Adding the titles for each columns, stays after filtering
        document.querySelector('table').innerHTML = `<tr>
        <th id="title">
            Server
        </th>

        <th>
            Map Name
        </th>

        <th>
            Server
        </th>
    </tr>`
        
        data.forEach(cols => {

            let filterValue = document.querySelector("#inputBox").value.toLowerCase();
            // console.log(filterValue);
            if(cols.Map.toLowerCase().startsWith(filterValue) || cols.MapSize.toLowerCase().startsWith(filterValue) || cols.Name.toLowerCase().startsWith(filterValue))  {
            
            
            // const markup = `<td>${cols.Name}</td>`;
            // const markup2 = `<td>${cols.Map}</td>`;
            // const markup3 = `<td>${cols.MapSize}</td>`;
            // const markup4 = `<tr>${markup} ${markup2} ${markup3} </tr>`
            const row = document.createElement('tr')
            const server = document.createElement('td')
            const map = document.createElement('td')
            const size = document.createElement('td')

            server.innerText = cols.Name
            map.innerText = cols.Map
            size.innerText = cols.MapSize

            row.appendChild(server)
            row.appendChild(map)
            row.appendChild(size)
            
            document.querySelector('table').appendChild(row)
        }
            
                
           
        });
        console.log(data);
        // convert(data);
    }).catch((err) => {
        console.log("Servers not found", err);
        
    });
}

document.querySelector("#btn").addEventListener("click",() => {

getServerList()

});

 getServerList();



// function convert(data) {

//     let cols = Object.keys(data[0]);

//     console.log(cols[0]);
//     console.log(cols[1]);
//     console.log(cols[2]);
    


// }

