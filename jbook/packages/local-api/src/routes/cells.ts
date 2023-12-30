import express from 'express';

const router = express.Router();

router.get('/cells', async (req, res) => {
  // make sure the cell storage file exists
  // If the file does not exist, add in default list of cells

  // Read the file
  // Parse a list of cells out of it
  // Send list of cells back to browser
});

router.post('/cells', async (req, res) => {
  // Make sure the file exists
  // I fnot, create it

  // Take the list of cells from the request object
  // Serialize them (turn into to format that can be read)
  // Write the cells into the file
});