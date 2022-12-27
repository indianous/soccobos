import { Author } from "./author";

export class Post {
    public id?: number;
    public title?: string;
    public content?: string;
    public description?: string;
    public published?: Date;
    public updated?: Date;
    public author?: Author;

    constructor (
        id?: number,
        title?: string,
        description?: string,
        content?: string,
        published?: Date,
        updated?: Date,
        author?: Author,
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.published = published;
        this.updated = updated;
        this.author = author;
    }
}