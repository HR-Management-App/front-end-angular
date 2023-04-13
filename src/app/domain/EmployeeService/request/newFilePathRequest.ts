export class NewFilePathRequest {
    emp_id: number;
    title: string;
    path: string;
    constructor(emp_id: number,
        title: string,
        path: string) {
        this.emp_id = emp_id;
        this.title = title;
        this.path = path;
    }
}
