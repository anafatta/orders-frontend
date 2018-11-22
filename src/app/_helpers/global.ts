export class GlobalApp {
    constructor() { }
    get user(): any {
        return localStorage.getItem('currentUser');
    }
}
