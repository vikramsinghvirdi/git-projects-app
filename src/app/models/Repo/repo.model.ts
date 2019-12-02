/*
* Repo model to define properties for repos of organization on GitHub
*/
export class Repo {

    id: any;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks: number;
    watchers_count: number;
    tags: any;
    url: any;
    created_at: any;
    updated_at: any;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.language = obj && obj.language || null;
        this.stargazers_count = obj && obj.stargazers_count || 0;
        this.forks = obj && obj.forks || 0;
        this.watchers_count = obj && obj.watchers_count || 0;
        this.tags = obj && obj.tags || [];
        this.url = obj && obj.svn_url || null;
        this.created_at = obj && new Date(obj.created_at) || null;
        this.updated_at = obj && new Date(obj.updated_at) || null;
      }
    

}
