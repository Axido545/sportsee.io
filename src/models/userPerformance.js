export class UserPerformance {
    id;
    subjects;
    data

    constructor(getUserPerformanceData) {

        if (getUserPerformanceData && getUserPerformanceData.data) {
            this.id = getUserPerformanceData.data.userId || null;
            this.subjects = this.mapSubjects(getUserPerformanceData.data.data, getUserPerformanceData.data.kind) || [];
            this.data = getUserPerformanceData.data.data || []
        } else {
            this.id = null;
            this.subjects = []
            this.data = []
        }
        console.log('ID:', this.id);
        console.log('Subjects:', this.subjects);
    }
    mapSubjects(data, kind) {
        if (data && Array.isArray(data) && kind && typeof kind === 'object') {
            const englishToFrench = {
                'intensity': 'intensité',
                'speed': 'vitesse',
                'strength': 'force',
                'endurance': 'endurance',
                'energy': 'énergie',
                'cardio': 'cardio'
            };
            const subjectOrder = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];
            const subjectsData = {};
            data.forEach(item => {
                const subjectName = kind[item.kind];
                const translatedSubjectName = englishToFrench[subjectName] || subjectName;
                subjectsData[translatedSubjectName] = {
                    subject: translatedSubjectName,
                    key: item.kind || null,
                    fullMark: item.value || null,
                };
            });
            return subjectOrder.map(subject => subjectsData[englishToFrench[subject]]);

        } else {
            console.error('Error: Data.data is not an array');
            return [];
        }
    }
}
