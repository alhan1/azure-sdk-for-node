/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Error type
 *
 */
class StorageSyncApiError {
  /**
   * Create a StorageSyncApiError.
   * @member {string} [code] Error code of the given entry.
   * @member {string} [message] Error message of the given entry.
   * @member {string} [target] Target of the given error entry.
   * @member {object} [details] Error details of the given entry.
   * @member {string} [details.code] Error code of the given entry.
   * @member {string} [details.message] Error message of the given entry.
   * @member {string} [details.target] Target of the given entry.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageSyncApiError
   *
   * @returns {object} metadata of StorageSyncApiError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageSyncApiError',
      type: {
        name: 'Composite',
        className: 'StorageSyncApiError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Composite',
              className: 'StorageSyncErrorDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageSyncApiError;
