export class PersonalDocument {
    path: string;
    title: string;
    comment: string;
    createDate: Date;

    constructor(
        path: string,
        title: string,
        // comment: string,
        // createDate: Date,
    ) {
        this.path = path;
        this.title = title;
        // this.comment = comment;
        // this.createDate = createDate;
    }
}
