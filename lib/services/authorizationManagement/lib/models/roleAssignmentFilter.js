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
 * Role Assignments filter
 *
 */
class RoleAssignmentFilter {
  /**
   * Create a RoleAssignmentFilter.
   * @property {string} [principalId] Returns role assignment of the specific
   * principal.
   * @property {boolean} [canDelegate] The Delegation flag for the
   * roleassignment
   */
  constructor() {
  }

  /**
   * Defines the metadata of RoleAssignmentFilter
   *
   * @returns {object} metadata of RoleAssignmentFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleAssignmentFilter',
      type: {
        name: 'Composite',
        className: 'RoleAssignmentFilter',
        modelProperties: {
          principalId: {
            required: false,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          canDelegate: {
            required: false,
            serializedName: 'canDelegate',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = RoleAssignmentFilter;
