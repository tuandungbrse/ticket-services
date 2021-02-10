import http from 'http';
import app from './app';


const server = http.createServer(app);
const PORT = process.env.PORT || 8888;

server.listen(PORT, () => console.log(`auth-service is listenning on port ${PORT}`));
