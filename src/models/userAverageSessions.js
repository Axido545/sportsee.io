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

            // this.processSessions(getUserAverageSessions.sessions)
        } else {
            this.id = null;
            this.sessions = [];
            this.day = '';
            this.sessionLength = '';
        }
    }
    // processSessions(sessionsData) {
    //     console.log('Processing sessionsData:', sessionsData);

    //     if (!sessionsData || !Array.isArray(sessionsData)) {
    //         console.log('Empty or non-array sessionsData');
    //         return [];
    //     }
    //     const processedSessions = sessionsData.map(session => ({
    //         day: session.day || null,
    //         sessionLength: session.sessionLength || 0,
    //     }));
    //     console.log('Processed sessions:', processedSessions);
    //     return processedSessions;
    // }

}