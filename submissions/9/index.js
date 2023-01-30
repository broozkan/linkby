const { Client } = require('pg')
const client = new Client()
await client.connect()

const data = [
    {
        campaignId: 5550,
        views: 3,
        metadata: {
            overrideDate: "2022-12-13T17:51:54Z",
            incrementInteger: 4,
            ignoredDate: "2022-01-01T10:00:00Z"
        }
    },
    {
        campaignId: 5551,
        views: 23,
        metadata: { overrideDate: "2022-12-15T17:51:54Z", incrementInteger: 1, ignoredDate: "2022-02-01T10:00:00Z" }
    },
    {
        campaignId: 5552,
        views: 56,
        metadata: {
            overrideDate: "2022-12-1717:51:54Z",
            incrementInteger: 6,
            ignoredDate: "2022-03-01T10:00:00Z"
        }
    }
]


let preparedSql = ''
for (let i = 0; i < data.length; i++) {
    const { campaignId, views, metadata } = data[i]
    const metadataString = JSON.stringify(metadata)
    const valuesString = `VALUES(1,100,'{ "overrideDate": ${new Date()}, "incrementInteger": ${metadata.incrementInteger}, "ignoredDate": ${new Date()} }')`
    preparedSql += `INSERT INTO campaign_stats
    ${valuesString}
    ON CONFLICT(campaign_stats.campaignId) DO UPDATE SET metadata = '${metadataString}';;`
}

const sql = preparedSql
await client.query(sql)
await client.end()