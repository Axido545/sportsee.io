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
    constructor(getUserData){
        if(getUserData && getUserData.data){
            this.id = getUserData.data.userId || null;
            this.firstName = getUserData.data.userInfos.firstName || '';
            this.lastName = getUserData.data.userInfos.lastName || '';
            this.calories = getUserData.data.keyData.calorieCount || '';
            this.protein = getUserData.data.keyData.proteinCount|| '';
            this.carbohydrate = getUserData.data.keyData.proteinCount || '';
            this.lipid = getUserData.data.keyData.proteinCount || '';
    } else {
        this.id = null;
            this.firstName = '';
            this.lastName = '';
            this.calories =  '';
            this.protein =  '';
            this.carbohydrate =  '';
            this.lipid =  '';
}
}
}