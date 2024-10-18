# property_management

Property Management software

### Project Structure

- `/client`: all the front end, currently only have `/webapp`
- `/server`: backend

### Pre-requisite

- Node v22
- Postgres 16

### Tech stack

- Vite / React
- Node / Express
- Drizzle / Postgres

### File and Folder structure in server

- colocation structure
- kebab-case for different components in a feature folder

```
├── api
│   ├── [featureName]
│   |   ├── [featureName]-routes.ts         // all the different routes belongs to the
│   |   ├── [featureName]-controller.ts     // Orchestration ( get request from routes and assigned to different services)
│   |   ├── [featureName]-service.ts        // all the buisness logic
feature
│   |   ├── [featureName]-helpers.ts        // helper function belongs to the feature
│   |   ├── [featureName]-middleware.ts     // middleware that belongs to the feature (i.e. validation)
│   │   ├── [featureName]-type.ts           // all the types used in the feature
│   │   ├── {subFeatureName}                // same module naming process as parent feature
├── middleware                              // general middlware (i.e auth)
├── utils                                   // general utills functions
├── tests
├── database
│   ├── schema                              // all the model from database
│   ├── index.js
│   ├── migration
├── index.ts
└──
```

### How to launch the app
