export interface formdata {
  id: string | null;
  firstName: string | null;
  lastName: string;
  gender: string;
  email: string;
  contactNo: number | null | string;
  dob: string;
  favouriteSport: string;
  aboutMe: string;
  isChecked: boolean;
  hour?: string;
  zipCode?: string;
  ipAddress?: string;
  money?: number | null;
}

export interface FormTypes {
  setFormData: (val: formdata) => void;
  formData: formdata;
  setActiveKey: (val: string) => void;
  setshowData?: any;
  showData?: any;
  formStates: any;
  updateData: any;
  setFormStates: any;
  setupdatehHandleDelete?: any;
  setUpdateData?: any;
}

export const validateMessages = {
  required: "${label} is required!",

  types: {
    redio: "${label} is not a valid email!",
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },

  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export const initianvalue: any = {
  id: null,
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  contactNo: null,
  dob: "",
  favouriteSport: "",
  aboutMe: "",
  isChecked: false,
  hour: "",
  zipCode: "",
  ipAddress: "",
  money: null,
};
