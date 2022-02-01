export class User {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  country: string;
  state: string;
  address: string;
  bio: string;
  dob: string;
  age: string;

  constructor(
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    country: string,
    state: string,
    address: string,
    bio: string,
    dob: string,
    age: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.country = country;
    this.state = state;
    this.address = address;
    this.bio = bio;
    this.dob = dob;
    this.age = age;
  }
}
