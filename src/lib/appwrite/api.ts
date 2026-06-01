import type { INewUser } from '@/types';
import { ID } from 'appwrite';
import { account, appwriteConfig, avatars, databases } from './config';
import { Query } from 'appwrite';

// criar conta
export async function createUserAccount(user: INewUser) {
    try{
        const newAccount = await account.create(
            ID.unique(), // id da conta para testar
            user.email,
            user.password,
            user.name
        );

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        })

        return newUser;
    }catch(error) {
        console.log(error);
        return error;
    }
}

export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL | string; // antes era URL mas tive que mudar pra string se der errado arrumar depois
    username?: string;

}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )

        return newUser;
    } catch (error) {
        console.log(error);
    }
}

// fazer login na conta
export async function signInAccount(user: {email: string; password: string}){
    try{
        const session = await account.createEmailPasswordSession(user.email, user.password);

        return session;
    } catch(error){
        console.log(error);
    }
}

// pegar o usuario
export async function getCurrentUser(){
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountID', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}