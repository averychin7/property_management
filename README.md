# Brainworks Property management software

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
- npm (package manager)

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
├── db
│   ├── schema                              // all the model from database
│   ├── index.js
│   ├── migrations                          // all migration files generated by drizzle
├── index.ts
└──
```

### How to launch the app

1. Set up database and add database url in env file (only do once)
2. install packages in both client and server folder with `npm install`
3. run `npm run dev`
   - it will trigger front and backend with concurrently

### How to create migration

- Option 1: `npx drizzle-kit push` (do both generate and migrate)

- Option 2: `npx drizzle-kit generate` then `npx drizzle-kit migrate`
