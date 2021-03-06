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
 * A log metrics trigger descriptor.
 *
 */
class LogMetricTrigger {
  /**
   * Create a LogMetricTrigger.
   * @member {string} [thresholdOperator] Evaluation operation for Metric
   * -'GreaterThan' or 'LessThan' or 'Equal'. Possible values include:
   * 'GreaterThan', 'LessThan', 'Equal'
   * @member {number} [threshold] The threshold of the metric trigger.
   * @member {string} [metricTriggerType] Metric Trigger Type - 'Consecutive'
   * or 'Total'. Possible values include: 'Consecutive', 'Total'
   * @member {string} [metricColumn] Evaluation of metric on a particular
   * column
   */
  constructor() {
  }

  /**
   * Defines the metadata of LogMetricTrigger
   *
   * @returns {object} metadata of LogMetricTrigger
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogMetricTrigger',
      type: {
        name: 'Composite',
        className: 'LogMetricTrigger',
        modelProperties: {
          thresholdOperator: {
            required: false,
            serializedName: 'thresholdOperator',
            type: {
              name: 'String'
            }
          },
          threshold: {
            required: false,
            serializedName: 'threshold',
            type: {
              name: 'Number'
            }
          },
          metricTriggerType: {
            required: false,
            serializedName: 'metricTriggerType',
            type: {
              name: 'String'
            }
          },
          metricColumn: {
            required: false,
            serializedName: 'metricColumn',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LogMetricTrigger;
