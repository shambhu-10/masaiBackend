main difference between PUT & POST (imp)
- post will be seen everywhere in http protocol
- put is follow IDEMPOTENCY (the operation no. 2 and onwards will have same effect as operation no. 1)
eg: GET/user/1 => {id: 1, name: "vishal} - if we call this request agani again then there will not change in output

DELETE /user/1 => deleting a user id 1

- DELETE is also IDEMPOTENT

PUT /user/1 => {id: 1, name: "shambhu"}- put will update the user 3 times
PUT /user/1 => {id: 1, name: "shambhu"}
PUT /user/1 => {id: 1, name: "shambhu"}

POST /user/1 => {id: 1, name: "shambhu"} - post will create the user 3 times
POST /user/1 => {id: 1, name: "shambhu"} 
POST /user/1 => {id: 1, name: "shambhu"} 


imp -> why we write const fs = require("fs) , why require only
correct syntax : import express from "express

QUERY PARAMS ->

https://students.google.com/search?q=neomacro

protocol subdomain      TLD  path/    Query   params