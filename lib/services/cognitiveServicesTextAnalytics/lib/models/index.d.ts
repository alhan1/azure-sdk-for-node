/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the MultiLanguageInput class.
 * @constructor
 * @member {string} [language] This is the 2 letter ISO 639-1 representation of
 * a language. For example, use "en" for English; "es" for Spanish etc.,
 * @member {string} [id] Unique, non-empty document identifier.
 * @member {string} [text]
 */
export interface MultiLanguageInput {
  language?: string;
  id?: string;
  text?: string;
}

/**
 * @class
 * Initializes a new instance of the MultiLanguageBatchInput class.
 * @constructor
 * @member {array} [documents]
 */
export interface MultiLanguageBatchInput {
  documents?: MultiLanguageInput[];
}

/**
 * @class
 * Initializes a new instance of the KeyPhraseBatchResultItem class.
 * @constructor
 * @member {array} [keyPhrases] A list of representative words or phrases. The
 * number of key phrases returned is proportional to the number of words in the
 * input document.
 * @member {string} [id] Unique document identifier.
 */
export interface KeyPhraseBatchResultItem {
  readonly keyPhrases?: string[];
  readonly id?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorRecord class.
 * @constructor
 * @member {string} [id] Input document unique identifier the error refers to.
 * @member {string} [message] Error message.
 */
export interface ErrorRecord {
  id?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the KeyPhraseBatchResult class.
 * @constructor
 * @member {array} [documents]
 * @member {array} [errors]
 */
export interface KeyPhraseBatchResult {
  readonly documents?: KeyPhraseBatchResultItem[];
  readonly errors?: ErrorRecord[];
}

/**
 * @class
 * Initializes a new instance of the InternalError class.
 * @constructor
 * @member {string} [code]
 * @member {string} [message]
 * @member {object} [innerError]
 */
export interface InternalError {
  code?: string;
  message?: string;
  innerError?: InternalError;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * @member {string} [code]
 * @member {string} [message]
 * @member {string} [target]
 * @member {object} [innerError]
 * @member {string} [innerError.code]
 * @member {string} [innerError.message]
 * @member {object} [innerError.innerError]
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
  target?: string;
  innerError?: InternalError;
}

/**
 * @class
 * Initializes a new instance of the Input class.
 * @constructor
 * @member {string} [id] Unique, non-empty document identifier.
 * @member {string} [text]
 */
export interface Input {
  id?: string;
  text?: string;
}

/**
 * @class
 * Initializes a new instance of the BatchInput class.
 * @constructor
 * @member {array} [documents]
 */
export interface BatchInput {
  documents?: Input[];
}

/**
 * @class
 * Initializes a new instance of the DetectedLanguage class.
 * @constructor
 * @member {string} [name] Long name of a detected language (e.g. English,
 * French).
 * @member {string} [iso6391Name] A two letter representation of the detected
 * language according to the ISO 639-1 standard (e.g. en, fr).
 * @member {number} [score] A confidence score between 0 and 1. Scores close to
 * 1 indicate 100% certainty that the identified language is true.
 */
export interface DetectedLanguage {
  name?: string;
  iso6391Name?: string;
  score?: number;
}

/**
 * @class
 * Initializes a new instance of the LanguageBatchResultItem class.
 * @constructor
 * @member {string} [id] Unique document identifier.
 * @member {array} [detectedLanguages] A list of extracted languages.
 */
export interface LanguageBatchResultItem {
  readonly id?: string;
  readonly detectedLanguages?: DetectedLanguage[];
}

/**
 * @class
 * Initializes a new instance of the LanguageBatchResult class.
 * @constructor
 * @member {array} [documents]
 * @member {array} [errors]
 */
export interface LanguageBatchResult {
  readonly documents?: LanguageBatchResultItem[];
  readonly errors?: ErrorRecord[];
}

/**
 * @class
 * Initializes a new instance of the SentimentBatchResultItem class.
 * @constructor
 * @member {number} [score] A decimal number between 0 and 1 denoting the
 * sentiment of the document. A score above 0.7 usually refers to a positive
 * document while a score below 0.3 normally has a negative connotation. Mid
 * values refer to neutral text.
 * @member {string} [id] Unique document identifier.
 */
export interface SentimentBatchResultItem {
  readonly score?: number;
  readonly id?: string;
}

/**
 * @class
 * Initializes a new instance of the SentimentBatchResult class.
 * @constructor
 * @member {array} [documents]
 * @member {array} [errors]
 */
export interface SentimentBatchResult {
  readonly documents?: SentimentBatchResultItem[];
  readonly errors?: ErrorRecord[];
}

/**
 * @class
 * Initializes a new instance of the MatchRecordV2dot1 class.
 * @constructor
 * @member {string} [text] Entity text as appears in the request.
 * @member {number} [offset] Start position (in Unicode characters) for the
 * entity match text.
 * @member {number} [length] Length (in Unicode characters) for the entity
 * match text.
 */
export interface MatchRecordV2dot1 {
  text?: string;
  offset?: number;
  length?: number;
}

/**
 * @class
 * Initializes a new instance of the EntityRecordV2dot1 class.
 * @constructor
 * @member {string} [name] Entity formal name.
 * @member {array} [matches] List of instances this entity appears in the text.
 * @member {string} [wikipediaLanguage] Wikipedia language for which the
 * WikipediaId and WikipediaUrl refers to.
 * @member {string} [wikipediaId] Wikipedia unique identifier of the recognized
 * entity.
 * @member {string} [wikipediaUrl] URL for the entity's English Wikipedia page.
 * @member {string} [bingId] Bing unique identifier of the recognized entity.
 * Use in conjunction with the Bing Entity Search API to fetch additional
 * relevant information.
 * @member {string} [type] Entity type from Named Entity Recognition model
 * @member {string} [subType] Entity sub type from Named Entity Recognition
 * model
 */
export interface EntityRecordV2dot1 {
  name?: string;
  matches?: MatchRecordV2dot1[];
  wikipediaLanguage?: string;
  wikipediaId?: string;
  readonly wikipediaUrl?: string;
  bingId?: string;
  type?: string;
  subType?: string;
}

/**
 * @class
 * Initializes a new instance of the EntitiesBatchResultItemV2dot1 class.
 * @constructor
 * @member {string} [id] Unique document identifier.
 * @member {array} [entities] Recognized entities in the document.
 */
export interface EntitiesBatchResultItemV2dot1 {
  readonly id?: string;
  readonly entities?: EntityRecordV2dot1[];
}

/**
 * @class
 * Initializes a new instance of the EntitiesBatchResultV2dot1 class.
 * @constructor
 * @member {array} [documents]
 * @member {array} [errors]
 */
export interface EntitiesBatchResultV2dot1 {
  readonly documents?: EntitiesBatchResultItemV2dot1[];
  readonly errors?: ErrorRecord[];
}
