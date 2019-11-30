export class Org {
    id: any;
    name: string;
    repos_count: number;
    avatar: string;
    url: string;
    created_at: any;
    updated_at: any;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.repos_count = obj && obj.public_repos || 0;
        this.avatar = obj && obj.avatar || null;
        this.url = obj && obj.url || null;
        this.created_at = obj && new Date(obj.created_at) || null;
        this.updated_at = obj && new Date(obj.updated_at) || null;
      }
    

}
