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

const models = require('./index');

/**
 * Represents an Azure Search indexer.
 *
 */
class Indexer {
  /**
   * Create a Indexer.
   * @member {string} name The name of the indexer.
   * @member {string} [description] The description of the indexer.
   * @member {string} dataSourceName The name of the datasource from which this
   * indexer reads data.
   * @member {string} targetIndexName The name of the index to which this
   * indexer writes data.
   * @member {object} [schedule] The schedule for this indexer.
   * @member {moment.duration} [schedule.interval] The interval of time between
   * indexer executions.
   * @member {date} [schedule.startTime] The time when an indexer should start
   * running.
   * @member {object} [parameters] Parameters for indexer execution.
   * @member {number} [parameters.batchSize] The number of items that are read
   * from the data source and indexed as a single batch in order to improve
   * performance. The default depends on the data source type.
   * @member {number} [parameters.maxFailedItems] The maximum number of items
   * that can fail indexing for indexer execution to still be considered
   * successful. -1 means no limit. Default is 0.
   * @member {number} [parameters.maxFailedItemsPerBatch] The maximum number of
   * items in a single batch that can fail indexing for the batch to still be
   * considered successful. -1 means no limit. Default is 0.
   * @member {boolean} [parameters.base64EncodeKeys] Whether indexer will
   * base64-encode all values that are inserted into key field of the target
   * index. This is needed if keys can contain characters that are invalid in
   * keys (such as dot '.'). Default is false.
   * @member {object} [parameters.configuration] A dictionary of
   * indexer-specific configuration properties. Each name is the name of a
   * specific property. Each value must be of a primitive type.
   * @member {array} [fieldMappings] Defines mappings between fields in the
   * data source and corresponding target fields in the index.
   * @member {boolean} [isDisabled] A value indicating whether the indexer is
   * disabled. Default is false. Default value: false .
   * @member {string} [eTag] The ETag of the Indexer.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Indexer
   *
   * @returns {object} metadata of Indexer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Indexer',
      type: {
        name: 'Composite',
        className: 'Indexer',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dataSourceName: {
            required: true,
            serializedName: 'dataSourceName',
            type: {
              name: 'String'
            }
          },
          targetIndexName: {
            required: true,
            serializedName: 'targetIndexName',
            type: {
              name: 'String'
            }
          },
          schedule: {
            required: false,
            serializedName: 'schedule',
            type: {
              name: 'Composite',
              className: 'IndexingSchedule'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Composite',
              className: 'IndexingParameters'
            }
          },
          fieldMappings: {
            required: false,
            serializedName: 'fieldMappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FieldMappingElementType',
                  type: {
                    name: 'Composite',
                    className: 'FieldMapping'
                  }
              }
            }
          },
          isDisabled: {
            required: false,
            serializedName: 'disabled',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          eTag: {
            required: false,
            serializedName: '@odata\\.etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Indexer;