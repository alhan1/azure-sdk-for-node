// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus/2012-R2-Datacenter/versions?$top=1&$orderby=name%20asc&api-version=2018-10-01')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151120\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151120\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7de11768-0411-44ae-a6dc-9b2904288864',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f2172481-97d0-4a83-8cda-935261afa23a',
  'x-ms-routing-request-id': 'WESTUS:20160315T015820Z:f2172481-97d0-4a83-8cda-935261afa23a',
  date: 'Tue, 15 Mar 2016 01:58:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus/2012-R2-Datacenter/versions?$top=1&$orderby=name%20asc&api-version=2018-10-01')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151120\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151120\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '303',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7de11768-0411-44ae-a6dc-9b2904288864',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'f2172481-97d0-4a83-8cda-935261afa23a',
  'x-ms-routing-request-id': 'WESTUS:20160315T015820Z:f2172481-97d0-4a83-8cda-935261afa23a',
  date: 'Tue, 15 Mar 2016 01:58:19 GMT',
  connection: 'close' });
 return result; }]];