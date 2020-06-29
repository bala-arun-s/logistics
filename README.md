# LOGISTICS APPLICATION
## Description

The term ‘Logistics’ refers to the commercial activity of the transportation of goods i.e., transportation of goods from one place to the other. In the application we try to ease the process of Logistics. Here, we collect the details from the sender to know the destination of the receiver of the product and we also update the information as required by the receiver for their ease, to reduce the misconception of the address to require the package from the sender. This app works with the tie-ups provided by the Logistics service providers, for the transportation where we ensure the accurate precision for the delivery of the packages.

## UI-side

Ionic framework (v6.9.1) is used in the process of enabling the client-side workflow in the application. It also provides the ability to manage the front-end of the application.
Angular Js (v9.1.8) is used to enable the client-side scripting which is embedded in the ionic framework.

## Server-side

Node JS (v12.16.3) software is used in order to perform server-side programming where we use certain modules like Express and so on.

## Database

Mongo Db (v4.2.7) is a no-SQL database, which is used in order to store the information regarding the users of the application.

## Screen Navigation Flow

<p align="center">
<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Screen%20Navigation%20Flow%20.png" alt="Screen Navigation Flow" >
</p>

## Pages in this Application

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Description%20page.png" width="30%" align="right" alt="Description page">

### Description page
Initially the application loads with the ‘Description’ page where it describes the application in brief, where it welcomes the users and it has a welcome button at bottom which navigates to ‘log-in’ page.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Log-In%20page.png" width="30%" align="right" alt="Log-In page">

### Log-In page
The ‘Login’ page here the user can enter their username and password to get into the application. If the user is new to the application then they register by using the sign-up button which navigates to the ‘sign-up’ page.
Login button which navigates the user to the next page.
The page which wants to display after the login page is decided by the user type which was registered in the ‘sign-up’ page. If the user type is Sender-Receiver then it navigates to the ‘Sender-Receiver’ page, else if the user type is Service-Provider then it navigates to the ‘Service-Provider’ page.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Sign-Up%20page.png" width="30%" align="right" alt="Sign-Up page">

### Sign-Up page
In this page the user can register by entering their user data such as user name, mobile no, email id, password and select the user type.
The ‘User Type’ is divided into ‘Service-Provider’, ‘Sender-Receiver’ where the user chooses one from it. 
If the user is a normal client, like people using this app then the user must choose ‘Sender-Receiver’.
If the user is working in a Logistic service providing company which is already tie-upped to this app, then the user must choose ‘Service-Provider’. 
Sign up button which works the same as the Login button which navigates the user to the next page.
The page which wants to display after the login page is decided by the user type which was registered in this page at user type select option. If the user type is Sender-Receiver then it navigates to ‘Sender-Receiver’ page, else if the user type is Service-Provider then it navigates to the ‘Service-Provider’ page.

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Sign-Up%20page.select%20one.png" width="30%" alt="Sign-Up page.select one">
<table> <tr></tr> </table>

### Tab pages
There are two-tab pages Sender-Receiver page and Service-Provider page. These pages hold super tabs which can help to navigate between pages by clicking the tab name and also allows swipe between pages.

### Sender-Receiver pages
<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Sender-Receiver%20pages.png" width="40%" alt="Sender-Receiver pages">

Tab placed in this page is used to navigate between the About, Receiver and Sender page.

### Service-Provider pages
<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Service-Provider%20pages.png" width="40%" alt="Service-Provider pages">

Tab placed in this page is used to navigate between the About, Item-list and History page.
<table> <tr></tr> </table>

### About page
<p align="center">
<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/About%20page.png" width="45%" alt="About page">
</p>
This page is common to both the user type Sender-Receiver page and Service-Provider. It used to show the user data such as user name, mobile no, Gmail, user-type. It also has two buttons, a logout button is used to logout the user from the application and navigate to the login page, another button is edit button is used to modify the user data.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Receiver%20page.png" width="30%" align="right" alt="Receiver page">

### Receiver page
This page is used to show the current status of the packages which is currently on the movement to the user. And also shows the received packages like the history.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Sender%20page.png" width="30%" align="right" alt="Sender page">

### Sender page
This page is used to show the current status of the packages which is currently on the movement to the receiver by this user. And also shows the delivered packages like the history.
Floating button which is located at the bottom right corner of the page is used to load the ‘goods-to-send’ page under the sender tab.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Goods-to-send%20page.png" width="30%" align="right" alt="Goods-to-send page">

### Goods-to-send page
This page loads under the sender tab. Here users can enter sender and receiver information for new goods which are sent by the user.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/Item-list%20page.png" width="30%" align="right" alt="Item-list page">

### Item-list page
This page is provided to ‘Service Provider’ users, which enables them to remember the items which are all going to be delivered by them. It is provided with the ‘Delivered’ button on each item, which is clicked once the package is delivered to the client.
<table> <tr></tr> </table>

<img src="https://github.com/bala-arun-s/newlogistics/blob/master/raw/History%20Page.png" width="30%" align="right" alt="History Page">

### History Page
In this page, the ‘Service Provider’ users are enabled to view the ‘Delivered’ items which are previously delivered to their clients by them. It is stored in the database, to maintain a record of the delivery of the goods provided by them.
<table> <tr></tr> </table>

## Future updates
It is planned to include the ‘Email notification’ feature once the ‘Sender’ tries to send goods to ‘Receiver’ which would be generated automatically by the server to notify the ‘Receiver’.

<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
