export class UserPerformance {
    id;
    kind;
    cardio;
    energy;
    endurance;
    strength;
    speed;
    intensity;

    constructor(getUserPerformanceData){
        if(getUserPerformanceData && getUserPerformanceData.data){
            this.id = getUserPerformanceData.data.userId || null;
            this.kind = getUserPerformanceData.data.kind || '';
            this.cardio = this.findValueByKind(getUserPerformanceData.data, 1) || 0;
            this.energy =  this.findValueByKind(getUserPerformanceData.data, 2) || 0;
            this.endurance = this.findValueByKind(getUserPerformanceData.data, 3) || 0;
            this.speed = this.findValueByKind(getUserPerformanceData.data, 5) || 0;
            this.intensity = this.findValueByKind(getUserPerformanceData.data, 6) || 0;
    } else {
        this.id = null;
            this.kind = '';
            this.cardio = 0;
            this.energy = 0;
            this.endurance =  0;
            this.strength = 0;
            this.speed = 0;
            this.intensity =  0;
}
}

findValueByKind(data, kind) {
    const entry = data.find(item => item.kind === kind);
    return entry ? entry.value : null;
}
}

