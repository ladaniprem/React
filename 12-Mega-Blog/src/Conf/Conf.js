const conf = {
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT) || '',
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID) || '',
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID) || '',
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) || '',
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID) || '',
}

export default conf;

// Note: The above code uses Vite's environment variables, which are prefixed with VITE_.
// Make sure to define these variables in your .env file or Vite configuration.

// “conf” is short for configuration. It’s a naming convention used across tech to clearly indicate that the file or variable holds configuration data—settings that define how your app behaves, rather than the actual logic of the app.
//  You might see filenames like app.conf, config.js, or site.config.json. Inside, you'll often find things like:
// - API keys
// - Database URLs
// - Feature flags
// - Port numbers
// - Environment settings
// It makes things tidy and intuitive—like labeling a drawer so you know what's inside. You open conf, you expect settings, not code logic.
