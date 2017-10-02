module.exports = {
  getQuill: function () {
    request = require('request');
    options = {
      method: 'POST',
      url: 'https://prod-quill2-saas-runtime.narrativescience.com/v4/editorial/59cd206e8250414c88732a05/story/',
      headers: {
        'content-type': 'application/json',
        'x-ns-template': '59cd3807825041510d732a05',
        'x-ns-accepts': 'html',
        'x-ns-api-token': '58ab0565a08eaf67550a77a1'
      },
      body: JSON.stringify({"candSummary":{"summary":{"attributes":{"cand_name":"Pelosi, Nancy","cid":"N00007360","cycle":"2016","state":"CA","party":"D","chamber":"H","first_elected":"1987","next_election":"2016","total":"4318118.79","spent":"3478460.87","cash_on_hand":"1820817.85","debt":"0","origin":"Center for Responsive Politics","source":"http://www.opensecrets.org/politicians/summary.php?cid=N00007360&cycle=2016","last_updated":"12/31/2016"}}},"candContrib":{"attributes":{"cand_name":"Nancy Pelosi (D)","cid":"N00007360","cycle":"2016","origin":"Center for Responsive Politics","source":"http://www.opensecrets.org/politicians/contrib.php?cid=N00007360&cycle=2016","notice":"The organizations themselves did not donate, rather the money came from the organization's PAC, its individual members or employees or owners, and those individuals' immediate families."},"contributor":[{"attributes":{"org_name":"ActBlue","total":"77543","pacs":"0","indivs":"77543"}},{"attributes":{"org_name":"Facebook Inc","total":"16450","pacs":"10000","indivs":"6450"}},{"attributes":{"org_name":"Alphabet Inc","total":"15875","pacs":"10000","indivs":"5875"}},{"attributes":{"org_name":"Federation of American Hospitals","total":"15000","pacs":"15000","indivs":"0"}},{"attributes":{"org_name":"Akonadi Foundation","total":"10800","pacs":"0","indivs":"10800"}},{"attributes":{"org_name":"Certain Software Inc","total":"10800","pacs":"0","indivs":"10800"}},{"attributes":{"org_name":"Mackenzie Capital Management","total":"10800","pacs":"0","indivs":"10800"}},{"attributes":{"org_name":"Marcus & Millichap","total":"10800","pacs":"0","indivs":"10800"}},{"attributes":{"org_name":"Peter G Peterson Foundation","total":"10800","pacs":"0","indivs":"10800"}},{"attributes":{"org_name":"National Education Assn","total":"10525","pacs":"10000","indivs":"525"}}]},"candIndustry":{"industries":{"attributes":{"cand_name":"Nancy Pelosi (D)","cid":"N00007360","cycle":"2016","origin":"Center for Responsive Politics","source":"http://www.opensecrets.org/politicians/industries.php?cid=N00007360&cycle=2010","last_updated":"05/16/2017"},"industry":[{"attributes":{"industry_code":"Q02","industry_name":"Democratic/Liberal","indivs":"297276","pacs":"500","total":"297776"}},{"attributes":{"industry_code":"H01","industry_name":"Health Professionals","indivs":"24216","pacs":"204000","total":"228216"}},{"attributes":{"industry_code":"W06","industry_name":"Retired","indivs":"186749","pacs":"0","total":"186749"}},{"attributes":{"industry_code":"Q08","industry_name":"Women's Issues","indivs":"166194","pacs":"5000","total":"171194"}},{"attributes":{"industry_code":"P04","industry_name":"Public Sector Unions","indivs":"625","pacs":"101000","total":"101625"}},{"attributes":{"industry_code":"Q10","industry_name":"Misc Issues","indivs":"81103","pacs":"15000","total":"96103"}},{"attributes":{"industry_code":"B12","industry_name":"Electronics Mfg & Equip","indivs":"21687","pacs":"69500","total":"91187"}},{"attributes":{"industry_code":"K01","industry_name":"Lawyers/Law Firms","indivs":"52644","pacs":"33000","total":"85644"}},{"attributes":{"industry_code":"F10","industry_name":"Real Estate","indivs":"36892","pacs":"46000","total":"82892"}},{"attributes":{"industry_code":"F07","industry_name":"Securities & Investment","indivs":"46080","pacs":"34500","total":"80580"}}]}},"memPFDprofile":{"member_profile":{"attributes":{"name":"Pelosi, Nancy","data_year":"2014","member_id":"N00007360","net_low":"9761059","net_high":"192784988","positions_held_count":"12","asset_count":"69","asset_low":"42811059","asset_high":"200250000","transaction_count":"18","tx_low":"364018","tx_high":"915000","source":"http://www.opensecrets.org/pfds/summary.php?cid=N00007360","origin":"Center for Responsive Politics","update_timestamp":"02/28/17"},"assets":{"asset":[{"attributes":{"name":"Commercial Property/San Francisco, CA","holdings_low":"5000001","holdings_high":"25000000","industry":"Real Estate","sector":"Finance/Insur/RealEst","subsidiary_of":""}},{"attributes":{"name":"Home & Vineyard/St Helena/Napa, CA","holdings_low":"5000001","holdings_high":"25000000","industry":"Beer, Wine & Liquor","sector":"Misc Business","subsidiary_of":""}},{"attributes":{"name":"Nine Forty Five Battery LLC","holdings_low":"5000001","holdings_high":"25000000","industry":"Real Estate","sector":"Finance/Insur/RealEst","subsidiary_of":""}},{"attributes":{"name":"Russell Ranch LLC","holdings_low":"5000001","holdings_high":"25000000","industry":"Real Estate","sector":"Finance/Insur/RealEst","subsidiary_of":""}},{"attributes":{"name":"United Football League Ltd","holdings_low":"5000001","holdings_high":"25000000","industry":"Recreation/Live Entertainment","sector":"Misc Business","subsidiary_of":""}}]},"transactions":{"transaction":[{"attributes":{"asset_name":"Visa Inc","tx_date":"Dec 29 2014","tx_action":"Sold","value_low":"100001","value_high":"250000"}},{"attributes":{"asset_name":"Hertz Global Holdings","tx_date":"Nov 25 2014","tx_action":"Purchased","value_low":"50001","value_high":"100000"}},{"attributes":{"asset_name":"Robert Half International","tx_date":"Sep 22 2014","tx_action":"Sold","value_low":"50001","value_high":"100000"}},{"attributes":{"asset_name":"SunEdison Inc","tx_date":"Oct 24 2014","tx_action":"Purchased","value_low":"50001","value_high":"100000"}},{"attributes":{"asset_name":"Visa Inc","tx_date":"Dec 30 2014","tx_action":"Sold","value_low":"50001","value_high":"100000"}}]},"positions":{"position":[{"attributes":{"title":"Honorary Advisory Board","organization":"American University Women & Politics Institute"}},{"attributes":{"title":"Board of Advisors","organization":"Close Up Foundation"}},{"attributes":{"title":"Congressional Advisory Board","organization":"International Women's Democracy Center"}},{"attributes":{"title":"Board of Trustees Member Ex Officio","organization":"Kennedy Center for the Performing Arts"}},{"attributes":{"title":"Honorary Board of Advisors","organization":"Lead America"}}]}}}}),
    };
    request(options, function(error, response, body) {
      console.log(body);
    });
  }
}

