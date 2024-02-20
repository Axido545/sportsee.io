export class UserPerformance {
    id;
    subjects;
    data

    constructor(getUserPerformanceData) {

        if (getUserPerformanceData && getUserPerformanceData.data) {
            this.id = getUserPerformanceData.data.userId || null;
            this.subjects = this.mapSubjects(getUserPerformanceData.data.data, getUserPerformanceData.data.kind) || [];
            this.data = getUserPerformanceData.data.data || []
            this.sortData(); // Appel de la méthode pour réorganiser les données

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
            return data.map(item => ({
                subject: kind[item.kind],
                key: item.kind || null,
                fullMark: item.value || null,
            }));
        } else {
            console.error('Error: Data.data is not an array');
            return [];
        }

    }
    sortData() {
        this.data.sort((a, b) => {
            // Comparaison numérique du sujet (en tant qu'entier)
            return parseInt(a.key) - parseInt(b.key);
        });
    }
}
