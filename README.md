[![Build Status](https://dev.azure.com/mhk19/mahak_g/_apis/build/status/mhk19.engage-teams?branchName=master)](https://dev.azure.com/mhk19/mahak_g/_build/latest?definitionId=1&branchName=master)

<div style="display:flex; align-items:center">
<img src='./src/assets/images/logo.svg'/>
<h1>PiperChat</h1>
</div>

> A cross-platform chat and call platform.

Demo Video - https://youtu.be/Ai5NdTQmOZQ

## Introduction

PiperChat is a cross-platform video-calling and chat application with a sleek and intuitive UX, developed using Microsoft Azure Services.

## Features

1. User Authentication 
2. Chat
    
    1. Chats of video call are retained i.e, users can continue the conversation after the meeting and start the conversation before the meeting.
    2. Real-time Notification for incoming chat messages so that user doesn't miss any message.
3. Video Call

   1. Mute yourself.
   2. Turn off your video.
   3. Change the microphone.
   4. Change the speaker.
   5. Chat during the meeting which is retained even after the meeting.

## The Application of Agile Methodology

1. In the first step of development, the use cases, tech stack and feasibility of project were decided.

2. As the second step, UI/UX designs were made. Here is the [figma file](https://www.figma.com/file/gTRYRZmlEnU11bXk8xJv3f/PiperChat?node-id=5%3A216).

3. Development was done in 2 sprints -

   1. User Authentication and just video chat.
   2. Other video chat features like device management, outgoing video and audio management, chat during call were done.

4. The features developed were released in production.
5. Adapt feature was announced. So the 1st and 2nd second steps were repeated.
6. Home page of the application where users can chat with each other was developed in a sprint.
7. The complete app was released in production.

> One sprint was generally of 4-5 days.

## Tech Stack

1. Client - React Framework
2. Server - NodeJS
3. Database - Azure CosmosDB (MongoDB)
4. For video call and chat - Azure communication services
5. For hosting the server - Azure Ubuntu VM
6. UI Library - Microsoft FluentUI Library

## Setup instructions
> Install node and create azure cosmos db and azure communication services accounts.

1. Clone the repository.
2. Create a directory env in server folder and create a file env.js in it. Add the following details in env.js file -
```
const env = {
  // cosmos db details
  dbName: ,
  key: ,
  port: ,
  // Azure communication services details
  communicationString: ,
};

export default env;
```
3. Change the serverURL in src/config/config.js to `http://localhost:3001`
4. Run `npm install` and then `npm start` in root to start the client.
5. Run `cd server && node server.js` to run the server.
6. Access the app at http://localhost:3000

Developed by Mahak Gupta (gmahak1@gmail.com)
> This project is submission of Microsoft Engage 2021.
