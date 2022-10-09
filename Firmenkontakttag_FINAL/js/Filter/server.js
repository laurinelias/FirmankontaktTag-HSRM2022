const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.post("/form", (req, res) => {
    console.log("Your data send ->  " +  JSON.stringify(req.body));
    res.json("Your data send ->  " +  JSON.stringify(req.body));
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
   });
