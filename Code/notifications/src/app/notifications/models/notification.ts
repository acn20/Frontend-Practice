export class Notification {
    id: string;
    thumbnailUrl: string;
    timestamp: string; // 22h, 1d etc

    constructor(id: string, thumbnailUrl: string, timestamp: string) {
        this.id = id;
        this.thumbnailUrl = thumbnailUrl;
        this.timestamp = timestamp;
    }
}

