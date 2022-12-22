export class Post {
    public id: number;
    public title: string;
    public content: string;
    public description: string;
    public published: Date;
    public updated: Date;

    constructor (
        id: number,
        title: string,
        description: string,
        content: string,
        published: Date,
        updated: Date,
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.published = published;
        this.updated = updated;
    }
}