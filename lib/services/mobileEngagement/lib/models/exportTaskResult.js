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
 * Class representing a ExportTaskResult.
 */
class ExportTaskResult {
  /**
   * Create a ExportTaskResult.
   * @member {string} id Unique identifier of the export task.
   * @member {string} [description] A description of the export task.
   * @member {string} state Possible values include: 'Queued', 'Started',
   * 'Succeeded', 'Failed'
   * @member {date} dateCreated The RFC3339 date-time the export task was
   * created.
   * @member {date} [dateCompleted] The RFC3339 date-time the export task was
   * completed.
   * @member {string} exportType Possible values include: 'Activity', 'Tag',
   * 'Crash', 'Error', 'Event', 'Job', 'Session', 'Token', 'Push'
   * @member {string} [errorDetails] Details of errors encountered during the
   * export, if any.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExportTaskResult
   *
   * @returns {object} metadata of ExportTaskResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'exportTaskResult',
      type: {
        name: 'Composite',
        className: 'ExportTaskResult',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
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
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Queued', 'Started', 'Succeeded', 'Failed' ]
            }
          },
          dateCreated: {
            required: true,
            serializedName: 'dateCreated',
            type: {
              name: 'DateTime'
            }
          },
          dateCompleted: {
            required: false,
            serializedName: 'dateCompleted',
            type: {
              name: 'DateTime'
            }
          },
          exportType: {
            required: true,
            serializedName: 'exportType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Activity', 'Tag', 'Crash', 'Error', 'Event', 'Job', 'Session', 'Token', 'Push' ]
            }
          },
          errorDetails: {
            required: false,
            serializedName: 'errorDetails',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExportTaskResult;