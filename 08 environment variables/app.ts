/**
 * Node provides environment variables.
 * Those variables are located in separate files starting like .env
 * Depending on an environment we require different variables. E.g. a database for development might be different configured to a database in production.
 *
 * Therefore we have different types of environment files.
 * 1. .env - contains general environment variables which are the same for each environment.
 * 2. .env.development - contains environment variable for environments which are marked as development
 * 2. .env.test - contains environment variable for environments which are marked as test
 * 3. .env.production - contains environment variable for environments which are marked as production
 *
 * A library to load the environment variable is dotenv.
 * By calling the dotenv.config() the common variables are loaded
 * Anyway it is required to load the specific variables for an environment
 *
 * This can be achieved as follows
 * 1. npm install dotenv @types/dotenv
 * 2. import dotenv and path
 * 3. It is important to set the environment of a node environment. E.g. when setting up a docker container with node for running an express server,
 * we have to set the NODE_ENV to "production", otherwise the system wouldn't be able to get the current environment version
 */

import * as dotenv from "dotenv";
import * as path from "path";

/**
 * As the TypeScript code is transpiled we need to load the environment variables separately (by using the relative path with "process.cwd()"), which are still located in the root folder and not in the ./dist or ./out folder
 */
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

/**
 * The AppConfig provides access to the environment variables
 * This is just syntactical sugar, for an easier access
 */
const AppConfig = {
  dbHost: process.env.DB_HOST,
};

console.log(AppConfig.dbHost);
