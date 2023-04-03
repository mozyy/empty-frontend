/* tslint:disable */
/* eslint-disable */
/**
 * empty-blog
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Blog
 */
export interface Blog {
    /**
     * 
     * @type {string}
     * @memberof Blog
     */
    author: string;
    /**
     * 
     * @type {Date}
     * @memberof Blog
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof Blog
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Blog
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof Blog
     */
    markdown: string;
    /**
     * 
     * @type {string}
     * @memberof Blog
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof Blog
     */
    title: string;
    /**
     * 
     * @type {Date}
     * @memberof Blog
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Blog interface.
 */
export function instanceOfBlog(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "markdown" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function BlogFromJSON(json: any): Blog {
    return BlogFromJSONTyped(json, false);
}

export function BlogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Blog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author': json['author'],
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'image': json['image'],
        'markdown': json['markdown'],
        'summary': json['summary'],
        'title': json['title'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function BlogToJSON(value?: Blog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': value.author,
        'created_at': (value.createdAt.toISOString()),
        'id': value.id,
        'image': value.image,
        'markdown': value.markdown,
        'summary': value.summary,
        'title': value.title,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

