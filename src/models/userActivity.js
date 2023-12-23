export class userActivity {
    id;
    session;
    day;
    kilogram;
    calories;   
    constructor(getUseActivityData){
        if(getUseActivityData && getUseActivityData.data){
            this.id = getUseActivityData.data.userId || null;
            this.session = getUseActivityData.data.sessions || '';
            this.day = getUseActivityData.data.sessions.day || '';
            this.kilogram =  getUseActivityData.data.sessions.kilogram || '';
            this.calories = getUseActivityData.data.sessions.calories || '';
    } else {
        this.id = null;
            this.session = '';
            this.day = '';
            this.kilogram = '';
            this.calories =  '';
}
}
}