function getServerList() {
    fetch('https://publicapi.battlebit.cloud/Servers/GetServerList').then((Response) => Response.json()).then((data) => {
        console.log(data);
        convert(data);
    }).catch((err) => {
        console.log("Servers not found", err);
        
    });
}

getServerList();



function convert(data) {

    // let data = [];

    // let container = document.getElementById("container");
    // let table = document.getElement("table");
    let cols = Object.keys(data[0]);

    console.log(cols[0]);
    console.log(cols[1]);
    console.log(cols[2]);
    console.log(cols[3]);


}

