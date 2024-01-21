import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createpost :: error", error);
        }
    }

    //there is slug is used as a documentId also we can use id.unique()
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletepost :: error", error);
            return false;
        }
    }

    //to get single post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
             conf.appwriteDatabaseId,
             conf.appwriteCollectionId,
             slug  
            )
        } catch (error) {
            console.log("Appwrite service :: gatepost :: error",error);
            return false;  
        }
    }

    //to get all Posts
    async getPosts(queries =[Query.equal("status","active")] ){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getallpost :: error",error);
            return false;   
        }
    }

    //file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: upload :: error",error);  
            return false;
        }
    }

    //this is for deleting files this is refrences for the feature
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
              conf.appwriteBucketId,
              fileId  
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error); 
            return false;
        }
    }

    //file preview 
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    //download file
    getFileDownload(fileId){
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service()
export default service;

