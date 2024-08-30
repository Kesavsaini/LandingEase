"use server"
 import analyticsAdmin from '@google-analytics/admin';
// TODO(developer): Uncomment this variable and replace with your
  // Google Analytics 4 property ID before running the sample.
  const propertyId = '456064184';

  // Imports the Google Analytics Data API client library.
  import {BetaAnalyticsDataClient} from '@google-analytics/data';

  // Initialize client that will be used to send requests. This client only
  // needs to be created once, and can be reused for multiple requests.
  const analyticsDataClient = new BetaAnalyticsDataClient();

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
      console.log(
        `${row.dimensionValues[0].value},${row.dimensionValues[1].value}, ${row.metricValues[0].value}`
      );
      report.push({
        date: dateFormate(row.dimensionValues[1].value),
        path: row.dimensionValues[0].value,
        views: row.metricValues[0].value
      });
    });
    console.log("See rows",JSON.stringify(report));
    return report;
  }