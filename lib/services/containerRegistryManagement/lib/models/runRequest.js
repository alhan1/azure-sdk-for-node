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
 * The request parameters for scheduling a run.
 *
 */
class RunRequest {
  /**
   * Create a RunRequest.
   * @member {boolean} [isArchiveEnabled] The value that indicates whether
   * archiving is enabled for the run or not. Default value: false .
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of RunRequest
   *
   * @returns {object} metadata of RunRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'RunRequest',
        className: 'RunRequest',
        modelProperties: {
          isArchiveEnabled: {
            required: false,
            serializedName: 'isArchiveEnabled',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RunRequest;