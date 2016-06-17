# untitled
Fresh out the oven project

#### Useful Links
- [Good guide on RESTful services] (http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)

#### User Stories
| Role  | Feature | Assigned To |
| --- | --- | --- |
| Guest | Sign up | Gabe |
| Guest | Log in | Gabe |
| Guest | Provide a guest username for chat or randomize nickname | Alex |
| User | Create a channel | Gabe |
| User | Follow a channel | Mike |
| User | Can 'like' a video | |
| User | Create a schedule | Gabe | 
| User | Add video to schedule from all videos or playlist, etc | John |
| User | Add a video to account | John |
| User | Create a playlist | John |
| User | Add video to playlist from all videos or other playlists, etc | John |
| User | Can perform admin chat activities | |
| User | Report channels/video | Alex |
| User | Report a user  for 'slingin slurs' | Alex |
| All | Browse through a list of channels | Mike |
| All | View a channel | Mike |
| All | View chat | Alex |
| All | Participate in chat | |
| All | View user profiles | |

#### Prerequisite
- Install [NodeJS] (https://nodejs.org/en/download)
- Install [Git] (https://git-scm.com/downloads)
- Install [Brackets] (https://brackets.io) (Optional, any editor will do)

#### Development Stack
- [MongoDB] (https://www.mongodb.com)
- [Express] (https://expressjs.com)
- [React] (https://facebook.github.io/react)
- [NodeJS] (https://nodejs.org/en)

#### Naming Standards
- Abide by [AirBnB React Naming Standards] (https://github.com/airbnb/javascript/tree/master/react#basic-rules) for React
- General CSS
  - Use hyphens for file names
  ```
  a-css-file.css
  ```
  - Use hyphens for classes
  ```
  .somegroup-css
  ```
- General JavaScript
  - Use hyphens for file names
  ```
  a-js-file.js
  ```
  - Use camelCase for variable names
  ```
  var someVariable
  ```
- API
  - Use hyphens for context paths that have more than 1 word in urls. This does NOT apply to variables in the url.
  ```
  untitled.com/video-games/Overwatch
  ```
  - Use camelCase for key/value pair based messages (JSON, url-encoded, etc)
  ```
  [HTTP BODY]
  {
    username: azle,
    password: 11499
  }
  ```
- MongoDB
  - Use underscores for collection names
  ```
  chatroom_servers
  user_to_channel_bridge
  ```
  - Use camelCase for document attributes
  ```
  {
    username: azle,
    password: 11499
  }
  ```
  
#### Pull the Project & Run the Project
```shell
mkdir untitled
git init
git pull https://github.com/toka-io/untitled.git
npm install
npm start
```

#### Tips
When designing a restful service, please provide the following:
```
url: /user/:userId/login
type: post
content-type: application/json
body:
{
  username: azle,
  password: 11499
}

required headers: none
required cookies: sessionId
```

#### Remaining Tasks
| Task  | Developer | Due |
| --- | --- | --- |
| Design restful service calls for user data  | Gurtej Singh  | 6/7 |
| Design restful service calls for channel data  | Gabriel Rodriguez  | 6/7 |
| Design restful service calls for media data  | John West  | 6/7 |
| Design restful service calls for chatroom data  | Andy Lim  | 6/7 |
| Post restful service mockup(s) on github | Alex, Gabe, John | 7/11 |
| Access youtube data api, build sample call | | 7/11 |

#### Completed Tasks
| Task  | Developer | Due |
| --- | --- | --- |
| Read up on ExpressJS and MongoDB | Mike Lambert, Alex Griffin  | 5/31 |
| Design any collection already listed (or not listed) and create in mLab | Mike Lambert, Alex Griffin  | 5/31 |
| Go over restful design with Andy | Mike Lambert, Alex Griffin  | 5/31 |
| Create user collection in mLab  | Gurtej Singh  | 5/31  |
| Create channel collection in mLab  | Gabriel Rodriguez  | 5/31  |
| Create media collection in mLab  | John West  | 5/31  |
| Create chatroom collection in mLab  | Andy Lim | 5/31  |

#### API(s) 
| API  | Key |
| --- | --- |
| Youtube Data API | AIzaSyCLpDjTdey4mrFeg2GGgSlN6YR0Mzf2h0w |
gmail: guestatmydoor@gmail.com/gitgud2016
