const http = require('http');
const os = require('os');

console.log("Micros WEB server starting...");

var handler = function(request, response) {
    const currentTime = new Date().toLocaleString();
    const clientIp = request.connection.remoteAddress.replace(/^::ffff:/, '');
    const hostname = os.hostname();
    const hostIp = Object.values(os.networkInterfaces())
        .flat()
        .find(iface => iface.family === 'IPv4' && !iface.internal)?.address || '127.0.0.1';

    console.log("Received request from IP " + clientIp);

    // Создаем объект с информацией
    const responseData = {
        serverName: hostname,
        serverIP: hostIp,
        requestFromIP: clientIp,
        serverTime: currentTime
    };

    // Устанавливаем заголовок для JSON
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(responseData)); // Отправляем объект как JSON
};

var www = http.createServer(handler);
www.listen(8080, () => console.log("Server running on port 8080"));
