export class User {
    id;
    firstName;
    lastName;
    constructor(getUserData){
        if(getUserData && getUserData.data){
            this.id = getUserData.data.userId || null;
            this.firstName = getUserData.data.userInfos.firstName || '';
            this.lastName = getUserData.data.userInfos.lastName || '';
    } else {
        this.id = null;
            this.firstName = '';
            this.lastName = '';
    }
}
}