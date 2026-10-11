const serverIp = "mc.portalnova.world" 
const statusAPIUrl = "https://api.mcstatus.io/v2/status/java/" + serverIp;
const statusRequest = new XMLHttpRequest();

statusRequest.open("GET", statusAPIUrl);
statusRequest.responseType = "json";
statusRequest.send();

statusRequest.onload = function (){
    const response = statusRequest.response;
    const serverOnline = response.online;

    const centerText = document.getElementById("onOffCenterText")
    if (!serverOnline) {
        // OFFLINE
        centerText.className = "offline"
        centerText.textContent = "OFFLINE"

        return
    }

    // ONLINE
    centerText.className = "online"
    centerText.textContent = "ONLINE"

    const serverMOTDHTML = response.motd.html;
    const serverIcon = response.icon;
    const serverIp = response.host;
    const playersOnline = response.players.online;
    const playersMax = response.players.max;

    // Ajusta icone ip e player on max
    document.getElementById("serverIcon").src = serverIcon;
    document.getElementById("serverIp").textContent = serverIp;

    
}

