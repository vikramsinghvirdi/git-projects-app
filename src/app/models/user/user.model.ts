/* User model to define properties for current logged in user
*/
export class User {
    id: any;
    name: string;
    avatar_url: string;
    profile_url: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.avatar_url = obj && obj.avatar_url || null;
        this.profile_url = obj && obj.html_url || null;
      }
    

}
