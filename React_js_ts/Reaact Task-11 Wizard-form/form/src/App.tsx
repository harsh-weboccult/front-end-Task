import React, { useState } from "react";
import WizardForm from "./Pages/WizardForm";
import { formdata, initianvalue } from "./utils/Model.data";

function App() {
  const [formData, setFormData] = useState<formdata>({
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
  });
  const [updateData, setUpdateData] = useState<formdata | undefined>();

  return (
    <>
      <WizardForm
        formData={formData}
        updateData={updateData}
        setUpdateData={setUpdateData}
        setFormData={setFormData}
        initianvalue={initianvalue}
      />
    </>
  );
}

export default App;
