/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.NotificationHubs
 * @member {string} [resource] Resource on which the operation is performed:
 * Invoice, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * A NotificationHubs REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider:
 * Microsoft.NotificationHubs
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Invoice, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates NotificationHubs service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The Sku description for a namespace
 *
 * @member {string} name Name of the notification hub sku. Possible values
 * include: 'Free', 'Basic', 'Standard'
 * @member {string} [tier] The tier of particular sku
 * @member {string} [size] The Sku size
 * @member {string} [family] The Sku Family
 * @member {number} [capacity] The capacity of the resource
 */
export interface Sku {
  name: string;
  tier?: string;
  size?: string;
  family?: string;
  capacity?: number;
}

/**
 * @class
 * Initializes a new instance of the CheckAvailabilityParameters class.
 * @constructor
 * Parameters supplied to the Check Name Availability for Namespace and
 * NotificationHubs.
 *
 * @member {string} [id] Resource Id
 * @member {string} name Resource name
 * @member {string} [type] Resource type
 * @member {string} [location] Resource location
 * @member {object} [tags] Resource tags
 * @member {object} [sku] The sku of the created namespace
 * @member {string} [sku.name] Name of the notification hub sku. Possible
 * values include: 'Free', 'Basic', 'Standard'
 * @member {string} [sku.tier] The tier of particular sku
 * @member {string} [sku.size] The Sku size
 * @member {string} [sku.family] The Sku Family
 * @member {number} [sku.capacity] The capacity of the resource
 * @member {boolean} [isAvailiable] True if the name is available and can be
 * used to create new Namespace/NotificationHub. Otherwise false.
 */
export interface CheckAvailabilityParameters {
  readonly id?: string;
  name: string;
  readonly type?: string;
  location?: string;
  tags?: { [propertyName: string]: string };
  sku?: Sku;
  isAvailiable?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [location] Resource location
 * @member {object} [tags] Resource tags
 * @member {object} [sku] The sku of the created namespace
 * @member {string} [sku.name] Name of the notification hub sku. Possible
 * values include: 'Free', 'Basic', 'Standard'
 * @member {string} [sku.tier] The tier of particular sku
 * @member {string} [sku.size] The Sku size
 * @member {string} [sku.family] The Sku Family
 * @member {number} [sku.capacity] The capacity of the resource
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location?: string;
  tags?: { [propertyName: string]: string };
  sku?: Sku;
}

/**
 * @class
 * Initializes a new instance of the CheckAvailabilityResult class.
 * @constructor
 * Description of a CheckAvailibility resource.
 *
 * @member {boolean} [isAvailiable] True if the name is available and can be
 * used to create new Namespace/NotificationHub. Otherwise false.
 */
export interface CheckAvailabilityResult extends Resource {
  isAvailiable?: boolean;
}

/**
 * @class
 * Initializes a new instance of the NamespaceCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Namespace operation.
 *
 * @member {string} [namespaceCreateOrUpdateParametersName] The name of the
 * namespace.
 * @member {string} [provisioningState] Provisioning state of the Namespace.
 * @member {string} [region] Specifies the targeted region in which the
 * namespace should be created. It can be any of the following values:
 * Australia EastAustralia SoutheastCentral USEast USEast US 2West USNorth
 * Central USSouth Central USEast AsiaSoutheast AsiaBrazil SouthJapan EastJapan
 * WestNorth EuropeWest Europe
 * @member {string} [metricId] Identifier for Azure Insights metrics
 * @member {string} [status] Status of the namespace. It can be any of these
 * values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
 * @member {date} [createdAt] The time the namespace was created.
 * @member {date} [updatedAt] The time the namespace was updated.
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * NotificationHub operations.
 * @member {string} [subscriptionId] The Id of the Azure subscription
 * associated with the namespace.
 * @member {string} [scaleUnit] ScaleUnit where the namespace gets created
 * @member {boolean} [enabled] Whether or not the namespace is currently
 * enabled.
 * @member {boolean} [critical] Whether or not the namespace is set as
 * Critical.
 * @member {string} [dataCenter] Data center for the namespace
 * @member {string} [namespaceType] The namespace type. Possible values
 * include: 'Messaging', 'NotificationHub'
 */
export interface NamespaceCreateOrUpdateParameters extends Resource {
  namespaceCreateOrUpdateParametersName?: string;
  provisioningState?: string;
  region?: string;
  readonly metricId?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  serviceBusEndpoint?: string;
  subscriptionId?: string;
  scaleUnit?: string;
  enabled?: boolean;
  critical?: boolean;
  dataCenter?: string;
  namespaceType?: string;
}

/**
 * @class
 * Initializes a new instance of the NamespacePatchParameters class.
 * @constructor
 * Parameters supplied to the Patch Namespace operation.
 *
 * @member {object} [tags] Resource tags
 * @member {object} [sku] The sku of the created namespace
 * @member {string} [sku.name] Name of the notification hub sku. Possible
 * values include: 'Free', 'Basic', 'Standard'
 * @member {string} [sku.tier] The tier of particular sku
 * @member {string} [sku.size] The Sku size
 * @member {string} [sku.family] The Sku Family
 * @member {number} [sku.capacity] The capacity of the resource
 */
export interface NamespacePatchParameters {
  tags?: { [propertyName: string]: string };
  sku?: Sku;
}

/**
 * @class
 * Initializes a new instance of the NamespaceResource class.
 * @constructor
 * Description of a Namespace resource.
 *
 * @member {string} [namespaceResourceName] The name of the namespace.
 * @member {string} [provisioningState] Provisioning state of the Namespace.
 * @member {string} [region] Specifies the targeted region in which the
 * namespace should be created. It can be any of the following values:
 * Australia EastAustralia SoutheastCentral USEast USEast US 2West USNorth
 * Central USSouth Central USEast AsiaSoutheast AsiaBrazil SouthJapan EastJapan
 * WestNorth EuropeWest Europe
 * @member {string} [metricId] Identifier for Azure Insights metrics
 * @member {string} [status] Status of the namespace. It can be any of these
 * values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
 * @member {date} [createdAt] The time the namespace was created.
 * @member {date} [updatedAt] The time the namespace was updated.
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * NotificationHub operations.
 * @member {string} [subscriptionId] The Id of the Azure subscription
 * associated with the namespace.
 * @member {string} [scaleUnit] ScaleUnit where the namespace gets created
 * @member {boolean} [enabled] Whether or not the namespace is currently
 * enabled.
 * @member {boolean} [critical] Whether or not the namespace is set as
 * Critical.
 * @member {string} [dataCenter] Data center for the namespace
 * @member {string} [namespaceType] The namespace type. Possible values
 * include: 'Messaging', 'NotificationHub'
 */
export interface NamespaceResource extends Resource {
  namespaceResourceName?: string;
  provisioningState?: string;
  region?: string;
  readonly metricId?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  serviceBusEndpoint?: string;
  subscriptionId?: string;
  scaleUnit?: string;
  enabled?: boolean;
  critical?: boolean;
  dataCenter?: string;
  namespaceType?: string;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleProperties class.
 * @constructor
 * SharedAccessAuthorizationRule properties.
 *
 * @member {array} [rights] The rights associated with the rule.
 * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [secondaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [keyName] A string that describes the authorization rule.
 * @member {string} [claimType] A string that describes the claim type
 * @member {string} [claimValue] A string that describes the claim value
 * @member {string} [modifiedTime] The last modified time for this rule
 * @member {string} [createdTime] The created time for this rule
 * @member {number} [revision] The revision number for the rule
 */
export interface SharedAccessAuthorizationRuleProperties {
  rights?: string[];
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
  readonly keyName?: string;
  readonly claimType?: string;
  readonly claimValue?: string;
  readonly modifiedTime?: string;
  readonly createdTime?: string;
  readonly revision?: number;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules.
 *
 * @member {object} properties Properties of the Namespace AuthorizationRules.
 * @member {array} [properties.rights] The rights associated with the rule.
 * @member {string} [properties.primaryKey] A base64-encoded 256-bit primary
 * key for signing and validating the SAS token.
 * @member {string} [properties.secondaryKey] A base64-encoded 256-bit primary
 * key for signing and validating the SAS token.
 * @member {string} [properties.keyName] A string that describes the
 * authorization rule.
 * @member {string} [properties.claimType] A string that describes the claim
 * type
 * @member {string} [properties.claimValue] A string that describes the claim
 * value
 * @member {string} [properties.modifiedTime] The last modified time for this
 * rule
 * @member {string} [properties.createdTime] The created time for this rule
 * @member {number} [properties.revision] The revision number for the rule
 */
export interface SharedAccessAuthorizationRuleCreateOrUpdateParameters {
  properties: SharedAccessAuthorizationRuleProperties;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleResource class.
 * @constructor
 * Description of a Namespace AuthorizationRules.
 *
 * @member {array} [rights] The rights associated with the rule.
 * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [secondaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [keyName] A string that describes the authorization rule.
 * @member {string} [claimType] A string that describes the claim type
 * @member {string} [claimValue] A string that describes the claim value
 * @member {string} [modifiedTime] The last modified time for this rule
 * @member {string} [createdTime] The created time for this rule
 * @member {number} [revision] The revision number for the rule
 */
export interface SharedAccessAuthorizationRuleResource extends Resource {
  rights?: string[];
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
  readonly keyName?: string;
  readonly claimType?: string;
  readonly claimValue?: string;
  readonly modifiedTime?: string;
  readonly createdTime?: string;
  readonly revision?: number;
}

/**
 * @class
 * Initializes a new instance of the ResourceListKeys class.
 * @constructor
 * Namespace/NotificationHub Connection String
 *
 * @member {string} [primaryConnectionString] PrimaryConnectionString of the
 * AuthorizationRule.
 * @member {string} [secondaryConnectionString] SecondaryConnectionString of
 * the created AuthorizationRule
 * @member {string} [primaryKey] PrimaryKey of the created AuthorizationRule.
 * @member {string} [secondaryKey] SecondaryKey of the created
 * AuthorizationRule
 * @member {string} [keyName] KeyName of the created AuthorizationRule
 */
export interface ResourceListKeys {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}

/**
 * @class
 * Initializes a new instance of the PolicykeyResource class.
 * @constructor
 * Namespace/NotificationHub Regenerate Keys
 *
 * @member {string} [policyKey] Name of the key that has to be regenerated for
 * the Namespace/Notification Hub Authorization Rule. The value can be Primary
 * Key/Secondary Key.
 */
export interface PolicykeyResource {
  policyKey?: string;
}

/**
 * @class
 * Initializes a new instance of the ApnsCredential class.
 * @constructor
 * Description of a NotificationHub ApnsCredential.
 *
 * @member {string} [apnsCertificate] The APNS certificate.
 * @member {string} [certificateKey] The certificate key.
 * @member {string} [endpoint] The endpoint of this credential.
 * @member {string} [thumbprint] The Apns certificate Thumbprint
 * @member {string} [keyId] A 10-character key identifier (kid) key, obtained
 * from your developer account
 * @member {string} [appName] The name of the application
 * @member {string} [appId] The issuer (iss) registered claim key, whose value
 * is your 10-character Team ID, obtained from your developer account
 * @member {string} [token] Provider Authentication Token, obtained through
 * your developer account
 */
export interface ApnsCredential {
  apnsCertificate?: string;
  certificateKey?: string;
  endpoint?: string;
  thumbprint?: string;
  keyId?: string;
  appName?: string;
  appId?: string;
  token?: string;
}

/**
 * @class
 * Initializes a new instance of the WnsCredential class.
 * @constructor
 * Description of a NotificationHub WnsCredential.
 *
 * @member {string} [packageSid] The package ID for this credential.
 * @member {string} [secretKey] The secret key.
 * @member {string} [windowsLiveEndpoint] The Windows Live endpoint.
 */
export interface WnsCredential {
  packageSid?: string;
  secretKey?: string;
  windowsLiveEndpoint?: string;
}

/**
 * @class
 * Initializes a new instance of the GcmCredential class.
 * @constructor
 * Description of a NotificationHub GcmCredential.
 *
 * @member {string} [gcmEndpoint] The GCM endpoint.
 * @member {string} [googleApiKey] The Google API key.
 */
export interface GcmCredential {
  gcmEndpoint?: string;
  googleApiKey?: string;
}

/**
 * @class
 * Initializes a new instance of the MpnsCredential class.
 * @constructor
 * Description of a NotificationHub MpnsCredential.
 *
 * @member {string} [mpnsCertificate] The MPNS certificate.
 * @member {string} [certificateKey] The certificate key for this credential.
 * @member {string} [thumbprint] The Mpns certificate Thumbprint
 */
export interface MpnsCredential {
  mpnsCertificate?: string;
  certificateKey?: string;
  thumbprint?: string;
}

/**
 * @class
 * Initializes a new instance of the AdmCredential class.
 * @constructor
 * Description of a NotificationHub AdmCredential.
 *
 * @member {string} [clientId] The client identifier.
 * @member {string} [clientSecret] The credential secret access key.
 * @member {string} [authTokenUrl] The URL of the authorization token.
 */
export interface AdmCredential {
  clientId?: string;
  clientSecret?: string;
  authTokenUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the BaiduCredential class.
 * @constructor
 * Description of a NotificationHub BaiduCredential.
 *
 * @member {string} [baiduApiKey] Baidu Api Key.
 * @member {string} [baiduEndPoint] Baidu Endpoint.
 * @member {string} [baiduSecretKey] Baidu Secret Key
 */
export interface BaiduCredential {
  baiduApiKey?: string;
  baiduEndPoint?: string;
  baiduSecretKey?: string;
}

/**
 * @class
 * Initializes a new instance of the NotificationHubCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate NotificationHub operation.
 *
 * @member {string} [notificationHubCreateOrUpdateParametersName] The
 * NotificationHub name.
 * @member {string} [registrationTtl] The RegistrationTtl of the created
 * NotificationHub
 * @member {array} [authorizationRules] The AuthorizationRules of the created
 * NotificationHub
 * @member {object} [apnsCredential] The ApnsCredential of the created
 * NotificationHub
 * @member {string} [apnsCredential.apnsCertificate] The APNS certificate.
 * @member {string} [apnsCredential.certificateKey] The certificate key.
 * @member {string} [apnsCredential.endpoint] The endpoint of this credential.
 * @member {string} [apnsCredential.thumbprint] The Apns certificate Thumbprint
 * @member {string} [apnsCredential.keyId] A 10-character key identifier (kid)
 * key, obtained from your developer account
 * @member {string} [apnsCredential.appName] The name of the application
 * @member {string} [apnsCredential.appId] The issuer (iss) registered claim
 * key, whose value is your 10-character Team ID, obtained from your developer
 * account
 * @member {string} [apnsCredential.token] Provider Authentication Token,
 * obtained through your developer account
 * @member {object} [wnsCredential] The WnsCredential of the created
 * NotificationHub
 * @member {string} [wnsCredential.packageSid] The package ID for this
 * credential.
 * @member {string} [wnsCredential.secretKey] The secret key.
 * @member {string} [wnsCredential.windowsLiveEndpoint] The Windows Live
 * endpoint.
 * @member {object} [gcmCredential] The GcmCredential of the created
 * NotificationHub
 * @member {string} [gcmCredential.gcmEndpoint] The GCM endpoint.
 * @member {string} [gcmCredential.googleApiKey] The Google API key.
 * @member {object} [mpnsCredential] The MpnsCredential of the created
 * NotificationHub
 * @member {string} [mpnsCredential.mpnsCertificate] The MPNS certificate.
 * @member {string} [mpnsCredential.certificateKey] The certificate key for
 * this credential.
 * @member {string} [mpnsCredential.thumbprint] The Mpns certificate Thumbprint
 * @member {object} [admCredential] The AdmCredential of the created
 * NotificationHub
 * @member {string} [admCredential.clientId] The client identifier.
 * @member {string} [admCredential.clientSecret] The credential secret access
 * key.
 * @member {string} [admCredential.authTokenUrl] The URL of the authorization
 * token.
 * @member {object} [baiduCredential] The BaiduCredential of the created
 * NotificationHub
 * @member {string} [baiduCredential.baiduApiKey] Baidu Api Key.
 * @member {string} [baiduCredential.baiduEndPoint] Baidu Endpoint.
 * @member {string} [baiduCredential.baiduSecretKey] Baidu Secret Key
 */
export interface NotificationHubCreateOrUpdateParameters extends Resource {
  notificationHubCreateOrUpdateParametersName?: string;
  registrationTtl?: string;
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  apnsCredential?: ApnsCredential;
  wnsCredential?: WnsCredential;
  gcmCredential?: GcmCredential;
  mpnsCredential?: MpnsCredential;
  admCredential?: AdmCredential;
  baiduCredential?: BaiduCredential;
}

/**
 * @class
 * Initializes a new instance of the NotificationHubPatchParameters class.
 * @constructor
 * Parameters supplied to the patch NotificationHub operation.
 *
 * @member {string} [notificationHubPatchParametersName] The NotificationHub
 * name.
 * @member {string} [registrationTtl] The RegistrationTtl of the created
 * NotificationHub
 * @member {array} [authorizationRules] The AuthorizationRules of the created
 * NotificationHub
 * @member {object} [apnsCredential] The ApnsCredential of the created
 * NotificationHub
 * @member {string} [apnsCredential.apnsCertificate] The APNS certificate.
 * @member {string} [apnsCredential.certificateKey] The certificate key.
 * @member {string} [apnsCredential.endpoint] The endpoint of this credential.
 * @member {string} [apnsCredential.thumbprint] The Apns certificate Thumbprint
 * @member {string} [apnsCredential.keyId] A 10-character key identifier (kid)
 * key, obtained from your developer account
 * @member {string} [apnsCredential.appName] The name of the application
 * @member {string} [apnsCredential.appId] The issuer (iss) registered claim
 * key, whose value is your 10-character Team ID, obtained from your developer
 * account
 * @member {string} [apnsCredential.token] Provider Authentication Token,
 * obtained through your developer account
 * @member {object} [wnsCredential] The WnsCredential of the created
 * NotificationHub
 * @member {string} [wnsCredential.packageSid] The package ID for this
 * credential.
 * @member {string} [wnsCredential.secretKey] The secret key.
 * @member {string} [wnsCredential.windowsLiveEndpoint] The Windows Live
 * endpoint.
 * @member {object} [gcmCredential] The GcmCredential of the created
 * NotificationHub
 * @member {string} [gcmCredential.gcmEndpoint] The GCM endpoint.
 * @member {string} [gcmCredential.googleApiKey] The Google API key.
 * @member {object} [mpnsCredential] The MpnsCredential of the created
 * NotificationHub
 * @member {string} [mpnsCredential.mpnsCertificate] The MPNS certificate.
 * @member {string} [mpnsCredential.certificateKey] The certificate key for
 * this credential.
 * @member {string} [mpnsCredential.thumbprint] The Mpns certificate Thumbprint
 * @member {object} [admCredential] The AdmCredential of the created
 * NotificationHub
 * @member {string} [admCredential.clientId] The client identifier.
 * @member {string} [admCredential.clientSecret] The credential secret access
 * key.
 * @member {string} [admCredential.authTokenUrl] The URL of the authorization
 * token.
 * @member {object} [baiduCredential] The BaiduCredential of the created
 * NotificationHub
 * @member {string} [baiduCredential.baiduApiKey] Baidu Api Key.
 * @member {string} [baiduCredential.baiduEndPoint] Baidu Endpoint.
 * @member {string} [baiduCredential.baiduSecretKey] Baidu Secret Key
 */
export interface NotificationHubPatchParameters extends Resource {
  notificationHubPatchParametersName?: string;
  registrationTtl?: string;
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  apnsCredential?: ApnsCredential;
  wnsCredential?: WnsCredential;
  gcmCredential?: GcmCredential;
  mpnsCredential?: MpnsCredential;
  admCredential?: AdmCredential;
  baiduCredential?: BaiduCredential;
}

/**
 * @class
 * Initializes a new instance of the NotificationHubResource class.
 * @constructor
 * Description of a NotificationHub Resource.
 *
 * @member {string} [notificationHubResourceName] The NotificationHub name.
 * @member {string} [registrationTtl] The RegistrationTtl of the created
 * NotificationHub
 * @member {array} [authorizationRules] The AuthorizationRules of the created
 * NotificationHub
 * @member {object} [apnsCredential] The ApnsCredential of the created
 * NotificationHub
 * @member {string} [apnsCredential.apnsCertificate] The APNS certificate.
 * @member {string} [apnsCredential.certificateKey] The certificate key.
 * @member {string} [apnsCredential.endpoint] The endpoint of this credential.
 * @member {string} [apnsCredential.thumbprint] The Apns certificate Thumbprint
 * @member {string} [apnsCredential.keyId] A 10-character key identifier (kid)
 * key, obtained from your developer account
 * @member {string} [apnsCredential.appName] The name of the application
 * @member {string} [apnsCredential.appId] The issuer (iss) registered claim
 * key, whose value is your 10-character Team ID, obtained from your developer
 * account
 * @member {string} [apnsCredential.token] Provider Authentication Token,
 * obtained through your developer account
 * @member {object} [wnsCredential] The WnsCredential of the created
 * NotificationHub
 * @member {string} [wnsCredential.packageSid] The package ID for this
 * credential.
 * @member {string} [wnsCredential.secretKey] The secret key.
 * @member {string} [wnsCredential.windowsLiveEndpoint] The Windows Live
 * endpoint.
 * @member {object} [gcmCredential] The GcmCredential of the created
 * NotificationHub
 * @member {string} [gcmCredential.gcmEndpoint] The GCM endpoint.
 * @member {string} [gcmCredential.googleApiKey] The Google API key.
 * @member {object} [mpnsCredential] The MpnsCredential of the created
 * NotificationHub
 * @member {string} [mpnsCredential.mpnsCertificate] The MPNS certificate.
 * @member {string} [mpnsCredential.certificateKey] The certificate key for
 * this credential.
 * @member {string} [mpnsCredential.thumbprint] The Mpns certificate Thumbprint
 * @member {object} [admCredential] The AdmCredential of the created
 * NotificationHub
 * @member {string} [admCredential.clientId] The client identifier.
 * @member {string} [admCredential.clientSecret] The credential secret access
 * key.
 * @member {string} [admCredential.authTokenUrl] The URL of the authorization
 * token.
 * @member {object} [baiduCredential] The BaiduCredential of the created
 * NotificationHub
 * @member {string} [baiduCredential.baiduApiKey] Baidu Api Key.
 * @member {string} [baiduCredential.baiduEndPoint] Baidu Endpoint.
 * @member {string} [baiduCredential.baiduSecretKey] Baidu Secret Key
 */
export interface NotificationHubResource extends Resource {
  notificationHubResourceName?: string;
  registrationTtl?: string;
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  apnsCredential?: ApnsCredential;
  wnsCredential?: WnsCredential;
  gcmCredential?: GcmCredential;
  mpnsCredential?: MpnsCredential;
  admCredential?: AdmCredential;
  baiduCredential?: BaiduCredential;
}

/**
 * @class
 * Initializes a new instance of the DebugSendResponse class.
 * @constructor
 * Description of a NotificationHub Resource.
 *
 * @member {number} [success] successful send
 * @member {number} [failure] send failure
 * @member {object} [results] actual failure description
 */
export interface DebugSendResponse extends Resource {
  success?: number;
  failure?: number;
  results?: any;
}

/**
 * @class
 * Initializes a new instance of the PnsCredentialsResource class.
 * @constructor
 * Description of a NotificationHub PNS Credentials.
 *
 * @member {object} [apnsCredential] The ApnsCredential of the created
 * NotificationHub
 * @member {string} [apnsCredential.apnsCertificate] The APNS certificate.
 * @member {string} [apnsCredential.certificateKey] The certificate key.
 * @member {string} [apnsCredential.endpoint] The endpoint of this credential.
 * @member {string} [apnsCredential.thumbprint] The Apns certificate Thumbprint
 * @member {string} [apnsCredential.keyId] A 10-character key identifier (kid)
 * key, obtained from your developer account
 * @member {string} [apnsCredential.appName] The name of the application
 * @member {string} [apnsCredential.appId] The issuer (iss) registered claim
 * key, whose value is your 10-character Team ID, obtained from your developer
 * account
 * @member {string} [apnsCredential.token] Provider Authentication Token,
 * obtained through your developer account
 * @member {object} [wnsCredential] The WnsCredential of the created
 * NotificationHub
 * @member {string} [wnsCredential.packageSid] The package ID for this
 * credential.
 * @member {string} [wnsCredential.secretKey] The secret key.
 * @member {string} [wnsCredential.windowsLiveEndpoint] The Windows Live
 * endpoint.
 * @member {object} [gcmCredential] The GcmCredential of the created
 * NotificationHub
 * @member {string} [gcmCredential.gcmEndpoint] The GCM endpoint.
 * @member {string} [gcmCredential.googleApiKey] The Google API key.
 * @member {object} [mpnsCredential] The MpnsCredential of the created
 * NotificationHub
 * @member {string} [mpnsCredential.mpnsCertificate] The MPNS certificate.
 * @member {string} [mpnsCredential.certificateKey] The certificate key for
 * this credential.
 * @member {string} [mpnsCredential.thumbprint] The Mpns certificate Thumbprint
 * @member {object} [admCredential] The AdmCredential of the created
 * NotificationHub
 * @member {string} [admCredential.clientId] The client identifier.
 * @member {string} [admCredential.clientSecret] The credential secret access
 * key.
 * @member {string} [admCredential.authTokenUrl] The URL of the authorization
 * token.
 * @member {object} [baiduCredential] The BaiduCredential of the created
 * NotificationHub
 * @member {string} [baiduCredential.baiduApiKey] Baidu Api Key.
 * @member {string} [baiduCredential.baiduEndPoint] Baidu Endpoint.
 * @member {string} [baiduCredential.baiduSecretKey] Baidu Secret Key
 */
export interface PnsCredentialsResource extends Resource {
  apnsCredential?: ApnsCredential;
  wnsCredential?: WnsCredential;
  gcmCredential?: GcmCredential;
  mpnsCredential?: MpnsCredential;
  admCredential?: AdmCredential;
  baiduCredential?: BaiduCredential;
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * @member {string} [id] Resource Id
 */
export interface SubResource extends BaseResource {
  id?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list NotificationHubs operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the NamespaceListResult class.
 * @constructor
 * The response of the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Namespaces
 */
export interface NamespaceListResult extends Array<NamespaceResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleListResult class.
 * @constructor
 * The response of the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of AuthorizationRules
 */
export interface SharedAccessAuthorizationRuleListResult extends Array<SharedAccessAuthorizationRuleResource> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the NotificationHubListResult class.
 * @constructor
 * The response of the List NotificationHub operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of NotificationHub
 */
export interface NotificationHubListResult extends Array<NotificationHubResource> {
  nextLink?: string;
}
