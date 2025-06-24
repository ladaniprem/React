import { Client, Databases, ID, Storage, Query } from 'appwrite';
import conf from '../conf/Conf';

export class AppwriteService {

    client = new Client();
    Databases;
    Storage;  // bucket is other name of the storage 
    Query;

    constructor(){
        this.client
           .setEndpoint(conf.appwriteEndpoint)
           .setProject(conf.appwriteProjectId);
           this.Databases = new Databases(this.client);
           this.Storage = new Storage(this.client);
        //    this.Query = Query;
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
            
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId, // database id

                conf.appwriteCollectionId, // collection id

                slug, // this the document ID, you can use ID.unique() for a unique ID
               
                {
                    title: title,
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                    userId: userId,
                }
            )
        } catch (error) {
            console.log('Error creating post:', error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {

            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            ),
            {
               title: title,
               content: content,
               featuredImage: featuredImage,
               status: status,
            }
            
        } catch (error) {
            console.log(" Error updating post:", error);
        }
    }

    async deletePost(slug) {
       try {

        await this.Databases.deleteDocument(
            conf.appwriteDatabaseId, // database id
            conf.appwriteCollectionId,
            slug // this the document ID, you can use ID.unique() for a unique ID
        )

        return true; // or return a success message
        // {
        //     title: title,
        //     content: content,
        //     featuredImage: featuredImage,
        //     status: status,
        // }

        
       } catch (error) {
        console.log("Error deleting post:", error);
        return false; // or return an error message
       }
}

 async getPost(slug){
    try {
        
        return await this.Databases.getDocument( // single post and the multiple post to use the listDocuments method
            conf.appwriteDatabaseId, // database id
            conf.appwriteCollectionId, // collection id
            slug // this the document ID, you can use ID.unique() for a unique ID
        )

    } catch (error) {
        console.log(" Error getting post:", error);
        return false; // or return an error message
    }
 }


 async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.Databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
             queries,
        );
             
            // [
            //  [Query.equal("status","active")]
            // ]
    } catch (error) {
        console.log("Error getting posts:", error);
        return false;
    }
 }

 async uploadFile(file){
     try {
         return await this.Storage.createFile(
        conf.appwriteBucketId, // bucket id
          ID.unique(), // file id, you can use ID.unique() for a unique ID
          file // the file to upload
         )
     } catch (error) {
        console.log("Error uploading file:", error);
        return false;        
     }
 }

 async deleteFile(fileId) {

    try {
        await this.Storage.deleteFile(
            conf.appwriteBucketId, // bucket id
            fileId // file id, you can use ID.unique() for a unique ID
        )
        return true; // or return a success message
        
    } catch (error) {
        console.log("Error deleting file:", error);
        return false;
    }
 }

    getFilePreview(fileId, width = 400, height = 400, quality = 80) {   // their does not use the aysnc and await because of the getFilePreview method is not a promise, it is a synchronous method and fast method execute
        return this.Storage.getFilePreview(
            conf.appwriteBucketId, // bucket id
            fileId, // file id
            width, // width of the preview
            height, // height of the preview
            quality // quality of the preview (0-100)
        );

    }

//     async getPagination(queries = [], page = 1, limit = 10) {
//     try {
//         return await this.Databases.listDocuments(
//             conf.appwriteDatabaseId,
//             conf.appwriteCollectionId,
//             [
//                 ...queries,
//                 Query.limit(limit),
//                 Query.offset((page - 1) * limit)
//             ]
//         );
//     } catch (error) {
//         console.log("Error fetching paginated posts:", error);
//         return false;
//     }
// }


}

const appwriteServiceInstance = new AppwriteService();

export default appwriteServiceInstance;


/* 
Content Representation Types
===========================

Class           Type           Description
-----           ----           -----------
file-preview    File Preview   A class representing a file preview

Preview Types:
-------------
1. is-no-file
    - Type: No Image
    - Usage: When uploaded file is not an image and preview unavailable
    
2. file-preview-content
    - Type: Content
    - Usage: For image uploads (.png, .jpeg, .jpg)
    - Shows as thumbnail

Appwrite Compression Overview
========================
Core Concepts
---------------
- Automatic Compression: Appwrite compresses API responses and image previews 
dynamically to save bandwidth and improve speed.

Supported Algorithms:
--------------------
- Brotli: Preferred for high efficiency, especially in HTTP/2 and HTTP/3
- Gzip: Fallback for older clients or HTTP/1.1
- Zstd: For server-to-server communication (fast decompression, high compression)

When Compression Happens:
------------------------
- Text-based MIME types only (text/plain, application/json, text/html, image/svg+xml)
- Response size must exceed 1KB
- Client must support it via Accept-Encoding header

Prioritization:
--------------
- Order: Brotli > Zstd > Gzip (based on client support)
- Falls back to no compression (identity) if none supported

Image Preview Support:
---------------------
Appwrite's getFilePreview() supports:
- WebP: Highly compressed and efficient, auto-converted if supported
- JPEG/JPG: Reliable quality-based compression
- PNG: Lossless with metadata/transparency optimization
- GIF
- HEIC
- AVIF

Format Behavior:
---------------
- WebP: Default choice for supported clients
- JPEG: Fallback format with adjustable quality
- PNG: Limited compression for lossless quality
- Automatic format fallback based on browser support
*/

/*
/*
Important Appwrite Concepts and Methods
=====================================

1. Post Operations:
------------------
createPost:
- Creates document in database
- Requires: title, slug, content, image, status, userId
- Returns document object

updatePost:
- Updates existing document
- Requires: slug and updated fields
- Maintains document ID

deletePost:
- Removes document by slug
- Returns boolean success status

getPost:
- Fetches single document by slug
- Uses getDocument() method

getPosts:
- Lists multiple documents
- Accepts query filters
- Default: status="active"

2. File Operations:
------------------
uploadFile:
- Creates file in storage bucket
- Generates unique ID
- Returns file metadata

deleteFile:
- Removes file by ID
- Returns boolean success

getFilePreview:
- Generates image previews
- Supports width/height/quality
- Synchronous operation
- No async/await needed

getPagination:
- Lists documents with pagination
- Accepts queries, page, limit
- Uses Query.limit() and Query.offset()
- Returns paginated results

3. Best Practices:
-----------------
- Use try/catch for error handling
- Include proper error messages
- Return false/true for operation status
- Use ID.unique() for unique identifiers
- Implement proper query filters
*/
