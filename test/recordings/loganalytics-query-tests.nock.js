// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://api.loganalytics.io:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/v1/workspaces/DEMO_WORKSPACE/query', '*')
  .reply(200, "{\"tables\":[{\"name\":\"PrimaryResult\",\"columns\":[{\"name\":\"OperationName\",\"type\":\"string\"},{\"name\":\"Level\",\"type\":\"string\"},{\"name\":\"ActivityStatus\",\"type\":\"string\"},{\"name\":\"ActivitySubstatus\",\"type\":\"string\"},{\"name\":\"ResourceGroup\",\"type\":\"string\"},{\"name\":\"SubscriptionId\",\"type\":\"string\"},{\"name\":\"CorrelationId\",\"type\":\"string\"},{\"name\":\"Caller\",\"type\":\"string\"},{\"name\":\"CallerIpAddress\",\"type\":\"string\"},{\"name\":\"Category\",\"type\":\"string\"},{\"name\":\"HTTPRequest\",\"type\":\"string\"},{\"name\":\"Properties\",\"type\":\"string\"},{\"name\":\"EventSubmissionTimestamp\",\"type\":\"datetime\"},{\"name\":\"Authorization\",\"type\":\"string\"},{\"name\":\"ResourceId\",\"type\":\"string\"},{\"name\":\"OperationId\",\"type\":\"string\"},{\"name\":\"ResourceProvider\",\"type\":\"string\"},{\"name\":\"Resource\",\"type\":\"string\"},{\"name\":\"EventDataId\",\"type\":\"string\"},{\"name\":\"TenantId\",\"type\":\"string\"},{\"name\":\"TimeGenerated\",\"type\":\"datetime\"},{\"name\":\"SourceSystem\",\"type\":\"string\"},{\"name\":\"Type\",\"type\":\"string\"}],\"rows\":[[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Succeeded\",\"OK (HTTP Status Code: 200)\",\"ContosoAzureHQ\",\"e4272367-5645-4c4e-9c67-3b74b59a6982\",\"0954e683-bea7-4a94-b3b7-17e57069f635\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"191.238.145.40\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"5965cc66-a3ba-442b-8c5a-05beee9fd018\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"191.238.145.40\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"{\\r\\n  \\\"statusCode\\\": \\\"OK\\\",\\r\\n  \\\"serviceRequestId\\\": \\\"514a2341-069c-45d4-b2e4-b1333b56ddb2\\\"\\r\\n}\",\"2018-06-13T10:58:09.144Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\\\"\\r\\n}\",\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\",\"0954e683-bea7-4a94-b3b7-17e57069f635\",\"Microsoft.Storage\",\"chqdiagk7owxak6tjx7u\",\"61e3255a-db71-40a6-86da-8a71626e323a\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:57:41.748Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Started\",\"\",\"ContosoAzureHQ\",\"e4272367-5645-4c4e-9c67-3b74b59a6982\",\"0954e683-bea7-4a94-b3b7-17e57069f635\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"191.238.145.40\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"5965cc66-a3ba-442b-8c5a-05beee9fd018\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"191.238.145.40\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"\",\"2018-06-13T10:58:09.144Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\\\"\\r\\n}\",\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\",\"0954e683-bea7-4a94-b3b7-17e57069f635\",\"Microsoft.Storage\",\"chqdiagk7owxak6tjx7u\",\"b56371d0-8085-4491-9278-5e2802ac870a\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:57:41.701Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Succeeded\",\"OK (HTTP Status Code: 200)\",\"ContosoAzureHQ\",\"e4272367-5645-4c4e-9c67-3b74b59a6982\",\"f973e2ce-4826-44fc-9362-4dd90d4b9b40\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"191.238.145.40\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"5965cc66-a3ba-442b-8c5a-05beee9fd015\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"191.238.145.40\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"{\\r\\n  \\\"statusCode\\\": \\\"OK\\\",\\r\\n  \\\"serviceRequestId\\\": \\\"e4fa642a-ffa4-4983-b111-6183f36ce104\\\"\\r\\n}\",\"2018-06-13T10:57:50.166Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\\\"\\r\\n}\",\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\",\"f973e2ce-4826-44fc-9362-4dd90d4b9b40\",\"Microsoft.Storage\",\"chqdiagk7owxak6tjx7u\",\"5d602af0-5551-486e-b975-e07c3b9ee022\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:57:30.155Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Started\",\"\",\"ContosoAzureHQ\",\"e4272367-5645-4c4e-9c67-3b74b59a6982\",\"f973e2ce-4826-44fc-9362-4dd90d4b9b40\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"191.238.145.40\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"5965cc66-a3ba-442b-8c5a-05beee9fd015\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"191.238.145.40\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"\",\"2018-06-13T10:57:50.165Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\\\"\\r\\n}\",\"/subscriptions/e4272367-5645-4c4e-9c67-3b74b59a6982/resourceGroups/ContosoAzureHQ/providers/Microsoft.Storage/storageAccounts/chqdiagk7owxak6tjx7u\",\"f973e2ce-4826-44fc-9362-4dd90d4b9b40\",\"Microsoft.Storage\",\"chqdiagk7owxak6tjx7u\",\"13a77ff3-8a6b-4571-9987-37a15c5f0b21\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:57:30.092Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Succeeded\",\"OK (HTTP Status Code: 200)\",\"BitnamiELK\",\"85d819e7-0e0a-451d-91eb-82c7a0764cf9\",\"f729df99-2d47-4070-aebb-76883158190e\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"23.96.114.155\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"a725acfd-4414-4c43-b26c-f2227bbe258d\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"23.96.114.155\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"{\\r\\n  \\\"statusCode\\\": \\\"OK\\\",\\r\\n  \\\"serviceRequestId\\\": \\\"1ee6e6bb-9b19-4b3d-9f94-600eb1167a2f\\\"\\r\\n}\",\"2018-06-13T10:58:58.171Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/BitnamiELK/providers/Microsoft.Storage/storageAccounts/bitnamielkdiag101\\\"\\r\\n}\",\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/BitnamiELK/providers/Microsoft.Storage/storageAccounts/bitnamielkdiag101\",\"f729df99-2d47-4070-aebb-76883158190e\",\"Microsoft.Storage\",\"bitnamielkdiag101\",\"4c1c600d-7b5b-470d-a01a-a8f9b799448b\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:58:37.089Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Started\",\"\",\"BitnamiELK\",\"85d819e7-0e0a-451d-91eb-82c7a0764cf9\",\"f729df99-2d47-4070-aebb-76883158190e\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"23.96.114.155\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"a725acfd-4414-4c43-b26c-f2227bbe258d\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"23.96.114.155\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"\",\"2018-06-13T10:58:58.171Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/BitnamiELK/providers/Microsoft.Storage/storageAccounts/bitnamielkdiag101\\\"\\r\\n}\",\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/BitnamiELK/providers/Microsoft.Storage/storageAccounts/bitnamielkdiag101\",\"f729df99-2d47-4070-aebb-76883158190e\",\"Microsoft.Storage\",\"bitnamielkdiag101\",\"f5419f51-ff42-4f26-87b3-cef39db992b2\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:58:37.026Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Succeeded\",\"OK (HTTP Status Code: 200)\",\"ContosoLoanApp1\",\"85d819e7-0e0a-451d-91eb-82c7a0764cf9\",\"36b4edc8-3f13-4c0b-8866-caf41d4e1bfa\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"23.102.233.53\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"6425da6d-eb94-4d1f-aed6-98e3a230d68d\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"23.102.233.53\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"{\\r\\n  \\\"statusCode\\\": \\\"OK\\\",\\r\\n  \\\"serviceRequestId\\\": \\\"ad192e48-6d03-4477-bef1-80a16c6c708a\\\"\\r\\n}\",\"2018-06-13T10:58:08.117Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/ContosoLoanApp1/providers/Microsoft.Storage/storageAccounts/contosoloanapp1diag605\\\"\\r\\n}\",\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/ContosoLoanApp1/providers/Microsoft.Storage/storageAccounts/contosoloanapp1diag605\",\"36b4edc8-3f13-4c0b-8866-caf41d4e1bfa\",\"Microsoft.Storage\",\"contosoloanapp1diag605\",\"c082c55a-add9-4aa2-b2ac-70ce6770eab3\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:57:48.802Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Started\",\"\",\"ContosoLoanApp1\",\"85d819e7-0e0a-451d-91eb-82c7a0764cf9\",\"36b4edc8-3f13-4c0b-8866-caf41d4e1bfa\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"23.102.233.53\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"6425da6d-eb94-4d1f-aed6-98e3a230d68d\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"23.102.233.53\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"\",\"2018-06-13T10:58:08.117Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/ContosoLoanApp1/providers/Microsoft.Storage/storageAccounts/contosoloanapp1diag605\\\"\\r\\n}\",\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/ContosoLoanApp1/providers/Microsoft.Storage/storageAccounts/contosoloanapp1diag605\",\"36b4edc8-3f13-4c0b-8866-caf41d4e1bfa\",\"Microsoft.Storage\",\"contosoloanapp1diag605\",\"31297063-f44a-4b34-a88d-3148bb69627d\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:57:48.661Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Succeeded\",\"OK (HTTP Status Code: 200)\",\"acsSwarmTestRG\",\"85d819e7-0e0a-451d-91eb-82c7a0764cf9\",\"cd1afd29-3094-46f2-85a4-ac5d05285337\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"23.96.114.155\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"76688e15-1b44-4171-8a0f-30dc5cb812c9\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"23.96.114.155\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"{\\r\\n  \\\"statusCode\\\": \\\"OK\\\",\\r\\n  \\\"serviceRequestId\\\": \\\"51f8bff5-a95e-47fc-950b-ecad3ec2ccad\\\"\\r\\n}\",\"2018-06-13T10:57:05.239Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/acsSwarmTestRG/providers/Microsoft.Storage/storageAccounts/briq4u4p5pcsaswarmdiag0\\\"\\r\\n}\",\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/acsSwarmTestRG/providers/Microsoft.Storage/storageAccounts/briq4u4p5pcsaswarmdiag0\",\"cd1afd29-3094-46f2-85a4-ac5d05285337\",\"Microsoft.Storage\",\"briq4u4p5pcsaswarmdiag0\",\"8a8b1248-8c06-43fe-b8b3-7c6514f4e1ce\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:56:42.038Z\",\"Azure\",\"AzureActivity\"],[\"Microsoft.Storage/storageAccounts/listKeys/action\",\"Informational\",\"Started\",\"\",\"acsSwarmTestRG\",\"85d819e7-0e0a-451d-91eb-82c7a0764cf9\",\"cd1afd29-3094-46f2-85a4-ac5d05285337\",\"6cd43949-0f4d-45f1-81f0-9ada0a1fdbc8\",\"23.96.114.155\",\"Administrative\",\"{\\r\\n  \\\"clientRequestId\\\": \\\"76688e15-1b44-4171-8a0f-30dc5cb812c9\\\",\\r\\n  \\\"clientIpAddress\\\": \\\"23.96.114.155\\\",\\r\\n  \\\"method\\\": \\\"POST\\\"\\r\\n}\",\"\",\"2018-06-13T10:57:05.239Z\",\"{\\r\\n  \\\"action\\\": \\\"Microsoft.Storage/storageAccounts/listKeys/action\\\",\\r\\n  \\\"scope\\\": \\\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/acsSwarmTestRG/providers/Microsoft.Storage/storageAccounts/briq4u4p5pcsaswarmdiag0\\\"\\r\\n}\",\"/subscriptions/85d819e7-0e0a-451d-91eb-82c7a0764cf9/resourceGroups/acsSwarmTestRG/providers/Microsoft.Storage/storageAccounts/briq4u4p5pcsaswarmdiag0\",\"cd1afd29-3094-46f2-85a4-ac5d05285337\",\"Microsoft.Storage\",\"briq4u4p5pcsaswarmdiag0\",\"d50478e2-6f0b-4f61-adcb-e83044c0365f\",\"b438b4f6-912a-46d5-9cb1-b44069212abc\",\"2018-06-13T10:56:41.991Z\",\"Azure\",\"AzureActivity\"]]}]}", { server: 'nginx',
  date: 'Thu, 14 Jun 2018 20:36:55 GMT',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '11992',
  connection: 'close',
  via: '1.1 draft-oms-green.f7ddb15c-6f53-11e8-afed-70b3d5800006',
  'x-content-type-options': 'nosniff',
  'access-control-allow-origin': '*',
  'access-control-expose-headers':
   'Retry-After,Age,WWW-Authenticate,x-resource-identities,x-ms-status-location',
  'content-location':
   'https://eastus.api.loganalytics.io/v1/workspaces/DEMO_WORKSPACE/query',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains' });
 return result; }]];