const WebSocket = require('ws');

const wss = new WebSocket.Server( { port: 8082 });

wss.on("connection", ws => {
    console.log("new client connected!");

    ws.on("message", data => {
        console.log(`client has sent us :${data}`);
        if(JSON.parse(data) == "SEND_PATIENT_LIST"){
            console.log(`inside send patient list`);
            var patient = [{
                "firstName": "Rahul",
                "lastName": "Pawar",
                "hospital": "Fortis",
                "ward": "GENERAL",
                "room": "GENERAL103"
            },{
                "firstName": "Robert",
                "lastName": "Dsauza",
                "hospital": "Manipal",
                "ward": "OPD",
                "room": "OPD222"
            }]
            ws.send(JSON.stringify(patient));
        }
        //var msg = Number(JSON.parse(data)) + 10;
        //console.log("client has msg",JSON.parse(data));
        //ws.send(msg);
    })

    ws.on("close", ()=> {
        console.log("client has disconnected");
    })
})