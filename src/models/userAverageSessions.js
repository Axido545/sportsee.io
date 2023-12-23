export class UserAverageSessions{
    id;
    sessions;

    constructor(getUserAverageSessions){
        if(getUserAverageSessions && getUserAverageSessions.sessions) {
            this.id = getUserAverageSessions.userId;
            this.sessions = this.processSessions(getUserAverageSessions.sessions)
        }else {
            this.id = null;
            this.sessions = [];
        }
    }
    processSessions(sessionsData){
        if (!sessionsData || !Array.isArray(sessionsData)) {
            return [];
        }
        return sessionsData.map(session => ({
            day: session.day || null,
            sessionLength: session.sessionLength || 0,
        }));
    }
    }