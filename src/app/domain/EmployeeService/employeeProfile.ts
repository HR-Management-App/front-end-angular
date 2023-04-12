import { Address } from './address';
import { Contact } from './contact';
import { PersonalDocument } from './personal.document';
import { Visa } from './visa';

export class employeeProfile {
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
  email: string;
  cellPhoneNumber: string;
  workPhoneNumber: string;
  gender: string;
  ssn: string;
  dob: Date;
  startDate: Date;
  endDate: Date;
  driverLicense: string;
  driverLicenseExpiration: Date;
  // HouseID: number;
  contactList: Contact[];
  currentAddress: Address;
  visaStatus: Visa;
  personalDocumentList: PersonalDocument[];

  constructor(
    firstName: string,
    lastName: string,
    middleName: string,
    preferredName: string,
    email: string,
    cellPhoneNumber: string,
    workPhoneNumber: string,
    gender: string,
    ssn: string,
    dob: Date,
    driverLicense: string,
    driverLicenseExpiration: Date,
    // HouseID: number;
    contactList: Contact[],
    currentAddress: Address,
    visaStatus: Visa,
    personalDocumentList: PersonalDocument[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.preferredName = preferredName;
    this.email = email;
    this.ssn = ssn;
    this.dob = dob;
    this.gender = gender;
    this.currentAddress = currentAddress;
    this.cellPhoneNumber = cellPhoneNumber;
    this.workPhoneNumber = workPhoneNumber;
    this.visaStatus = visaStatus;

    this.driverLicense = driverLicense;
    this.driverLicenseExpiration = driverLicenseExpiration;
    // HouseID = HouseID;
    this.contactList = contactList;

    this.personalDocumentList = personalDocumentList;
  }
}
