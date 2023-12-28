export class UserAverageSessions {
    id;
    sessions;
    day;
    sessionLength;

    constructor(getUserAverageSessions) {
        if (getUserAverageSessions && getUserAverageSessions.data) {
            this.id = getUserAverageSessions.data.userId || null;
            this.sessions = getUserAverageSessions.data.sessions || [];
            this.day = getUserAverageSessions.data.day || '';
            this.sessionLength = getUserAverageSessions.data.sessionLength || '';
        } else {
            this.id = null;
            this.sessions = [];
            this.day = '';
            this.sessionLength = '';
        }
    }
}