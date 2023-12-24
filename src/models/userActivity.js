export class UserActivity {
    id;
    sessions;
    day;
    kilogram;
    calories;   
    constructor(getUseActivityData){
        if(getUseActivityData && getUseActivityData.data){
            this.id = getUseActivityData.data.userId || null;
            this.sessions = getUseActivityData.data.sessions || [];
            this.day = getUseActivityData.data.sessions.day || '';
            this.kilogram =  getUseActivityData.data.sessions.kilogram || '';
            this.calories = getUseActivityData.data.sessions.calories || '';
    } else {
        this.id = null;
            this.sessions = [];
            this.day = '';
            this.kilogram = '';
            this.calories =  '';
}
}
}