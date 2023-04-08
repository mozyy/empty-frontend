/* tslint:disable */
/* eslint-disable */
/**
 * blog/blog.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1NewBlog } from './V1NewBlog';
import {
    V1NewBlogFromJSON,
    V1NewBlogFromJSONTyped,
    V1NewBlogToJSON,
} from './V1NewBlog';

/**
 * 
 * @export
 * @interface BlogServiceUpdateRequest
 */
export interface BlogServiceUpdateRequest {
    /**
     * 
     * @type {V1NewBlog}
     * @memberof BlogServiceUpdateRequest
     */
    blog?: V1NewBlog;
}

/**
 * Check if a given object implements the BlogServiceUpdateRequest interface.
 */
export function instanceOfBlogServiceUpdateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlogServiceUpdateRequestFromJSON(json: any): BlogServiceUpdateRequest {
    return BlogServiceUpdateRequestFromJSONTyped(json, false);
}

export function BlogServiceUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogServiceUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blog': !exists(json, 'blog') ? undefined : V1NewBlogFromJSON(json['blog']),
    };
}

export function BlogServiceUpdateRequestToJSON(value?: BlogServiceUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blog': V1NewBlogToJSON(value.blog),
    };
}

