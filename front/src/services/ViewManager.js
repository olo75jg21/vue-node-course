import router from '../router'
import io from 'socket.io-client'
class ViewManager {
    constructor() {
        this.interval = null;
        this.status = null;
        this.socket = null;
    }

    changeView() {
        switch (this.status) {
            case 'CONNECTED':
                router.push({ name: 'connected' });
                break;
            case 'FAILED':
                router.push({ name: 'failed' });
                break;
            case 'ANSWERED':
                this.socket.disconnect();
                router.push({ name: 'answered' });
                break;
            case 'RINGING':
                router.push({ name: 'ringing' });
                break;
        }
    }

    checkStatus() {
        this.socket =
            io('http://localhost:3000', {
                reconnection: false,
                transports: ["websocket",
                    "polling"]
            });
        this.socket.on('status', (status) => {
            if (status !== this.status) {
                this.status = status;
                this.changeView();
            }
            this.status = status;
        })
    }

    getStatus() {
        return this.getStatus
    }
}

export default new ViewManager()