
# Nest-Js 
NestJS is a robust and scalable framework built on top of Node.js. It leverages TypeScript to develop efficient, maintainable, and modular server-side applications, making it ideal for building modern, enterprise-grade applications.

### Features of NestJS
Nest js uses TypeScript to build the apps and EOD this Typescript code is converted to JS which is then run by our Node engine.

-   **Modular Design**: NestJS follows a modular design, allowing developers to create separate modules.It's codebase is oraganized around modules. It promotes clear separation of concern by dividing our app code into modules,services controllers and providers. This enhances code Readability, Maintainability and Testability

-   **Dependency Injection**: NestJS uses dependency injection to manage dependencies between modules.

-   **Flexibility** : It is highly adaptable allowing us to choose between express or fastify as the underlying HTTP server. It seamlessly integrates with nodejs libraries and frameworks.

-   **Type Safety**: NestJS is built on top of TypeScript, which provides type safety.

-   **Microservices** : The modular Architecture and dependency injection makes Nest-js Suitable for microservices architecture.

## Command to Create a New Nest-JS Project 
nest new (Project-name )
- we can run the command nest --help to see a list of all the commands that we can use to create
  our project or project files

In Package.json we have various scripts to start our project for Eg:
- "start": "nest start",
- "start:dev": "nest start --watch", so if we start our application using just start then it will start
  and will not watch for any Changes but if we start it using start:dev it will start the appication in wacth mode  and will compile application instantly for any changes.



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
They act as a bridge between the client and the internal logic of out Nest Js Application.

For Eg: when we send a GET request http://localhost:3000/user to this URL then controller will have 
a GET method defined to listen GET requests at this URL and will return the Appropriate response accordingly 


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

***entity***
It defines the structure of database entities.Used when interacting with databases like TypeOrm.

***Test File***
It Contains the unit Test for the controller to ensure its functionality. 

**__main.ts__**
This is the main entry point of our application NestJS Application.
It's where the application starts running.

The main.ts file contains the logic to create and start the NestJS application. The NestJS framework uses the NestFactory to create an instance of the application. This instance will use all the modules, controllers, and services you've set up in your project.


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

NestFactory.create(AppModule) creates an instance of your NestJS application, using the root module (AppModule) as the starting point.
NestFactory is a helper class provided by NestJS to initialize the application.
AppModule is the main module where all your application components, controllers, and providers are imported and registered.


***@Module()***
In Nest JS Module is a class annotated with @Module decorator.
This decorator is used to define a module in NestJS. It's a class that imports other modules 
and provides the necessary methods to configure the NestJS application.
It acts as a container for a closely related set of functionality, encapsulating providers (services, controllers), and other modules that work together to perform specific tasks.
Providers: Providers can be services,controllers or other classes taht are managed by the module.

When we create a new module class it must be imported in root module(app module) of our Nest JS application so our root module is aware of this new module file.

## Creating a Module 
We can create a module manually for eg: if we want to create a users module then inside the src folder we can 
create a new folder named users and inside that folder we can create a new file named users.module.ts and then we can write the logic to export the module 
" for eg: 
import { Module } from "@nestjs/common"

@Module({
    imports:[]
})
export class UserModule{}" 

Here we are exporting a UserModule and then we can import this module inside our root module that is app module
to use it in our app.
- We can also created a module using cli by running the command nest g(generate) module "module name"
-----> __nest g module users__ (this will directly create a module users)

## REST API
A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building web services. It uses HTTP methods (like GET, POST, PUT, DELETE) to enable communication between a client (like a web browser or mobile app) and a server.

***Why is it called REST API?***
The term "REST" comes from Representational State Transfer, which is a set of architectural principles defined by Roy Fielding in his doctoral dissertation in 2000. REST APIs are called so because they adhere to these principles to ensure scalability, performance, and ease of maintenance.

__Other Types of APIs (Apart from REST):__
***SOAP (Simple Object Access Protocol)***: A protocol for exchanging structured information in web services using XML.
***GraphQL***: A query language for APIs that allows clients to request exactly the data they need.
***RPC (Remote Procedure Call)***: A protocol where a client executes a function or procedure on a remote server.

- An API is called Rest API when it follows below six (1 Optional) design principles
- Client-Server Architecture
- Stateless
- Cacheable
- Layered System
- Uniform InterFace
- Code On Demand (Optional) 

- ___Client-Server Architecture__
Definition: The client and server are independent of each other. The client handles the user interface and user interactions, while the server manages the backend logic, data, and storage.
Why It Matters: This separation allows each part to evolve independently without affecting the other, leading to better scalability and maintainability.
Example:

Imagine a weather app on your phone (the client). It requests the current weather data from a server. The server processes the request and sends back the weather data, which the app then displays.
The client doesn’t need to know how the server gets the weather data, and the server doesn’t care how the client displays it..
  
___Stateless__
Definition: Each request from a client to the server must contain all the information needed to understand and process the request. The server does not store any client-specific information between requests (i.e., no session state is maintained on the server).

Why It Matters:
This simplifies the server design and improves scalability.
Since the server doesn’t rely on any stored state, it can handle requests independently, making it easier to distribute the load across multiple servers.

Example:

Imagine you’re ordering food online. Each time you interact with the app (e.g., searching for items, adding items to your cart), the server doesn’t "remember" you between actions.
Instead, the app (client) sends all necessary information (like your user ID, cart contents, etc.) with every request to the server.
If the app wants to "remember" something (like your cart), it uses client-side storage (e.g., cookies or local storage).

- ___Cacheable__
Definition: Responses from the server should indicate whether they can be cached by the client or any intermediate components (like proxies). Caching allows clients to reuse prior responses for future requests, reducing the need to repeatedly contact the server.

Why It Matters:
Improves performance by reducing server load and latency.
Ensures faster responses for clients.

Example:
Imagine a news website. When you open the homepage, the server sends the list of articles. The response includes cache-related headers, like Cache-Control: max-age=3600, which tells the browser it can store this data for an hour.
If you revisit the homepage within that hour, your browser will display the cached content instead of making a new request to the server.

- ___Layered System__
Definition: A REST API should be designed so that it can work through multiple layers, such as load balancers, caching servers, proxies, and application servers, without the client needing to know the exact architecture.

Why It Matters:
Improves scalability by allowing load balancing and caching at intermediate layers.
Enhances security by restricting direct access to the server (e.g., through firewalls or proxies).
Example:

When you visit an e-commerce site, your request might go through:
A CDN (Content Delivery Network) to serve static assets (e.g., images, stylesheets).
A load balancer to distribute traffic across multiple servers.
The backend server, which processes your request and fetches data from the database.
The client only interacts with a single endpoint (e.g., https://api.example.com), unaware of these intermediate layers.


- ___Uniform Interface__
Definition: A REST API should have a standardized way for clients to interact with it, ensuring consistency and predictability. This is achieved through four key constraints:

Resource Identification: Each resource is identified by a unique URI (e.g., /users/123 for user ID 123).
Resource Manipulation via Representations: Clients interact with resources using their representations (e.g., JSON, XML) and standard HTTP methods (GET, POST, PUT, DELETE).
Self-Descriptive Messages: Each request and response contains all the information needed to understand it (e.g., HTTP status codes, headers, and body).
Hypermedia as the Engine of Application State (HATEOAS): Responses may include links to related resources, helping clients navigate the API dynamically.
Why It Matters:

Simplifies API usage by adhering to predictable standards.
Reduces client-server coupling, as clients don’t need to know implementation details.
Example:

For a blog API:
GET /posts: Fetches all blog posts.
GET /posts/1: Fetches the blog post with ID 1.
POST /posts: Creates a new blog post.
DELETE /posts/1: Deletes the blog post with ID 1.
The client can understand the API structure based on these consistent rules.


___Code on Demand (Optional)__
Definition: A server can temporarily extend a client’s functionality by transferring executable code (like JavaScript) to the client, which the client can then execute.
Why It Matters:
Adds flexibility by enabling dynamic features without requiring client-side updates.
Useful for delivering complex functionalities, like form validations or interactive UI components.
Example:

Imagine an e-commerce website where the server sends JavaScript code to dynamically validate a credit card form. The browser (client) runs this code to ensure the entered card details meet certain criteria before submitting them to the server.

This principle is optional in REST APIs. Many APIs do not use it, as it introduces additional complexity and security concerns.



***Controller***
When we create any controller file for any module like users or Auth we decorate it with 
@Controllers() decorator and then inside the decorartor we pass the path which will call this controller
for eg: 
@Controller('users')
export class UsersController{}

Inside the controller we have passed 'users' which means when sometries to hit the 'Base_Url/users' he will
directed to this controller 

To create the Controller file we can run the command nest g controller (file name) users
after creating the controller we have to import to it in our user module as we have created it for users
so we can import it like  :
@Module({
    controllers: [UsersController],
    imports:[]
})
here we have defined controllers and then imported the [UserController] inside it.
When we create a controller with command __nest g controller auth__ we don't have to manually import it.It will 
automatically get imported in our module.

***Routing Decorators***
When we create a module and controller for users for eg:
@Controller('users')

export class UsersController{
 getUsers(){
    return "You made a Get Request "
 }

} 
Here we have a controlller for our users module but Nest JS will not know that this controller should handle
all the  requests coming to this route "https://localhost:3000/users" 
So we have to use the routing decorators to tell nest js that this controller should handle all the requests 
coming to this route.

__Routing Decorators__ :-
A decorator in NestJS is a special type of function that can be attached to a class, method, property, or parameter to modify or enhance its behavior

- Routing decorators in Nest Js are used to define routes that our application will
respond to. They provide a declrative way to map HTTP methods(GET,PUT,POST,PATCH,DELETE) to specify controller methods.
so to make getUSers method to handle GET requests we have to decorate it with @Get() decorator.
for Eg:

@Controller('users')

export class UsersController{
  __@Get()__  /*decorated it with get decorator*/
 getUsers(){
    return "You made a Get Request "
 }

} 

Similarly to create an User in Our System we need to make Post Request to our backend system."https://localhost:3000/users" 

@Controller('users')
export class UsersController{
 __@Post()__
 createUser(){
    return "You made a Post Request to /users"
 }
}

## Services 
Srevices in Nest Js are classes that encapsulate the business logic of our application.
They are responsible for performing tasks such as data access calculations & Other core functionalities.

## Route Parameters
Route parameters are placeholders within a route that allow us to capture dynamic parts of the URL.They provide 
flexibilty and enable your application to handle different data based on the specific values provided in URL.
for eg:
To get all users in our system we will have a GET method for all the users
Get All Users : GET https://localhost:3000/users
to Get single user from The DB we will have route : GET https://localhost:3000/users/101
so here the value 101 is for a specific user and its dynamic that is it's value will change and will be different for different users: 
- So this change can be achieved dynamically using Route Parameters:
- So like this we have multiple route Params in  a URL 
For Eg: GET https://localhost:3000/users/male/london
so here the male/london can change for different users from different cities like we are fetching a user from Pune who is female etc.

So here we will create a route in our APP where we will access a user by his Id
 @Get()
 getUsersById(){

 }

 so to achieve this we specify a route parameter in our Get method 
 @Get(':id')

 so whenever a GET request will be made to "https://localhost:3000/users/101" URL the /101 will be match the GET method specified in Our Example.

 We can also specify multiplle Route Parameters in Our Get Method 
 For eg:
 @Get(':id/:name/') so after every slash(/) we can add a colon and the name of the route Parameter.

We can also make a Route Parameter Optional by adding a question Mark after the Route Parameter Name
for eg:

 @Get(':id/:name/:gender?')  here we have made our gender Parameter optional so one may or may not specify the
 gender in our Route.

Now In order to use our parameter inside our request we have to use param decorator and the value of users will assigned to our route Parameters
 @Get(':id/:name/:gender')
 getUsersById(@Param() param:any){

 }

 When we want to read the Value of Just One parameter then we can assign the value of that parameter inside our 
 param decorator.
 for eg:
 @Get(':id/:name/:gender')
 getUsersById(@Param('id') param:any){

 }
 So here we are just Reading the value of just one parameter even if we have passed multiple parameters.
 But if we want to read the value of all parameters then we don't need to assign any value to param decorators.

 __NOTE__ All Our Optional Parameters will come in the End **

 @Get(':id')
 getUsersById(@Param('id') id:any){
    const usersService = new UsersService()
   return usersService.getUserById(+id)
 }

 here we are getting our user by Id by specifying our user in Param decorator but as we are getting the value in string we are converting it to integer using + (Unary operator ) which converts the string to a number if string input is a valid number.

 ## Query Strings
Query Strings are the additional information appended to the end of the URL, separated from the URL by a question mark(?). The query String consist of key-value pair, where each key is followed by an equal sign and its corresponding Value;
- for eg: GET https://localhost:3000/users?gender=male&isMarried=false
So In the above URL we have our Base Url which is **https://localhost:3000/users** and then we have some query strings which are separated from the URL using a question mark (?) now after that we have our query string name 
in key value format **gender=name** which is then separated by another key value pair **isMarried=false** by an & Sign. Here  __gender__  and  __isMarried__ are query strings with value __male__ and __false__ respectively.

To read the query Strings in our logic we can specify our query string with @Query() decorator 
and then pass the string:
   @Get()
 getUsers(@Query() query:any){
    console.log(query)
    const usersService = new UsersService()
  return  usersService.getAllUsers();
 }

 Query String is not the part of route but if we want we can specify it in our routes. We can also read a single 
 Query strings if we need by specifying the name of that query string inside our @Query decorator as an argument.
    
    @Get()
 getUsers(@Query('gender') query:any){
    console.log(query)
    const usersService = new UsersService()
  return  usersService.getAllUsers();
 }
 so here we have just specifed the value for gender query string inside the query decorator so the value of only 
 that string will be read. Here value of gender is male so only male is read in console.
 If we want to read the value of all the Query Strings then we do not need to specify any value inside the @Query
 decorator.

 we can also access the value of any specified query string using (.) Notation.
For eg: when we are not passing any query string as parameter then we can acces it usinf query.gender
  @Get()
 getUsers(@Query() query:any){
    console.log(query.gender)
    const usersService = new UsersService()
  return  usersService.getAllUsers();
 }

So in above case if we want to access the value of any specific query parameter then we can read it using (.)
notation (query.gender) as here we are reading the value of gender.

## Pipes :-
Pipes in Nest-js are functions that transforms or validate data before it reaches a controller method.
Pipes are used to clean,sanitize or convert data to specific format ensuring that the data received by the controller is in a suitable state for further processing.

Pipes are Used for:
- Data Validation - Data type,Length or Format
- Data Transformation - Can transform data into into a different format or structure. for eg: To parse Json strings,convert data types, or format Dates
- Data Sanitization - Pipes can sanitize data to remove potentially harmful content

***An ES2016 decorator is an expression which returns a function and can take a target, name and property descriptor as arguments. You apply it by prefixing the decorator with an @ character and placing this at the very top of what you are trying to decorate. Decorators can be defined for either a class, a method or a property.***

In our getUserById method in controller we are passing our id as as param and then using the unary (+) operator 
to convert the received id which is in string to number we can use built in Pipe __ParseIntPipe__
So this will convert our id from string to number.

 @Get(':id')
 getUsersById(@Param('id') id:any){
    const usersService = new UsersService()
   return usersService.getUserById(+id)
 }

 So here we can import the __ParseIntPipe__ and use it directly in our @Param decorator as second argument
 directly 
 For eg:-
  @Get(':id')
 getUsersById(@Param('id',__parseIntPipe__) id:any){
    const usersService = new UsersService()
   return usersService.getUserById(id)
 }

 Now as we have used our pipe after our id which is coming as string so the pipe will convert our string value
 to Integer an we no more need to use (+) unary operator to convert string values to integers.

 So before the request reaches the controller it will pass through the pipe and string value of id will be converted to Integer then we will read the id as a number

 To set a default value for Query Strings when a user has not specified limit or page we can use __DefaultValuePipe__
" @Get()
 getUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number, 
 @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number){

    console.log(limit,page)
  return  this.usersService.getAllUsers();
 }" 
 Here we have set the limit 10 and 1 on query string when someone tries to get users but has not specified any limit or page.

 ## DTO 
DTO known as data transfer object is a simple class that is used to represent data that is being transferred 
between different layers of an application suych as the controllers, service and repository.

so to create a dto for our user we need to create a files create-user.dto.ts
and inside that we define out DTO class and we are using a npm package to validate the data that we are going to receive for this class and we can specify the type of data using the class validator 
so here we are specifying @IsString() for our name and gender and for email we can specify as @IsEmail

import { IsString } from "class-validator"
export class CreateUserDto{
    id:number,

    @IsString()
    IsNotEmpty()
    name:string,
    @IsString()
    @IsOptional()
    gender:string,
    @IsEmail() 
    email:string,
    isMarried:boolean
}

And also we want to make our gender as optional value so if a user does not want to specify a gender he can omit that property. so to do this we can use the @IsOptional() validator which we import from class-validator
And we also don't want our name property to be empty as if someone keeps the string as empty it will considered
valid so to not keep it empty we specify one more validator IsNotEmpty() on our string.

We can also set various other validator decorators on our DTO that we can import from the Class Validator.

To use our DTO in our controller we need to install 'class-transformer' package from npm 
thenw we can import and specify the createUserDto() in our controller and we can use that 
 in our parameter type annotation
@Post()
 createUser(@Body(new ValidationPipe()),user:CreateUserDto){
    
    //this.usersService.createUser(user);
   ( return 'A new User has been Created :)'
 }

We can also create a Validation Pipe globally by passing it in our main.ts file 
and then we do not need to specify the validation pipe in every http method where we need it.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
When we specify a validation pipe in our main.ts file then this validation pipe is applied globally means that it will applied to each incoming request.

For the validation pipes we can specify the configuration options to avoid sending the malicious data into our Database. 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
  }))
  await app.listen(3000);
}
bootstrap();

Now here we have set our whitelist to true in our validation pipe so the validation pipe will not accept any extra data which  except from which is set in Our DTO. Even if we try to send extra data the validation pipe will filter that extra data.

We can also sepcify the __forbidNonWhitelisted__ to true so that it will throw an error when someone tries to send extra property into our DB

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }))
  await app.listen(3000);
}
bootstrap();

Our user is initially not an instance of createUserDto so set our user as instance of createUserDto we 
can set one more property __transform__ in our validation pipe to set our user as an instance of createUserDto.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true
  }))
  await app.listen(3000);
}
bootstrap();

so using this the request data is being validated and also being transformed into instance of createUserDto().

# Usign DTO with Route Parameter:

When we define a Route parameter in our http methods we cannot set it to optionl when using a validation pipe
so to set our Route Parameter as optional we need to create a DTO.
for eg:@Get(':isMarried?')
 getUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number, 
 @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number,
@Param('isMarried',ParseBoolPipe) isMarried:boolean
 )

Here we cannot set our Route parameter optional when we use a validation pipe so we can create a DTO
get-user-param.dto and inside that we can define and keep our isMarried  property as null

export class GetUserParamDto{
 @IsBoolean()
 @IsOptional()
 @Type()
    isMarried :boolean
} In out DTO we have to convert our isMarried values from string to Boolean That's why we need to specify the @Type decorator for our isMarried field.S

and then we can import and use this DTO in our Get Method,

   @Get(':isMarried?')
 getUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number, 
 @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number,
@Param() param:GetUserParamDto
)

# PATCH(Update-User-Dto) (Mapped Types)
When building input validation types (also called DTOs), it's often useful to build create and update variations on the same type. 
So to update our user data using a PATCH http method we are going to use Mapped Types feature from Nest-Js
For example, the create variant may require all fields, while the update variant may make all fields optional.

Refer to (https://docs.nestjs.com/openapi/mapped-types)

Mapped Types let's us inherit a specific DTO and import only partially some-parts of The DTO.


# Dependency Injection:
Dependency Injection is a design Pattern that involves passing dependencies(Objects or services) into an
Object rather than the Object creating them itself:
It is a design pattern used to achieve loose coupling between classes and their dependencies. In NestJS, we use DI to provide instances of services to controllers or other classes via the constructor, rather than manually instantiating them.

When you directly create an instance of a service class inside a controller, it leads to tight coupling, which means:

The controller is dependent on the specific implementation of the service.
It becomes difficult to replace or mock the service for testing or future modifications.
By using DI, the framework takes responsibility for creating and managing the service instances, allowing you to:

Easily swap out dependencies (e.g., replace a service with a mock during testing).
Follow the Inversion of Control (IoC) principle, where the framework controls the lifecycle of dependencies.

The constructor injection in NestJS, where the service is injected via the constructor, is part of the DI mechanism itself and is considered a good practice. The tight coupling issue arises only when you manually instantiate the service in the controller using new, like this:

// Bad practice
export class UserController {
  private readonly userService = new UserService(); // Tight coupling
}

Instead, NestJS uses DI with decorators like @Injectable() and injects the dependency into the constructor:

// Good practice
export class UserController {
  constructor(private readonly userService: UserService) {} // Dependency Injection
}

To make any class injectable we have to decorate it with __@Injectable__ decorator.

We also need to provide our Users-service in our users module so that it can be injected by Nest-JS in any other 
classes.
Next we Use the constructor of your controller to inject the service in our controller file.

export class UsersController{

constructor(private readonly usersService:UsersService){
   
}
}

Here we have injected our usersService in userController.

The constructor(private readonly usersService: UsersService) syntax is how NestJS injects the service into the controller. The private readonly ensures:
The service is only accessible within the class.
The reference to the service cannot be modified (readonly).

## Types Of Dependency in Nest-Js
In Nest-Js we have 3 types of dependencies
- Intra-Modular dependency
- Inter-Modular dependency
- Circular Dependency

***Intra-Modular*** - An Intra Modular Dependency refers to a dependency between components(controllers,services,providers) within the same module in Nest-Js.
for eg: We have USER-MODULE 
                  |
            USER-CONTROLLER
                  |
             USER-SERVICE 

***Inter-Modular*** - An Inter-modular dependency occurs when a component in one module depends on a component
in another module.
For eg: If we have 2 separate modules like USER MODULE and Tweet-MODULE here Tweet-SERVICE might have depdency on UserService

USER-MODULE                          Tweet-MODULE
     |                                   |
 USER-SERVICE      <--------->       Tweet-SERVICE
     |                                   |
USER-CONTROLLER                      Tweet-CONTROLLER


***Circular-Dependency*** - A circular Dependency arises when 2 or more modules or components have a direct or 
indirect dependency on each other forming a cycle.

USER-MODULE                          AUTH-MODULE
     |                                   |
 USER-SERVICE      <--------->       AUTH-SERVICE
     |                                   |
USER-CONTROLLER                      AUTH-CONTROLLER

Circular dependency is not good but we might need it in our program.
For eg: If Service A needs Service B, and Service B also needs Service A, NestJS may not know which one to instantiate first.

Providers are those classes which are decorated with @Injectable Decorator 
When using cicular dependency we have to use forwardRef(()) "  imports: [
    forwardRef(() => AuthModule), // Use forwardRef here
  ]," in the module where we are using the circular dependency.

# DataBase ---->
Initially we have created user Registeration in our App but we are not storing the user credentials in database so whenever we re-start our App that user data will be lost and we need to create a user again everyrtime.
So to avoid this issue we will create Database for eg: Using MongoDB,postgres or oracle.
And to connect to our Database we will use an ORM (Object Relation mapper) 
We can use Any ORM to connect and Manage our Databse:
- TypeORM
- PrismaORM
- MikroRM
- Mongoose
- Sequelize

# What is an ORM:
An Object-Relational Mapping (ORM) system is a programming technique for converting data between incompatible types, With ORM,we do-not need to write long sql queries by our OWN. It will be taken care by ORM,and it will generate 
corresponding sql queries behind the scenes.
- Without ORM 
  INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30);
- With ORM
  const user = new User();
user.name = 'John Doe';
user.email = 'john@example.com';
user.age = 30;
await userRepository.save(user);

- With ORM we can also define the relationship between two tables in database,from typescript code itself.ORM
will take care of doing the migrations and syncing the databases state with application.

- With ORM we can create indexes on a table columns from the 
- typescript code itself. we do not need to do it in the databse. 
- In this way entire state of the databse, resides in the application with the help of ORM.
  
- With ORM, switching between the databases is very easy. when we switch from one daatabse to 
 another database we do-not need to re-write the application logic again 
 to suit the requirements of new databse.

## Using TypeORM in Our Nest-Js Project
To use TypeORM in our app first we need to install typeorm and we also need a package @nestjs/typeorm to work with
TypeORM in NestJs. We can install it using the following command: __npm install typeorm @nestjs/typeorm__
We also need to install the driver for our database. For eg: If we are using postgresql then we need to install
pg driver. __npm install typeorm @nestjs/typeorm pg__

## Importing and Using TypeORM
After installing and importing the type ORM in our root module that is (App module of our Project)
We need to import it and use it.
Here we have imported TypeOrmModule from nestjs.

TypeOrmModule.forRoot() is a method provided by the @nestjs/typeorm package. It is used to configure and initialize the TypeORM module globally in your application. 
This setup connects your application to the database and sets up the necessary configurations for
TypeORM to function.

import {TypeOrmModule} from '@nestjs/typeorm';
@Module({
  imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    entities:[],
    synchronize:true
  })],
})

__Explanation for TypeOrmModule.forRoot():__
Database Configuration:
It accepts an object with configuration details like the database type, host, port, username, password, database name, and other settings required to establish a connection with the database.
For Eg: In our app we using below configuration from TYPEORM to connect to our database
imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    entities:[],
    synchronize:true
  })],

## Connecting to DataBase: 
To connect to postgres DataBase using TypeORM we need to create a Database in our pg admin
after that we need to specify below configuration as discussed above in root module that is App Module of our 
Project.

@Module({
  imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRoot({
     type: 'postgres',          // Database type (PostgreSQL in this case)
    host: 'localhost',         // Database host
    port: 5432,                // Database port
    username: 'postgres',      // Database username
    password: '12345',         // Database password
    database: 'nestjs',        // Database name
    entities: [],              // Array of entity classes
    synchronize: true,         // Auto-create tables based on entities (not recommended in production)
  })],})

  Here we have specified various configurations including the username and password for our database once we specify these and start our application we will automatically connect to database.

  # Synchronous Connection
  For connecting to database we have used asynchronous connection.
  A Synchronous connection establishes a direct, immediate link between your application and the database.
But when our code requests data from database, the execution halts until the database responds.
for eg: when a request is made to database to fetch users from databse the execution of all other 
code is halted till the database responds.
So suppose if we are fetching the data and it takes 5 seconds or 10 seconds to fetch the data so here all the application will not respond until the data is fetched. 
This blocking behaviour can impact application performance especially with time-consuming queries.

So to Avoid this issue when we are building large Applications where Database will be large we should go with the Asynchronous connection.

## Asynchronous Connection:
Asynchronous connection establishes a connection with the database but does not block the execution of the code.
It uses promises Or async/await to handle the database operations.
It continues execution of other tasks while waiting  for database query to return data.
This Improves application responsiveness and prevents blocking.


  imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    entities:[],
    synchronize:true,
    port:5432,
    username:'postgres',
    password:'12345',
    database:'nestjs'
  })],

  So here to connect to our Database Instead of using TypeOrmModule.forRoot() we are going to use 
  TypeOrmModule.forRootAsync() and we also do not need to specify database configuration (connection) options
  directly .
  imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRootAsync({
   useFactory:()=>({
    
    type:'postgres',
    host:'localhost',
    entities:[],
    synchronize:true,
    port:5432,
    username:'postgres',
    password:'12345',
    database:'nestjs'

   })
  })],

  So instead of specifying connection options directly we have to use useFactory Function.
  useFactory function allows us to programmatically define the configuration object for the TypeOrmModule at runtime.
By using forRootAsync with useFactory, you are preparing your application for dynamic and production-grade configurations.

## Entity
An Entity is a class which defines which columns we need in a table in Our DataBase.
For eg: When we create a User Entity(class) then we specify the properties for that class Now the
TypeORM will automatically create a table in our database with the same properties as our Class(Entity).

So this entity files will be used to create Tables in our Database.

## Repository Pattern (Design Pattern)
Repository pattern is a design pattern that acts as an intermediate between your business logic & the ORM.
It Provides an abstraction layer for accessing and manipulating data in the database.

So once we have created the entity file we will need a Repository file and that we can create using Repository file and then we can inject it into a service.(Respository is not a physical file so we do not need to create file in our project) The creation of repository is taken care by typeORM and it will also inject our repository into Service File.

# Creating the user.entity.ts file 
Here we have created a user entity file in our users folder and it should be in sync with our create-user-dto file as we need to use same columns in our entity files as we are using in our create-use.dto.ts file to create 
a user and we also need to import and decorate our user entity file with __@Entity()__ decorator.
For eg:
import { Entity } from "typeorm";

@Entity()
export class User{
    firstName :string;
    lastName:string;
    gender:string;
    email:string;
    password:string;
}

and we also need to decorate each field with @Column() decorator  that we have defined in our Entity.

@Entity()
export class User{
    @Column()
    firstName :string;
    @Column()
    lastName:string;
    @Column()
    gender:string;
    @Column()
    email:string;
    @Column()
    password:string;
}

Here we will have one more column id to separate each field as unique but as we do not have any id column in our 
DTO we can generate this column uniquely by decorating it with 
@PrimaryGeneratedColumn() decorator.

@Entity()
export class User{
      @PrimaryGeneratedColumn()
    id:number
    @Column()
    firstName :string;
    @Column()
    lastName:string;
    @Column()
    gender:string;
    @Column()
    email:string;
    @Column()
    password:string;
}

In order to make typeORM and Nest js aware about our entity file we have to specify our file in the entities array of our app.module.ts file 

@Module({
  imports: [ UsersModule, AuthModule, TweetModule,TypeOrmModule.forRootAsync({
    imports:[],
    inject:[],
    useFactory:()=>({
      type:'postgres',
    host:'localhost',
    entities:[User], __We have to specify our entity file here__ (as we have our entity named User we import it )
    synchronize:true,
    port:5432,
    username:'postgres',
    password:'12345',
    database:'nestjs'
    })
  })],

})

Once we import and specify our entity in app.module.ts and refresh the application it will automatically create 
the tables and columns in our database as we have used ( synchronize:true) in our app.module.ts 