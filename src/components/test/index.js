const os = require("os");

const local = {
  "Home Directory": os.homedir(),
  "Operating System": os.type(),
  "Last Reboot": os.uptime(),
  type: os.type(),
};

console.log(local);
