const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config()

const slackToken = process.env.TOKEN

run().catch(err => console.log(err));

async function run() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#oap',
    text: process.argv[2] || "default message" 
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}
