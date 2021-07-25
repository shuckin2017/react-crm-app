const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

module.exports = async function getCalendar() {
  const database_id = process.env.NOTION_DATEBASE_ID_CALENDAR;
  const payload = {
    path: `databases/${database_id}/query`,
    method: 'POST'
  }
  const { results } = await notion.request(payload)

  const data = results.map(page => {
    return {
      id: page.id,
      name: page.properties.Name.title[0].text.content,
      description: page.properties.Description.rich_text[0].text.content,
      date: page.properties.Date.date.start,
      status: page.properties.Status.select.name,
      statusColor: page.properties.Status.select.color,
      program: page.properties.Program.relation,
      client: page.properties.Client.relation[0].id,
    }
  })
  return data;
};


// module.exports = async function getClients() {
//   const database_id = process.env.NOTION_DATEBASE_ID_CLIENTS;
//   const payload = {
//     path: `databases/${database_id}/query`,
//     method: 'POST'
//   }
//   const { results } = await notion.request(payload)

//   const clients = results.map(page => {
//     return {
//       id: page,
//     }
//   })
//   return clients
// };



