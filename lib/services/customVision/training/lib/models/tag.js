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
 * Represents a Tag
 *
 */
class Tag {
  /**
   * Create a Tag.
   * @member {uuid} [id] Gets the Tag ID
   * @member {string} [name] Gets or sets the name of the tag
   * @member {string} [description] Gets or sets the description of the tag
   * @member {number} [imageCount] Gets the number of images with this tag
   */
  constructor() {
  }

  /**
   * Defines the metadata of Tag
   *
   * @returns {object} metadata of Tag
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Tag',
      type: {
        name: 'Composite',
        className: 'Tag',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
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
          imageCount: {
            required: false,
            readOnly: true,
            serializedName: 'imageCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Tag;