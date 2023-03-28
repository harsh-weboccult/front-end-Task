import { type } from "os";
import React, { useState } from "react";
import { number } from "yup";

const HomePage = () => {
  //State for Managing value
  const [Theam, setmainTheam] = useState("clean");
  const [formcounter, setFormcounter] = useState(0);
  const [colorTheam, setColorTheam] = useState({
    Background_Color: "",
    Light_Color: "",
    Main_Color: "",
    Dark_Color: "",
  });
  const [TheamColor, SetTheamColor] = useState("white");

  const resetcolor = () => {
    setColorTheam({
      Background_Color: "",
      Light_Color: "",
      Main_Color: "",
      Dark_Color: "",
    });
  };
  const [formData, setformData] = useState({
    componeyName: "Componey Name",
    logo: "fa-users",
    website: "Your Website",
    fullName: "Your Name",
    designation: "Your Designation",
    Contact_number: "",
    Email: "Your Email",
  });

  // type e={
  //     e:React.MouseEvent<HTMLButtonElement>;
  //     target:object;
  // }
  function HandleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    //console.log(e.target.value);
    setmainTheam((e.target as HTMLButtonElement).value);
    setFormcounter(formcounter + 1);
  }

  const setcolor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorTheam({ ...colorTheam, [e.target.name]: e.target.value });
    console.log(colorTheam);
  };

  const setTheamColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetTheamColor(e.target.value);
  };

  const gonext = () => {
    setFormcounter(formcounter + 1);
  };
  const goback = () => {
    setFormcounter(formcounter - 1);
  };
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const allReset = () => {
    //For REset Color
    resetcolor();
    // For reset form counter
    setFormcounter(0);
    // for reset form  data
    setformData({
      componeyName: "Componey Name",
      logo: "fa-users",
      website: "Your Website",
      fullName: "Your Name",
      designation: "Your Designation",
      Contact_number: "",
      Email: "Your Email",
    });
  };
  const GetDawnoload = (e: React.FormEvent) => {
    e.preventDefault();

    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    // eslint-disable-next-line no-useless-escape
    const specialChars1 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    const isValidUrl = (urlString: any) => {
      var urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // validate fragment locator
      return !!urlPattern.test(urlString);
    };
    if (specialChars.test(formData.logo)) {
      alert("Should not contain special cerecter ");
      return;
    }
    if (
      specialChars1.test(formData.componeyName) ||
      specialChars1.test(formData.fullName) ||
      specialChars1.test(formData.designation)
    ) {
      alert("Should not contain special cerecter");
      return;
    }
    if (!isValidUrl(formData.website)) {
      alert("Url Should be valid ");
      return;
    }
    if (formData.Contact_number.length !== 10) {
      alert(" MObile Number Should be 10 charter ");
    } else {
      window.print();
    }
  };

  return (
    <>
      <section className="home-wrapper">
        <div className="container-xl main-layout">
          <h1 className="text-center">Card Desing</h1>
          <div className="row ">
            <div className="col-5 left">
              <div className="top"></div>
              <div className="bottom">
                {formcounter === 0 && (
                  <div className="form-1">
                    <button
                      className="btn btn-primary "
                      onClick={(e) => HandleSubmit(e)}
                      name="clean"
                      value="clean"
                    >
                      {" "}
                      Clean
                    </button>
                    <button
                      className="btn btn-primary "
                      onClick={(e) => HandleSubmit(e)}
                      value="satndard"
                      name="standard"
                    >
                      Standard
                    </button>
                  </div>
                )}
                {formcounter === 1 && (
                  <div className="form-2">
                    <h1>Select Color</h1>

                    {Theam === "clean" ? (
                      <div className="color_picker">
                        <input
                          type="radio"
                          name="color"
                          id=""
                          value="white"
                          onChange={setTheamColor}
                        />
                        white
                        <input
                          type="radio"
                          name="color"
                          id=""
                          value="black"
                          onChange={setTheamColor}
                        />
                        black
                      </div>
                    ) : (
                      <div className="color_picker">
                        BackGround Color:
                        <input
                          type="color"
                          name="Background_Color"
                          value={colorTheam.Background_Color}
                          id=""
                          onChange={(e) => setcolor(e)}
                        />
                      </div>
                    )}

                    <div className="color_picker">
                      Light Color:
                      <input
                        type="color"
                        name="Light_Color"
                        value={colorTheam.Light_Color}
                        id=""
                        onChange={(e) => setcolor(e)}
                      />
                    </div>
                    <div className="color_picker">
                      Main Color:{" "}
                      <input
                        type="color"
                        name="Main_Color"
                        value={colorTheam.Main_Color}
                        id=""
                        onChange={setcolor}
                      />
                    </div>
                    <div className="color_picker">
                      Dark Color:{" "}
                      <input
                        type="color"
                        name="Dark_Color"
                        value={colorTheam.Dark_Color}
                        id=""
                        onChange={setcolor}
                      />
                    </div>
                    <div className="button">
                      <button className="btn btn-primary" onClick={resetcolor}>
                        Reset
                      </button>
                    </div>
                    <div className="space1 w-100">
                      <button onClick={goback} className="btn btn-secondary">
                        Back
                      </button>
                      <button onClick={gonext} className="btn btn-secondary">
                        Next
                      </button>
                    </div>
                  </div>
                )}
                {formcounter === 2 && (
                  <div className="container">
                    <h3>Enter Detail:</h3>
                    <form onSubmit={GetDawnoload}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form1Example1"
                          maxLength={20}
                          minLength={2}
                          value={formData.componeyName}
                          required
                          name="componeyName"
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                          Company Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form1Example1"
                          maxLength={20}
                          minLength={2}
                          value={formData.logo}
                          name="logo"
                          required
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                          Logo
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form1Example1"
                          value={formData.website}
                          required
                          name="website"
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                          Website
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form1Example1"
                          maxLength={20}
                          minLength={2}
                          value={formData.fullName}
                          required
                          name="fullName"
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                          Full Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form1Example1"
                          maxLength={20}
                          minLength={2}
                          value={formData.designation}
                          required
                          name="designation"
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                          Designation
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          id="form1Example1"
                          maxLength={5}
                          value={formData.Contact_number}
                          required
                          name="Contact_number"
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example1">
                          Contect Number
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form1Example2"
                          value={formData.Email}
                          name="Email"
                          required
                          className="form-control"
                          onChange={handleData}
                        />
                        <label className="form-label" htmlFor="form1Example2">
                          Email Address
                        </label>
                      </div>
                      <button
                        className="btn btn-primary"
                        onSubmit={GetDawnoload}
                      >
                        Download{" "}
                      </button>
                      <button onClick={goback} className="btn btn-secondary">
                        Back
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6 right">
              <div className="box">
                <div className="space">
                  <button className="btn btn-primary" onClick={allReset}>
                    Reset{" "}
                  </button>
                </div>
                {/* 
                <div className="front_card_model " id="print">
                  {Theam === "clean" ? (
                    <FrontPart
                      TheamColor={TheamColor}
                      colorTheam={colorTheam}
                      formData={formData}
                    />
                  ) : (
                    <FrontStandardpart
                      TheamColor={TheamColor}
                      colorTheam={colorTheam}
                      formData={formData}
                    />
                  )}
                </div> */}
                {/* <div className="back_card_model" id="print1">
                  {Theam === "clean" ? (
                    <BackPart TheamColor={TheamColor} />
                  ) : (
                    <BackStandardpart
                      TheamColor={TheamColor}
                      colorTheam={colorTheam}
                      formData={formData}
                    />
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
