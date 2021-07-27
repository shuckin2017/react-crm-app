const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})


module.exports = async function getClients() {
  const database_id = process.env.NOTION_DATEBASE_ID_CLIENTS;
  const payload = {
    path: `databases/${database_id}/query`,
    method: 'POST'
  }
  const { results } = await notion.request(payload)

  const clients = results.map(page => {
    return {
      id: page,
    }
  })
  return clients
};



