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
 * Contains all the secrets of a Disk.
 *
 */
class DiskSecret {
  /**
   * Create a DiskSecret.
   * @member {string} [diskSerialNumber] Serial number of the assigned disk.
   * @member {string} [bitLockerKey] Bit Locker key of the disk which can be
   * used to unlock the disk to copy data.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiskSecret
   *
   * @returns {object} metadata of DiskSecret
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiskSecret',
      type: {
        name: 'Composite',
        className: 'DiskSecret',
        modelProperties: {
          diskSerialNumber: {
            required: false,
            readOnly: true,
            serializedName: 'diskSerialNumber',
            type: {
              name: 'String'
            }
          },
          bitLockerKey: {
            required: false,
            readOnly: true,
            serializedName: 'bitLockerKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DiskSecret;