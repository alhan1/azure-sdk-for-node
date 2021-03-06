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
 * Service state summary of Service Fabric Upgrade Orchestration Service.
 *
 */
class UpgradeOrchestrationServiceStateSummary {
  /**
   * Create a UpgradeOrchestrationServiceStateSummary.
   * @property {string} [currentCodeVersion] The current code version of the
   * cluster.
   * @property {string} [currentManifestVersion] The current manifest version
   * of the cluster.
   * @property {string} [targetCodeVersion] The target code version of  the
   * cluster.
   * @property {string} [targetManifestVersion] The target manifest version of
   * the cluster.
   * @property {string} [pendingUpgradeType] The type of the pending upgrade of
   * the cluster.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpgradeOrchestrationServiceStateSummary
   *
   * @returns {object} metadata of UpgradeOrchestrationServiceStateSummary
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpgradeOrchestrationServiceStateSummary',
      type: {
        name: 'Composite',
        className: 'UpgradeOrchestrationServiceStateSummary',
        modelProperties: {
          currentCodeVersion: {
            required: false,
            serializedName: 'CurrentCodeVersion',
            type: {
              name: 'String'
            }
          },
          currentManifestVersion: {
            required: false,
            serializedName: 'CurrentManifestVersion',
            type: {
              name: 'String'
            }
          },
          targetCodeVersion: {
            required: false,
            serializedName: 'TargetCodeVersion',
            type: {
              name: 'String'
            }
          },
          targetManifestVersion: {
            required: false,
            serializedName: 'TargetManifestVersion',
            type: {
              name: 'String'
            }
          },
          pendingUpgradeType: {
            required: false,
            serializedName: 'PendingUpgradeType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpgradeOrchestrationServiceStateSummary;
