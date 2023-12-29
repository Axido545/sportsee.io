export class User {
    id;
    firstName;
    lastName;
    age;
    score;
    calories;
    protein;
    carbohydrate;
    lipid
    constructor(getUserData) {
        if (getUserData && getUserData.data) {
            this.id = getUserData.data.userId || null;
            this.firstName = getUserData.data.userInfos.firstName || '';
            this.lastName = getUserData.data.userInfos.lastName || '';
            this.age = getUserData.data.userInfos.age || ''
            // opérateur ternaire pour vérifier chaque propriété de score
            this.score = {
                value:
                    getUserData.data.score !== undefined ? formatScore(getUserData.data.score) :
                        getUserData.data.todayScore !== undefined ? formatScore(getUserData.data.todayScore) : ''
            };
            this.calories = getUserData.data.keyData.calorieCount || '';
            this.protein = getUserData.data.keyData.proteinCount || '';
            this.carbohydrate = getUserData.data.keyData.carbohydrateCount || '';
            this.lipid = getUserData.data.keyData.lipidCount || '';
        } else {
            this.id = null;
            this.firstName = '';
            this.lastName = '';
            this.age = '';
            this.score = { value: '' };
            this.calories = '';
            this.protein = '';
            this.carbohydrate = '';
            this.lipid = '';
        }
    }
}
// Fonction pour formater le score
function formatScore(score) {
    const formattedScore = (score * 100).toFixed(2);
    return formattedScore.endsWith('.00') ? parseInt(formattedScore) : formattedScore;
}
