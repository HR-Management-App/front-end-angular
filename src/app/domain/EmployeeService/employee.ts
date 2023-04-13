import { Address } from "./address";
import { Contact } from "./contact";
import { PersonalDocument } from "./personal.document";
import { Visa } from "./visa";

export class Employee {
    userID: number;
    firstName: string;
    lastName: string;
    middleName: string;
    preferredName: string;
    email: string;
    cellPhone: string;
    alternatePhone: string;
    gender: string;
    ssn: string;
    dob: Date;
    startDate: Date;
    endDate: Date;
    driverLicense: string;
    driverLicenseExpiration: Date;
    // HouseID: number;
    contactList: Contact[];
    addressList: Address[];
    visaStatusList: Visa[];
    personalDocumentList: PersonalDocument[];

    constructor(
        userID: number,
        firstName: string,
        lastName: string,
        middleName: string,
        preferredName: string,
        email: string,
        cellPhone: string,
        alternatePhone: string,
        gender: string,
        ssn: string,
        dob: Date,
        startDate: Date,
        endDate: Date,
        driverLicense: string,
        driverLicenseExpiration: Date,
        // HouseID: number,
        contactList: Contact[],
        addressList: Address[],
        visaStatusList: Visa[],
        personalDocumentList: PersonalDocument[],
    ) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.preferredName = preferredName;
        this.email = email;
        this.cellPhone = cellPhone;
        this.alternatePhone = alternatePhone;
        this.gender = gender;
        this.ssn = ssn;
        this.dob = dob;
        this.startDate = startDate;
        this.endDate = endDate;
        this.driverLicense = driverLicense;
        this.driverLicenseExpiration = driverLicenseExpiration;
        // HouseID = HouseID;
        this.contactList = contactList;
        this.addressList = addressList;
        this.visaStatusList = visaStatusList;
        this.personalDocumentList = personalDocumentList;
    }


}
