import express from 'express';

const app = express();

// app.get('/', (req,res) => {
//     res.send("server is ready!");
// })
const jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything." },
    { id: 2, joke: "Why don't eggs tell jokes? They'd crack each other up." },
    { id: 3, joke: "Why did the tomato turn red? Because it saw the salad dressing." },
    { id: 4, joke: "What do you call a fake noodle? An impasta." },
    { id: 5, joke: "Why did the scarecrow win an award? Because he was outstanding in his field." }
  ];
  
  app.get('/api/jokes', (req, res) => {
    res.send(jokes);
  });

const port = process.env.PORT  || 3000;

app.listen(port, ()=>{
    console.log(`server run at http://localhost:${port}`);
    
});

