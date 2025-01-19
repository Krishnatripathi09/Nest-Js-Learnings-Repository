## Files Generated When we run the Command nest new project-name and their Uses
When we run the command nest new project-name, NestJS generates several files and directories in our project

 ***.eslintrc.js*** 
Purpose: This is a configuration file for ESLint. EsLint is a tool that helps us write better (JS or TS) code by catching Errors and enforcing coding style Rules.

# Why do we need it?
Imagine We are writing a story, and someone helps us by pointing out typos or grammar mistakes. That’s what ESLint does for our code—it ensures our code is clean and follows best practices.
It helps avoid bugs and makes our code easier for others to read.

# Example:
Here’s a small rule from the .eslintrc.js file:

module.exports = {
  rules: {
    'no-console': 'warn',
  },
};

This rule gives us a warning whenever we use console.log in your code. This is helpful because console.log is not ideal for production environments.

# What if we don’t use it?
Our code will still work, but we might miss common mistakes.
It’ll be harder for us to maintain a consistent coding style.
Debugging and understanding the code later might become more difficult.

 ***.prerrierrc.js***

Purpose: This file is used to configure Prettier, a tool that formats your code automatically to make it clean, consistent, and easy to read.

***nest-cli.json***
This file is the configuration file for the Nest CLI. It tells the CLI how to structure and handle our project when we use commands like nest generate or nest build.

For eg: It looks like 
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src"
}
- Collection:  tells the Nest CLI which schematics (blueprints) to use when generating files like modules, controllers, or services.
- sourceRoot: - This tells the CLI where the main source code of our project lives. By default, it’s set to src, meaning all the code files are organized under the src folder.

It simplifies project setup by centralizing configuration for the CLI.
If we do not use this The CLI will not know how to organize or handle our project. 

For Eg:
We want to create a new service for your app. Without nest-cli.json, we  need to write:
- nest generate service src/users/users
With nest-cli.json, we can simply write:
- nest generate service users
CLI knows to place the new service inside the src folder automatically.

***package.json***
package.json is like a blueprint. It lists all the dependencies, scripts, and basic information about the project.
This makes it easier to share out project because others don’t need the node_modules folder. They can simply run npm install to recreate the exact same setup by downloading everything listed in package.json

***tsconfig.build.json***
tsconfig.build.json file helps define how to transpile our TypeScript (TS) code into JavaScript (JS) that can be run in Node.js or browsers. It's like a set of instructions for the TypeScript compiler to tell it how to handle the conversion of our code, including where to place the resulting JavaScript files and what kind of JavaScript syntax it should use.

In short:
It tells how to convert TypeScript into JavaScript.
It makes sure that the resulting JavaScript is compatible with your target environment (Node.js, browser, etc.).
It helps to separate development and production setups by providing different configurations for building your app.

Unlike the general tsconfig.json (which may be used during development), tsconfig.build.json focuses on settings specific to the production build.
- To summarize:
__tsconfig.json__: Development-specific configuration for TypeScript.
__tsconfig.build.json__: Production-specific configuration for the build process.

***app.contoller.ts***
In NestJS, we define the behavior for each HTTP method (GET, POST, PUT, PATCH, DELETE) inside our controller. The controller listens for specific requests to a route, processes them, and returns a response.


***app.module.ts***
This is one of the most important files in our project which serves as the root of all modules in our project.
It oraganizes all other modules in our App. It serves as the starting point of our application.
for eg: if we have different modules like UserModule, AuthModule or ProductModule we can import and use them in 
our App Module like this.
@Module({
  imports: [UserModule, AuthModule, ProductModule], // Importing feature modules
})
export class AppModule {}

The Module's(Manager's) main job is to register the controller (waiter) and service (chef) so they can collaborate.
It doesn't directly interact with the request/response cycle; it just makes sure everything is set up properly for the controller and service to work together.

***app.service.ts***
This is a service class that encapsulates the business logic of our application. It can be used to
perform complex operations, like database interactions, file operations, or even external API calls.
and then return the response to our Controller.
So all the Business Logic like fetching the data from DB or Updating the data in DB will all be written in 
service file.

Without a service, the controller would have to handle both HTTP request logic and business logic, making it cluttered and harder to maintain.

**__main.ts__**
This is the main entry point of our application NestJS Application.
It's where the application starts running.

The main.ts file contains the logic to create and start the NestJS application. The NestJS framework uses the NestFactory to create an instance of the application. This instance will use all the modules, controllers, and services you've set up in your project.