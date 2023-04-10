export class Visa {
    visaType: string;
    // activeFlag: boolean;
    startDate: Date;
    endDate: Date;
    lastModificationDate: Date;

    constructor(
        visaType: string,
        // activeFlag: boolean,
        startDate: Date,
        endDate: Date,
        // lastModificationDate: Date,
    ) {
        this.visaType = visaType;
        // activeFlag: boolean;
        this.startDate = startDate;
        this.endDate = endDate;
        // this.lastModificationDate = lastModificationDate;
    }
}
