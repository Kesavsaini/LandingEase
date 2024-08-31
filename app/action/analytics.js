"use server"
 import analyticsAdmin from '@google-analytics/admin';
// TODO(developer): Uncomment this variable and replace with your
  // Google Analytics 4 property ID before running the sample.
  const propertyId = process.env.PROPERTY_ID;

  // Imports the Google Analytics Data API client library.
  import {BetaAnalyticsDataClient} from '@google-analytics/data';

  // Initialize client that will be used to send requests. This client only
  // needs to be created once, and can be reused for multiple requests.
  const analyticsDataClient = new BetaAnalyticsDataClient({credentials:{
    project_id: process.env.GAC_PROJECT_ID,
    private_key_id: process.env.GAC_PRIVATE_KEY_ID,
    private_key: process.env.GAC_PRIVATE_KEY,
    client_email: process.env.GAC_CLIENT_EMAIL,
    client_id: process.env.GAC_CLIENT_ID,
    auth_uri: process.env.GAC_AUTH_URI,
    token_uri: process.env.GAC_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GAC_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GAC_CLIENT_X509_CERT_URL,
    universe_domain: process.env.GAC_UNIVERSE_DOMAIN
  }}
  );

  // Runs a report of active users grouped by country.
 export async function runReport({domain}) {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dimensions: [
        {
          name: 'pagePath',
        },
        {
          name:'date'
        }
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
      dateRanges: [
        {
          startDate: '28daysAgo',
          endDate: 'today',

        },
      ],
      dimensionFilter: {
        andGroup: {
          expressions: [
            {
              filter: {
                fieldName: 'pagePath',
                stringFilter: {
                  matchType: 'EXACT',
                  value: domain,
                },
              },
            },
          ],
        },
      },
    });
    return printRunReportResponse(response);
  }


  const dateFormate=(date)=>{
    return date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6);
  }
  // Prints results of a runReport call.
  function printRunReportResponse(response) {
    const report=[]
    response.rows.forEach(row => {
      report.push({
        date: dateFormate(row.dimensionValues[1].value),
        path: row.dimensionValues[0].value,
        views: row.metricValues[0].value
      });
    });
    return report;
  }