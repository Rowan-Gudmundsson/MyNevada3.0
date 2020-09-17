# Submission for the rework of UNR's "MyNevada" site

## A First Look

### Login Page

![LoginPage](/docs/images/LoginScreen.png)

As you can see, all of the information in the original login page has been preserved without overloading the user. The UI is intuitive and clean providing all the functionality you come to expect from web apps including autofill features and responsiveness.

![ErrorReporting](/docs/images/ErrorReporting.png)

Another improvement on the existing login page is tying errors to specific fields.

![Popups](/docs/images/Popups.png)

Hiding information from the user behind additional popouts is vital for keeping the UI clean and accessible while still being intuitive to use. This example shows that by pressing the "?" button next to the NetID field we are given more information about the field.

![Responsive](/docs/images/Responsive.png)

One of the biggest problems for me as a student with the old site was the lack of responsiveness (scaling on mobile / smaller screens). A goal for this rework is to solve this by making every component scalable while maintaining the same functionality as shown in the image above.

##  Building

### Dependencies

* [Node.js and npm](https://nodejs.org/en/)

### Installing packages

```shell
$> cd frontend
$> npm i
```

### Starting the Development Server

```shell
$> cd frontend
$> npm start
```
