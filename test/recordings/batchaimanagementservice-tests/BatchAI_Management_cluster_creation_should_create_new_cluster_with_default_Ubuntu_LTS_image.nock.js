// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'northeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster1?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/9d42e8bf-0b31-4087-a218-5340d2b3ba76?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '96e5fc04-aa3c-4eef-9fb6-66ccf273c061',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/9d42e8bf-0b31-4087-a218-5340d2b3ba76?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '094ffa4d-7dba-4cae-890a-0188ba9327de',
  'x-ms-correlation-request-id': '094ffa4d-7dba-4cae-890a-0188ba9327de',
  'x-ms-routing-request-id': 'WESTUS:20180614T034530Z:094ffa4d-7dba-4cae-890a-0188ba9327de',
  date: 'Thu, 14 Jun 2018 03:45:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster1?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/9d42e8bf-0b31-4087-a218-5340d2b3ba76?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '96e5fc04-aa3c-4eef-9fb6-66ccf273c061',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/9d42e8bf-0b31-4087-a218-5340d2b3ba76?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '094ffa4d-7dba-4cae-890a-0188ba9327de',
  'x-ms-correlation-request-id': '094ffa4d-7dba-4cae-890a-0188ba9327de',
  'x-ms-routing-request-id': 'WESTUS:20180614T034530Z:094ffa4d-7dba-4cae-890a-0188ba9327de',
  date: 'Thu, 14 Jun 2018 03:45:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/9d42e8bf-0b31-4087-a218-5340d2b3ba76?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/9d42e8bf-0b31-4087-a218-5340d2b3ba76\",\"name\":\"9d42e8bf-0b31-4087-a218-5340d2b3ba76\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:45:29.879Z\",\"endTime\":\"2018-06-14T03:45:47.682Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster1\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ecc20b53-07b5-4bfd-b607-3f41271d0531',
  'request-id': 'ef4cac19-c57f-4e41-9de6-6278ecdf11a2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'ecc20b53-07b5-4bfd-b607-3f41271d0531',
  'x-ms-routing-request-id': 'WESTUS:20180614T034601Z:ecc20b53-07b5-4bfd-b607-3f41271d0531',
  date: 'Thu, 14 Jun 2018 03:46:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/9d42e8bf-0b31-4087-a218-5340d2b3ba76?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/9d42e8bf-0b31-4087-a218-5340d2b3ba76\",\"name\":\"9d42e8bf-0b31-4087-a218-5340d2b3ba76\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:45:29.879Z\",\"endTime\":\"2018-06-14T03:45:47.682Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster1\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ecc20b53-07b5-4bfd-b607-3f41271d0531',
  'request-id': 'ef4cac19-c57f-4e41-9de6-6278ecdf11a2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'ecc20b53-07b5-4bfd-b607-3f41271d0531',
  'x-ms-routing-request-id': 'WESTUS:20180614T034601Z:ecc20b53-07b5-4bfd-b607-3f41271d0531',
  date: 'Thu, 14 Jun 2018 03:46:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster1?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster1\",\"name\":\"cluster1\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:45:29.864Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:45:48.027Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:45:47.667Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1351',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:45:29 GMT',
  etag: '"0x8D5D1A9461AF5BC"',
  'x-ms-request-id': '2401ec6d-88b1-4213-8deb-18b7dcb854e9',
  'request-id': '78e83a8f-f7c3-4c14-8a6a-4f60472a91f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2401ec6d-88b1-4213-8deb-18b7dcb854e9',
  'x-ms-routing-request-id': 'WESTUS:20180614T034602Z:2401ec6d-88b1-4213-8deb-18b7dcb854e9',
  date: 'Thu, 14 Jun 2018 03:46:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster1?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster1\",\"name\":\"cluster1\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:45:29.864Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:45:48.027Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:45:47.667Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1351',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:45:29 GMT',
  etag: '"0x8D5D1A9461AF5BC"',
  'x-ms-request-id': '2401ec6d-88b1-4213-8deb-18b7dcb854e9',
  'request-id': '78e83a8f-f7c3-4c14-8a6a-4f60472a91f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2401ec6d-88b1-4213-8deb-18b7dcb854e9',
  'x-ms-routing-request-id': 'WESTUS:20180614T034602Z:2401ec6d-88b1-4213-8deb-18b7dcb854e9',
  date: 'Thu, 14 Jun 2018 03:46:02 GMT',
  connection: 'close' });
 return result; }]];