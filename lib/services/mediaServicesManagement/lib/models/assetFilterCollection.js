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
 * A collection of AssetFilter items.
 */
class AssetFilterCollection extends Array {
  /**
   * Create a AssetFilterCollection.
   * @member {string} [odatanextLink] A link to the next page of the collection
   * (when the collection contains too many results to return in one response).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AssetFilterCollection
   *
   * @returns {object} metadata of AssetFilterCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssetFilterCollection',
      type: {
        name: 'Composite',
        className: 'AssetFilterCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AssetFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'AssetFilter'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: '@odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AssetFilterCollection;