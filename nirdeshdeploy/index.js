require('dotenv').config();

const express = require('express')
const app = express()
const port = 4000

const githubdata = {
  "login": "nirdeshbhesaniya",
  "id": 147792857,
  "node_id": "U_kgDOCM8j2Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/147792857?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/nirdeshbhesaniya",
  "html_url": "https://github.com/nirdeshbhesaniya",
  "followers_url": "https://api.github.com/users/nirdeshbhesaniya/followers",
  "following_url": "https://api.github.com/users/nirdeshbhesaniya/following{/other_user}",
  "gists_url": "https://api.github.com/users/nirdeshbhesaniya/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/nirdeshbhesaniya/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/nirdeshbhesaniya/subscriptions",
  "organizations_url": "https://api.github.com/users/nirdeshbhesaniya/orgs",
  "repos_url": "https://api.github.com/users/nirdeshbhesaniya/repos",
  "events_url": "https://api.github.com/users/nirdeshbhesaniya/events{/privacy}",
  "received_events_url": "https://api.github.com/users/nirdeshbhesaniya/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Bhesaniya Nirdesh Parsotambhai",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Techdevalopment",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-10-13T05:11:53Z",
  "updated_at": "2025-01-14T03:03:25Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.get('/github',(req,res)=>{
  res.json(githubdata)
 })

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login on TechindiA</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})