Provide a UML diagram showcasing the architecture of your API.

![UML](./Screenshot%202023-09-06%20at%207.22.02%20PM.png)

Document the data and program flow for your API, including the mapping of Routes and Functions, as well as the flow of data.

What is the root URL to your API?

Invoke this API at: https://biw45bbf36.execute-api.us-west-2.amazonaws.com/undefined/

What are the routes?

- Post: /*/POST/people
- Get: /*/GET/people/*
- Put: /*/PUT/people/*
- Delete: /*/DELETE/people
- "*" = ID

What inputs do they require?
(Post)The Create will require ID, Name and Age
(Get)The Read route will require an ID
(Put)The Update will require an Id and the data that is being changed
The delete route will require the ID

What output do they return?
(Post)The Create route will create a new object in the lambda table
(Get)The Read route will provide the object that was requested
(Put)The update route will send back the updated object
The delete Route will give a "successfully deleted" message when the targeted object has been deleted
