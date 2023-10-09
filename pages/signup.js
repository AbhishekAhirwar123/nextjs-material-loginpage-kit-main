import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import GridContainer from "../components/Grid/GridContainer.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "../styles/jss/nextjs-material-kit/pages/loginPage.js";
import axios from "axios"; // Import Axios for making API requests
import { useRouter } from "next/router";

import GridItem from "/components/Grid/GridItem.js";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

const useStyles = makeStyles(styles);

export default function SignupPage({ ...rest }) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  const [user, setUser] = useState({
    first_name: "",
    second_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateofbirth: "",
    gender: "male", // Default gender
    otp: "",
    type_id: "1",
  });

  const [otpEmail, setEmail] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    second_name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInput = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "first_name":
      case "second_name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMessage = "Only letters and spaces are allowed.";
        }
        break;
      case "email":
        if (!/^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
          errorMessage = "Invalid email address.";
        }
        break;
      case "password":
        if (value.length < 8) {
          errorMessage = "Password must be at least 8 characters long.";
        }
        break;
      case "phone":
        if (value.length < 10) {
          errorMessage = "phone must have 10 Digit long.";
        }
        break;
      case "dateofbirth":
        const currentDate = new Date();
        const inputDate = new Date(value);

        // Calculate the user's age
        const userAge = currentDate.getFullYear() - inputDate.getFullYear();

        // Check if the user is at least 18 years old
        if (userAge < 18) {
          errorMessage = "You must be at least 18 years old.";
        }
        break;
      case "confirmPassword":
        if (value !== user.password) {
          errorMessage = "Passwords do not match.";
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check validation before submitting
    if (isFormValid()) {
      try {
        const response = await axios.post("http://localhost:8080/api/auth/signup", user);
        if (response.status === 200) {
          // Signup successful, you can redirect to the login page
          console.log("user");
          alert("User Registration Sucessfully");
          router.push("/login");
        } else {
          console.error("Signup failed:", response.data);

        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    } else {
      console.log("Form is not valid. Please check the fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateInput(name, value);
  };

  // This is for Send Email OTP.
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setEmail({ ...otpEmail, [name]: value });
    validateInput(name, value);
  };
  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };


  // Form validation logic...
  const isFormValid = () => {
    return (
      !errors.first_name &&
      !errors.second_name &&
      !errors.email &&
      !errors.password &&
      !errors.dateofbirth &&
      !errors.confirmPassword &&
      user.first_name.trim() &&
      user.second_name.trim() &&
      user.email.trim() &&
      user.password.trim() &&
      user.password.length >= 8 &&
      user.phone.length >= 10 &&
      user.password === user.confirmPassword
    );
  };

  // Send OTP logic here...
  const handleSendOTP = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/signup/otp", otpEmail); // Adjust the URL to your backend endpoint.
    } catch (error) {
      console.error("Error during OTP:", error);
      alert("Error during OTP", error);
    };
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Return To Home"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516379527711-be1d17ccf71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container} >
          <GridContainer justify="center" >
            <GridItem xs={12} lg={6} md={4} >
              <Card className={classes[cardAnimaton]}  >
                <form className={classes.form} onSubmit={handleSubmit}  >
                  <Card className={classes.card}>
                    <CardHeader color="primary" className={classes.cardHeader} >
                      <h2 style={{ color: "black", fontWeight: "500", textDecorationLine: "underline" }}>Signup</h2>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          style={{ margin: '0px 30px' }}
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText={`First Name${errors.first_name ? ` - ${errors.first_name}` : ""}`}
                        id="first_name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          name: "first_name",
                          value: user.first_name,
                          onChange: handleInputChange,
                          onBlur: () => validateInput("first_name", user.first_name),
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        error={!!errors.first_name}
                      />

                      <CustomInput
                        labelText={`Last Name${errors.second_name ? ` - ${errors.second_name}` : ""}`}
                        id="second_name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          name: "second_name",
                          value: user.second_name,
                          onChange: handleInputChange,
                          onBlur: () => validateInput("second_name", user.second_name),
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        error={!!errors.second_name}
                      />

                      <CustomInput
                        labelText={`Email${errors.email ? ` - ${errors.email}` : ""}`}
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          name: "email",
                          value: user.email,
                          onChange: handleEmailChange,
                          onBlur: () => validateInput("email", user.email),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        error={!!errors.email}

                      />

                      <CustomInput
                        labelText={`Phone${errors.phone ? ` - ${errors.phone}` : ""}`}
                        id="phone"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "phone",
                          name: "phone",
                          value: user.phone,
                          onChange: handleInputChange,
                          onBlur: () => validateInput("phone", user.phone),
                          endAdornment: (
                            <InputAdornment position="end">
                              <PhoneIphoneIcon className={classes.inputIconsColor} />

                            </InputAdornment>
                          )
                        }}
                        error={!!errors.phone}
                      />

                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <label style={{ marginRight: '20px' }}>Date of birth</label>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          label="MM/DD/YYYY"
                          name="dateofbirth"  // Define the name here
                          value={user.dateofbirth}  // Define the value here
                          onChange={(date) => handleInputChange({ target: { name: 'dateofbirth', value: date } })} // Define the onChange handler here.
                        />
                      </DemoContainer>
                    </div>
                  </LocalizationProvider> */}

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <label style={{ marginRight: '20px' }}>Date of birth</label>
                          <DateField
                            label="MM/DD/YYYY"
                            name="dateofbirth"  // Define the name here
                            value={user.dateofbirth}  // Define the value here
                            onChange={(date) => handleInputChange({ target: { name: 'dateofbirth', value: date } })}
                            onBlur={() => validateInput("dateofbirth", user.dateofbirth)}
                          />
                        </div>
                      </LocalizationProvider>



                      <div style={{ width: "100%", display: 'flex', gap: "30px", alignItems: 'center' }}>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={handleSendOTP}
                        >
                          Send OTP
                        </Button>
                        <CustomInput
                          labelText="Enter OTP"
                          id="otp"
                          formControlProps={{
                            style: { marginLeft: '10px', flex: '1' },
                          }}
                          inputProps={{
                            type: 'text',
                            name: 'otp',
                            onChange: handleInputChange,
                          }}
                          error={!!errors.otp}
                        />
                      </div>
                      <CardBody>
                        <RadioGroup
                          aria-label="gender"
                          name="gender"
                          value={user.gender}
                          onChange={handleGenderChange}
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                        </RadioGroup>
                      </CardBody>

                      <CustomInput
                        labelText={`Password${errors.password ? ` - ${errors.password}` : ""}`}
                        id="password"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: showPassword ? "text" : "password",
                          name: "password",
                          value: user.password,
                          onChange: handleInputChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon
                                className={classes.inputIconsColor}
                                onClick={togglePasswordVisibility}
                                style={{ cursor: "pointer" }}
                              >
                                {showPassword ? "visibility" : "visibility_off"}
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off",
                          onBlur: () => validateInput("password", user.password),
                        }}
                        error={!!errors.password}
                      />

                      <CustomInput
                        labelText={`Confirm Password${errors.confirmPassword ? ` - ${errors.confirmPassword}` : ""}`}
                        id="confirmPassword"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          name: "confirmPassword",
                          value: user.confirmPassword,
                          onChange: handleInputChange,
                          onBlur: () =>
                            validateInput("confirmPassword", user.confirmPassword),
                        }}

                        error={!!errors.confirmPassword}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      {/* Submit Button */}
                      <Button
                        type="submit"
                        color="primary"
                        size="l"
                        disabled={!isFormValid()}
                      >
                        Signup
                      </Button>
                    </CardFooter>


                    <Link href="/login" >
                      <a className={classes.link} style={{ marginLeft: '210px' }}>
                        <Button color="primary" size="lg" simple>
                          Visit Login
                        </Button>
                      </a>
                    </Link>

                  </Card>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>

    </div>
  );
}
