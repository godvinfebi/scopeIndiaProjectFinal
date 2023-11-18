const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer')
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.json());

const bcrypt = require('bcrypt');
//const oneDay = 1000 * 60 * 60 * 24;
const jwt = require('jsonwebtoken')


// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() to parse JSON
app.use(bodyParser.urlencoded({ extended: true }));
// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'godvin_batch',
});
let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'godvinfebi2002@gmail.com',
    pass: 'ewvjquouxserwerm',
  },
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.message);
    process.exit(1); // Exit the application if database connection fails
  } else {
    console.log('Connected to MySQL database');
  }
});

// Route to handle the POST request
app.post('/api/register', (req, res) => {
  const {
    username,
    email,
    dob,
    qualification,
    course,
    number,
    gender,
    guardiansmobile,
    guardiansname,
    guardiansoccupation,
  
    address,
    country,
    state,
    city,
    pinZipcode,
    trainingmode,
    location,
    time
  } = req.body;
  const sql = 'INSERT INTO scopeindia ' +
  '(username, email, dob, qualification, course, number, gender, guardiansmobile, guardiansname, guardiansoccupation, address, country, state, city, pinZipcode, trainingmode, location, time,password) ' +
  'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"")';


  const values = [
    username,
    email,
    dob,
    qualification,
    course,
    number,
    gender,
    guardiansmobile,
    guardiansname,
    guardiansoccupation,
    address,
    country,
    state,
    city,
    pinZipcode,
    trainingmode,
    location,
    time
  ];
console.log(  username,
  email,
  dob,
  qualification,
  course,
  number,
  gender,
  guardiansmobile,
  guardiansname,
  guardiansoccupation,
  
  address,
  country,
  state,
  city,
  pinZipcode,
  trainingmode,
  location,
  time);
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into MySQL: ' + err.message);
      res.status(500).json({ error: 'An error occurred while inserting data.' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});
app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  // Check if the email and password combination exists in the database
  const sql = 'SELECT * FROM scopeindia WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying MySQL: ' + err.message);
      res.status(500).json({ error: 'An error occurred while querying the database.' });
    } else {
      if (results.length === 1) {
        // Valid login: Email and password combination exists

        let token = jwt.sign({ email },"secret")
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful', token: token });
      } else {
        // Invalid login: Email and password combination not found
        console.log('Invalid login');
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  });
});



app.get('/getuserdata', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify the token and get the user's email
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const email = decoded.email;

    // Query the database to get the username based on the user's email
    const query = 'SELECT username FROM scopeindia WHERE email = ?';

    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length === 1) {
        const userData = results[0].username;
        return res.json({ username: userData });
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    });
  });
})

// 


app.post('/send-login-password', (req, res) => {
  try {
    // Check if the email exists in the database
    const user = db.query('SELECT * FROM scopeindia WHERE email = ?', [req.body.email],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log("UESR FRO DB....");
        console.log(result);
        if(result.length == 0){
           // If the email does not exist in the database, return an error response
          res.status(404).json({ error: 'Email not found' });
          
        } else{

         
          // Generate a random password (you should implement a more secure method)
           const password = generateRandomPassword();
       
           // Update the password in the database
           db.query('UPDATE scopeindia SET password = ? WHERE email = ?', [password, req.body.email]);
       
           // Send email
           const mailOptions = {
             from: 'godvinfebi2002@gmail.com',
             to: req.body.email, 
             subject: 'Your Login Password',
             text: `Your login password is: ${password}`,
           };
       
           transport.sendMail(mailOptions, (error, info) => {
             if (error) {
               console.error('Error sending email:', error);
               res.status(500).json({ error: 'Error sending email' });
             } else {
               console.log('Email sent successfully:', info.response);
               res.status(200).json({ message: 'Email sent successfully' });
             }
           });
         }
      }
    });
   

    
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});




// Function to generate a random password 
function generateRandomPassword(length) {
  
  // Generate a random 4-digit number
const min = 1000; // Minimum 4-digit number
const max = 9999; // Maximum 4-digit number

const password = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(password);


  return password;
}

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  console.log(otp);
  const sql = 'SELECT * FROM scopeindia WHERE email = ? AND password = ?'; // Match the SQL field name with "password"
  db.query(sql, [email, otp], (err, result) => {
    console.log(otp);
    // Check if the provided OTP matches the one stored in the database
    if (err) {
      console.error('Error verifying OTP:', err);
      res.status(500).json({ message: 'Failed to verify OTP' });
    } else if (result.length > 0) {
      res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ message: 'Invalid OTP' });
    }
  });
});



// Password update route
app.post('/api/updatePassword/:id', (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.params.id;

  // Fetch the old password from the 'scopeindia' table
  db.query('SELECT password FROM scopeindia WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Error fetching old password:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const storedOldPassword = results[0].password;

    if (oldPassword !== storedOldPassword) {
      return res.status(401).json({ message: 'Old password is incorrect' });
    }

    // Update the password in the 'scopeindia' table
    db.query('UPDATE scopeindia SET password = ? WHERE id = ?', [newPassword, userId], (err) => {
      if (err) {
        console.error('Error updating password:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      res.status(200).json({ message: 'Password updated successfully' });
    });
  });
});

//About.js
app.post('/api/saveCourse', (req, res) => {
  const { courseName } = req.body;

  if (!courseName) {
    return res.status(400).json({ message: 'Invalid request data.' });
  }

  // Insert the course into the 'course' table
  const insertQuery = 'INSERT INTO course (courseName) VALUES (?)';

  db.query(insertQuery, [courseName], (err, results) => {
    if (err) {
      console.error('Error inserting data into the database: ', err);
      return res.status(500).json({ message: 'Internal server error.' });
    } else {
      return res.status(200).json({ message: 'Course saved successfully.' });
    }
  });
});

app.get('/api/courses', async (req, res) => {
    db.query('SELECT * FROM course',(err, results) => {
      res.json(results); 
    });
    
});
const secretKey = 'secret';
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.userEmail = decoded.email; // Attach decoded email to the request
    next(); // Continue with the next middleware or route handler
  });
}

// Define the /api/profile endpoint
app.get('/api/profile', verifyToken, (req, res) => {
  const { userEmail } = req;

  // Query the database to retrieve user data based on the email
  const query = 'SELECT * FROM scopeindia WHERE email = ?';

  db.query(query, [userEmail], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 1) {
      const userData = {
        username: results[0].username,
        email: results[0].email,
        course: results[0].course,
        number: results[0].number,
        qualification: results[0].qualification,
      };

      return res.json(userData);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  });
});
// Define the /api/profile/update endpoint
app.put('/api/profile/update', verifyToken, (req, res) => {
  const { userEmail } = req;
  const { username, course, number, qualification } = req.body;

  // Update the user's profile in the database based on the email
  const updateQuery = 'UPDATE scopeindia SET username=?, course=?, number=?, qualification=? WHERE email=?';

  db.query(updateQuery, [username, course, number, qualification, userEmail], (err, results) => {
    if (err) {
      console.error('Error updating profile in the database:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    return res.json({ message: 'Profile updated successfully' });
  });
});

PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    

