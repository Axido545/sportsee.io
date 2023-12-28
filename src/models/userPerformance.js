export class UserPerformance {
    id;
    subjects;

    constructor(getUserPerformanceData) {

        if (getUserPerformanceData && getUserPerformanceData.data) {
            this.id = getUserPerformanceData.data.userId || null;
            this.subjects = this.mapSubjects(getUserPerformanceData.data.data, getUserPerformanceData.data.kind) || [];
        } else {
            this.id = null;
            this.subjects = []
        }
        console.log('ID:', this.id);
        console.log('Subjects:', this.subjects);
    }
    mapSubjects(data, kind) {
        if (data && Array.isArray(data) && kind && typeof kind === 'object') {
            // return data.map(item => ([
            //     kind[item.kind],
            //     item.kind || null,
            //     item.value || null,
            // ]));
            return data.map(item => ([{
                subject: kind[item.kind],
                key: item.kind || null,
                fullMark: item.value || null,
            }]));
        } else {
            console.error('Error: Data.data is not an array');
            return [];
        }

    }
}
