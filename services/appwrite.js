import { Platform } from "react-native";
import { Client, Databases } from "react-native-appwrite";

const config = {
    endpoint : process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectID : process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    db : process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    col : {
        notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID
    }

};

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectID);

switch (Platform.OS) {

    case 'android':
        client.setPlatform (process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
        break;

}

const database = new Databases(client);

export { client, config, database };

