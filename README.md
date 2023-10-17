# My Wedding Planner 

### Portfolio Project 5 Advanced Frontend 


My Wedding Planner is an image sharing and networking platform for weddings. As a future bride and groom, you can find inspiration for your big day. The site is also perfect for wedding photographers and florists as their work is perfect for the target audience of the site. As a photographer, you can market yourself and find many new clients.

![my wedding](../my-wedding/readme/amiresponsive.png)

### Live wedsite here: [My Wedding Planner](https://my-wedding-planner-300e07d6f1f5.herokuapp.com/)

- [Project](#project)
- [User Experience](#user-experience-ux)
- [Wireframes](#wireframes)
- [Design](#design)
- [Features](#features)
- [Future features & improvments](#future-features--improvments)
-[Components & hoos](#components-and-hooks)
- [Technology](#technology)
- [Testing](#testing)
- [Development & Installations](#development--installations)
- [Deployment](#deployment)


# Project 
The objective of this project was to create a fifth portfolio project for Code Institutes program, Full Stack SoftWare Developer. The website is build using React, JSX, CSS and its connected to a beckend API build with Django Rest Framework.
The application contains full CRUD functionallity to create, update and delete posts and todos. 

The project is based on the course material Moments walketrough.

## Site User Goal
Users of My Wedding coukld have several goals, sush as wanting to share there own posts and take part of others users posts. Networking with people 
with the same interests as you. Maybe you will find new friends who are also getting married and can share thoughts and ideas with them.

Or maybe you are a photographer and wants to be discovered by potential customers. On My Wedding you have the right target group right in front of you.

## Owner User Goal
As a siteowner the goal is to provide a stable and enjoyable user experience. The website should be accessible, appealing and contain content that is well structured.

## Planning the project

Github project board was used in the process of building this wedsite. This process helped me keep track of which user stories was in progress and which was done. Issues that wont be finished before the deadline of project in added to the - [Project board](https://github.com/users/Myekman/projects/7)

### User Experience
To plan the project GitHub issues was used to write all User Stories and also Bugs trough development. 

- [User Stories](https://github.com/Myekman/my-wedding/issues)


### Wireframes
Wireframes created using [Balsamiq](https://balsamiq.com/) to plan the general design on lager and smaller screen sizes. 

#### Homepage / feed / Liked posts
This pages has the same design but the it display's diffrent kinds of posts. Feed is only displaying posts from the profiles i follow. Homepage displays all posts and liked displays all liked posts from the logged in profile. 

[Home,Feed,Liked](../my-wedding/readme/homepage.pp5.png)

[ProfilePage](../my-wedding/readme/profilepage.ppg.png)

[Add post page](../my-wedding/readme/addposts.ppf.png)

[Todo page & TodoForm](../my-wedding/readme/todopage.ppg.png)


# Design

### Typography
The font  throughout the website is Playfair Display imported fron [Google Fonts](#https://fonts.google.com/)

### Color Sheme
the color sheme is at the most part grey and discret to match easily with all shared images on the site. Accentcolors on buttons are pink and green 
to achieve a romantic feeling.  

## Images

Images that is uploaded are imported frpn [Pexles](#https://www.pexels.com/)


# Featues

<details>
<summary>Home page</summary>

![Home page](../my-wedding/readme/home.feature.png)

</details>

<details>
<summary>Feed</summary>

![Feed](../my-wedding/readme/feed.feature.png)

</details>

<details>
<summary>Liked with (No results)</summary>

![Liked](../my-wedding/readme/liked.notfound.png)

</details>

<details>
<summary>Profilepage</summary>

![Profilepage](../my-wedding/readme/profilepage.feature.png)

</details>

<details>
<summary>Add post</summary>

![Add Post](../my-wedding/readme/addpost.feature.png)

</details>

<details>
<summary>Edit post</summary>

![Edit Post](../my-wedding/readme/editpost.feature.png)

</details>

<details>
<summary>My Todos</summary>

![My Todos](../my-wedding/readme/todopage.feature.png)

</details>

<details>
<summary>Add Todo</summary>

![Add Todo](../my-wedding/readme/todoform.new.png)

</details>

<details>
<summary>Edit Todo</summary>

![Edit Todo](../my-wedding/readme/edittodo.new.png)

</details>

<details>
<summary>Navbar</summary>

![Navbar](../my-wedding/readme/navbar.new.png)

</details>

<details>
<summary>Follow / Unfollow</summary>

![follow/unfollow](../my-wedding/readme/follow.feature.png)

</details>




# Future features & improvments

### Todolist can be checked as done 
To keep track of the planning, it would be good if you could save all the todos but only check them off as done when they are completed. 

### The design of Todolist can be imporoved
the design can be improved for a better user experience. Maybe save each todo in a card to make it look cleaner.

### Delete comments
Post owner can delete unwanted comments on their own posts.

### Create a budget page
Budget page so that the bride and groom can keep track of how much the whole party will cost. There they can enter prices for everything that is booked and to be booked before the big day.

# Components & hooks

## Components
My Wedding contains unique components that has been used in this project.

#### 1. Asset: 
- A loading spinner
- Image 
- Message 

2. Avatar
Displays the profile image.

3. MoreDropDowm:
Displays the dropdown menu of edit or deleting posts or todos.

4. Navbar
Displays he navbar at the top of the site trough entire website. 

5. NotFound
Used with the Asset component and displays a message for the user if they navigate to a non existing url.

## Hooks

- useClickOutsideToggle: provides a convenient way to handle the closing of the navbar and can be implemented in feature featues if needed.
- useRedirect: redirects the user depending on user authorization status.

# Technology

## Languages
- JSX 
- HTML 
- CSS
- JavaScript
- Python

## Frameworks
- React
- React Bootstrap
- Django Rest Framework

# Testing

Bugs has been noted trough development and checked as solved when solved in issues. All bugs are fixed. 
- [Fixed Bugs](https://github.com/Myekman/my-wedding/issues)

### Manually testing

| Goals/actions  | As a guest | As a logged user  | Result | Comment |
|----------------|:----------:|:-----------------:|:------:|---------|
| As a logged in user can use navbar and navigating through pages | | &check; | Pass | As a visitor you only have the homepage and signup in navbar. 
As a fisrt time visitor i register by clicking signup | &check; | |  Pass| |
| As a firs time visitor OR logged in users can se the homepages posts and visit other profiles  | &check; | &check; | Pass | Both for logged in users and first time visitors can access this pages |
| As a first time visitor OR logged in users i can seach posts on homepage and get results back from my searched keyword | &check;   | &check;  | Pass |  |
| I can like & comment other profiles posts |  |&check;  |  Pass| If you are logged out you cant like or comment |
| I can follow or unfollow other profiles |  |&check;  |  Pass| If you are logged out you dont se the follow/unfollow buttons |
| As a logged in user i can share posts |  |&check;  |  Pass| This page are only avalible for logged in users |
| As a logged in user i can add todo to my private todolist  |  |&check;  |  Pass| This page are only avalible for logged in users |
|As a logged in user i can edit/delete both my todos and posts |  |  &check; | Pass |  |
| In Feed page i can se posts from the profiles i follow | | &check;  | Pass |  This page are only avalible for logged in users |
| In Liked page i can se all the posts i have liked from other profiles | | &check;  | Pass |  This page are only avalible for logged in users |
| If i have not liked any images from other profile my liked page will return message of no results found| | &check;  | Pass |   |
| If im not following any profiles the feed page will return message of no results found | | &check;  | Pass |   |
|In my Profilepage i can se all my followers and followed profiles count go up and down if i follow or unfollow someone   |  | &check;  | Pass |  |
| As a logged in user i can edit my username/password/profileimage and bio in my profilepage  |   | &check;  | Pass |  |
| As a logged in user i can comment on other profiles posts  |  | &check;  | Pass |  |
| As a logged in user i can edit or delete my comment |   | &check;  | Pass |  |

### JSX 
JSX code have manually been validated and adjusted throughout development via direct feedback from npm in the terminal.

### Lighthouse

My Wedding have been tested using Chrome developer lighthouse tester. 
[lighthouse](../my-wedding/readme/lighthouse.p55.png)

# Development & Installations

## Github and Gitpod
The repository was created in Github with this [template](https://github.com/Code-Institute-Org/ci-full-template).
<br>
Steps:
- Click the button use this template and choose your repository name.
- Create repository and open it up with Gitpod to start building the prject.

Trough development you should commit your code 
regularly:
- git add .
- git commit -m "commit message"
- git push

### The Backend
The project contains both backend and frontend code but i started with building the backend API with Django-Rest-Framework.
<br>
The Structure and relationship between the models in the backend can you view here: [Models Relationship](../my-wedding/readme/relations.model.png)

This are the steps to begin a new project:
- pip3 install 'django<4'
- django admin startproject mywedding (or the name of your project)

- pip install django-cloudinary-storage (we install this to store all our images)
- pip install Pillow (This installation have image process capabillity we need fot the project)

you must add cloudinary in installed apps and save the api key from cloudinary in an end.py file like this os.environ['CLOUDINARY_URL'] = 'your cloudinary api key'

#### Create a superuser
- python manage.py createsuperuser
- python manage.py runserver
- add /admin in the url to be able to log in with your created superuser

#### Install Django-Rest-Framework
- pip install djangorestframework
- remember to add it in installed apps in settings.py
- Add the login and log out view that comes with the rest framework to the main urls: path('api-auth/', include('rest_framework.urls')),
(this adds the login/out functionality to the admin panel)


### Install Dj-rest-auth
- pip3 install dj-rest-auth==2.1.9
- add to installed apps: 
'rest_framework.authtoken' &
 'dj_rest_auth'.

#####  (install below this to make users register).
- install 'dj-rest-auth[with_social]'
- add apps:    
    'django.contrib.sites'
    <br>
    'allauth',
    <br>
    'allauth.account',
    <br>
    'allauth.socialaccount',
    <br>
    'dj_rest_auth.registration',

- add this below installed apps: 
<br>
SITE_ID = 1

- add to main urls:
<br>
path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')
    ),

#### Json wedTokens:
- pip install djangorestframework-simplejwt


 ### Database
 The Database that was used to build this project [ElephantSQL](https://www.elephantsql.com/)

### The Frontend 
#### Create React App
To create a react app inside the same repository as your backend follow this steps:
- Create a folder named frontend
- make sure you are in this folder when creating the react app with following command:
<br>
npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm

- When using the template it will setup necessary files to run React.
- you need to run: "cd frontend" , "npm install" and then you can open the react app with "npm start". 
- Create a Procfile in the root directory and add web: serve -s build.
- Folders for components, hooks, pages, contexts, css etc is created in the src directory.


# Deployment

## Heroku 
The Deployed version is stored on Heroku, to create and store your Project to heroku follow this steps:
- Log into Heroku or create an account.
- Click ´New´ create new heroku app. Give the app an app name and select your region, I chose Europe.
- Under the project deploy tab, select GitHub for the deployment method. Search for the repository name and click connect. Scroll down to the manual deployment section and click deploy branch. Make sure you have the main branch selected.

You need to save your configvars on heroku settings by clicking the button "reveal config vars"
and then add them. 

# Credits 
- [CI Moments](https://github.com/Code-Institute-Solutions/moments)
- [Heroku](https://heroku.com/)
- [Font awesome](https://fontawesome.com/)
- [React bootstrap](https://react-bootstrap-v4.netlify.app/)
- [W3Schools](https://www.w3schools.com/)
- [Cloudinary](https://cloudinary.com/)
- [Google fonts](https://fonts.google.com/)
- [React documentation](https://react.dev/)
- [Get bootstrap](https://getbootstrap.com/)
- [Pexels](https://www.pexels.com/)
- [Balsamiq](https://balsamiq.com/)
- [ElephantSQL](https://www.elephantsql.com/)
- [Am I Responsive](https://ui.dev/amiresponsive)


- Code institute tutor for help with dubugging 
- My mentor Martina for feedback and support
- Friends and family for manual testing and input





