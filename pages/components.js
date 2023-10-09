import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
import TextField from '@mui/material/TextField';
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";









const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      

      <Parallax image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">

        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.subtitle}>ALL DISCOUNTS JUST FOR YOU subtitle</h1>
                <h3 className={classes.title}>
                  FIND BEST RENTAL BIKE
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>







      <div className={classNames(classes.main, classes.mainRaised)}>
        <h1 className={styles.details} style={{ color: "red", display: "flex", alignItems: "center", justifyContent: "center" }}>All The Details are here</h1>
        <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />

<TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />

<TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        /> <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
         <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label="bikefield"
          size="medium"
          margin="none"
        />
        
      </div>

    </div>
  );
}
