export class UserAverageSessions {
    id;
    sessions;

    constructor(getUserAverageSessions) {
        if (getUserAverageSessions && getUserAverageSessions.sessions) {
            this.id = getUserAverageSessions.userId;
            this.sessions = this.processSessions(getUserAverageSessions.sessions)
        } else {
            this.id = null;
            this.sessions = [];
        }
    }
    processSessions(sessionsData) {
        console.log('Processing sessionsData:', sessionsData);

        if (!sessionsData || !Array.isArray(sessionsData)) {
            console.log('Empty or non-array sessionsData');
            return [];
        }
        const processedSessions = sessionsData.map(session => ({
            day: session.day || null,
            sessionLength: session.sessionLength || 0,
        }));
        console.log('Processed sessions:', processedSessions);
        return processedSessions;
    }

}