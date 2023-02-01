import { Staff } from "src/shared/entities/Staff";
import { GenderViewModel } from "./gender.view-model";
import { UserViewModel } from "./user.view-model";

export class StaffViewModel {
  staffid: string;
  email: string;
  mobileNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  gender: GenderViewModel;
  user: UserViewModel;
  constructor(model: Staff | undefined) {
    if (!model || model === null) {
      return null;
    }
    this.staffid = model.staffid;
    this.firstName = model.firstName;
    this.middleName = model.middleName;
    this.lastName = model.lastName;
    this.fullName = `${model.firstName} ${
      model.middleName ? model.firstName + " " : " "
    }${model.lastName}`;
    this.email = model.email;
    this.mobileNumber = model.mobileNumber;
    this.gender = model.gender;
    this.user = new UserViewModel(model.user);
  }
}
