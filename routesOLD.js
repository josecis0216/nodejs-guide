const fs = require('fs');

// const requestHandler = (req, res) => {
//     const url = req.url
//     if (url === '/') {
//         res.write(`<html>
//         <head><title>Enter message</title></head>
//         <body><form action="/message" method="POST"><input type="text" name="message">
//         <button type="submit">Submit</button></form>`)
//         return res.end();
//     }
    
//     if(url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFile('message.txt', message, (err) => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//             });
//         });
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write(`<html>
//     <head><title>Hello from my node js server</title></head>
//     <body><h1>Hello World</h1></body>
//     </html>`)
//     res.end();
// };

const requestHandler = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write(`<html>
        <head><title>Hello World</title></head>
        <body>Hello welcome to my page
        <form action="/create-user" method="POST"><input type="text" name="username"></input>
        <button type="submit">Submit</button></form>
        </body>
        </html>`);
        return res.end();
    }
    if (url === '/users') {
        res.write(`<html>
        <head><title>Hello World</title></head>
        <body>
        <ul>
        <li>
        Jose
        </li>
        <li>
        Pablo
        </li>
        <li>
        Eddie
        </li>
        </ul>
        </body>
        </html>`)
        return res.end()
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            return res.end();
            // fs.writeFile('message.txt', message, (err) => {
            //     res.statusCode = 302;
            //     res.setHeader('Location', '/');
            //     return res.end();
            // });
        });
    }
}
module.exports = requestHandler;
