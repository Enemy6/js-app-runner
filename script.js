// Run the npm install child_process if it not working, if it still not working use chat gpt to help
const { exec } = require('child_process');

// Replace 'path/to/app.exe' with the actual path to the app executable file
exec('path/to/app.exe', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
