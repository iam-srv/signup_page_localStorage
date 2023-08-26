# signup_page_localStorage
created a signup page using local storage authentication using javascript

Handle authentication using local storage.
Create a ui as shown in the image ,make 2 pages - signup and profile
On clicking signup, use local storage to create the state of the user.
The state of the user saved in localstorage should contain all the properties of the user, plus should also consist of an access token - let this access token be a random 16-byte string generated by you randomly.
Once there is the state of user in the localstorage, redirect the user to a page called /profile. Display user’s details there
On clicking of the logout button, set all the states back to null and also get rid of the access token.
Using scripts ensure that when a user manually tries to go to /profile, if the local storage does not contain the accesstoken the user is redirected to the signup page.
Similarly if the localstorage has an accesstoken and tries to go to the signup page, using scripts ensures that the user can't do so and is redirected to the profile page.
Show success and errors as well as shown in the UI. All fields are mandatory for signup and similarly on successfully signing up show the message in green text and then redirect to /profile