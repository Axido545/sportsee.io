export class UserActivity {
    id;
    sessions;
    day;
    kilogram;
    calories;
    index;
    constructor(getUseActivityData) {
        if (getUseActivityData && getUseActivityData.data) {
            this.id = getUseActivityData.data.userId || null;
            this.sessions = getUseActivityData.data.sessions.map(session => ({
                day: session.day || '',
                kilogram: session.kilogram || '',
                calories: session.calories || '',
            }));
            this.day = getUseActivityData.data.sessions.day || '';
            this.kilogram = getUseActivityData.data.sessions.kilogram || '';
            this.calories = getUseActivityData.data.sessions.calories || '';
            this.index = getUseActivityData.data.sessions.map((session, index) => Number(index));
        } else {
            this.id = null;
            this.sessions = [];
            this.day = '';
            this.kilogram = '';
            this.calories = '';
            this.index = [];
        }
    }
}