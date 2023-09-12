import { io } from 'socket.io-client';

const options = {
	'force new connection': true,
	reconnectionAttempts: 'Infinity',
	timeout: 10000,
	transports: ["websocket"]
}

const socket = io('https://node-test-40f2.onrender.com:10000', options);

export default socket;