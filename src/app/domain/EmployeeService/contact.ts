export class Contact {
    firstName: string;
    lastName: string;
    cellPhone: string;
    // alternatePhone: string;
    email: string;
    relationship: string;

    constructor(
        firstName: string,
        lastName: string,
        cellPhone: string,
        // alternatePhone: string,
        email: string,
        relationship: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellPhone = cellPhone;
        // this.alternatePhone = alternatePhone;
        this.email = email;
        this.relationship = relationship;
    }
}
