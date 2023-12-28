export class UserPerformance {
    id;
    kind;
    cardio;
    energy;
    endurance;
    strength;
    speed;
    intensity;

    constructor(getUserPerformanceData) {
        if (getUserPerformanceData && getUserPerformanceData.data) {
            this.id = getUserPerformanceData.data.userId || null;
            this.kind = getUserPerformanceData.data.kind || '';
            this.cardio = this.findValueByKind(getUserPerformanceData.data, 'cardio') || '';
            this.energy = this.findValueByKind(getUserPerformanceData.data, 'energy') || '';
            this.endurance = this.findValueByKind(getUserPerformanceData.data, 'endurance') || '';
            this.strength = this.findValueByKind(getUserPerformanceData.data, 'strength') || '';
            this.speed = this.findValueByKind(getUserPerformanceData.data, 'speed') || '';
            this.intensity = this.findValueByKind(getUserPerformanceData.data, 'intensity') || '';
        } else {
            this.id = null;
            this.kind = '';
            this.cardio = '';
            this.energy = '';
            this.endurance = '';
            this.strength = '';
            this.speed = '';
            this.intensity = '';
        }
    }

    findValueByKind(data, kindName) {
        const entry = data.find(item => item.kind === kindName);
        return entry ? entry.value : null;
    }
}

