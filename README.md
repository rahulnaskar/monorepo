# Monorepo for Typescript Projects

## Why?

Here's my take on it.

- Dependency Management
  - `.git` submodules is a time tested approach towards modular development distributed across multiple teams. However, designing and setting up such dependencies is not for the faint hearted.
- Development Setup
- Product Management
- Organization of Parts

## Schema

The not so hypothetical schema is to be able to house important parts in a web based typescript project. A `backend`, a `frontend` and a `utils` project, which is used by both `backend` and `frontend`. The keyword here is `project`. All of the above 3 are independent projects, probably maintained and developed by different teams. To know how these can be maintained by different teams, wait till you reach `Product Management`.

I have tried to additionally organize the project in 2 broad sections, `apps` and `packages`, to represent the mental model of keeping `applications` within the `apps` folder and supporting packages like `utils` in the `packages` folder. Translating that to folder organization, from the root repository folder, it should look like the following once we are done setting up the project as a whole.

```bash
.
├── apps
│   ├── backend
│   └── frontend
├── packages
│   └── utils
├── package.json
└── tsconfig.json
```

## Hands On

<details>
<summary>Project Initialization</summary>

---

#### Step 1

**Create a folder named `mono` or `repeatmono`.**

For my purposes I have kept it to be `repeatmono`, akin to `reentry` of space travel (half true). Wanted to have a clear distinction between the project name and repository name throughout.

```bash
> mkdir repeatmono
```

#### Step 2

**Initialize a `node` project in `repeatmono`.**

```bash
> cd repeatmono
> npm init -y
```

The above command will result in creating the `package.json` file. Looks something in line with the following.

> package.json

```json
{
  "name": "repeatmono",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "typescript": "^5.9.3"
  }
}
```

#### Step 3

**Install `typescript`. Initialize it.**

```bash
> npm install -D typescript
> npx tsc --init
```

The last command, `npx tsc --init`, results in generation of the config file for typescript. Should look something around this:

> tsconfig.json

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

</details>
<details>
<summary>Changes made to the default configuration genrerated by npm</summary>
</details>

<details>
<summary>Adding our first project (backend) within the monorepo</summary>

#### Step 1

**Add a folder `apps` in the root folder followed by `backend` folder within `apps` folder.**

Here's the commands that should do it:

```bash
> mkdir apps
> mkdir apps/backend
```

#### Step 2

**Initialize a `typescript` project within `apps/backend`**

The same commands that created our `monorepo` project should do the trick

```bash
> cd apps/backend
> npm init -y
> npm i -D typescript ts-node @types/node
> npx tsc --init
```

As mentioned in the last section, `npx tsc --init` should generate `tsconfig.json` in `apps/backend`. Which should be something like this:

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}

```

Remember to change 2 lines here:
1. Uncomment `outDir` and change it to 
    > "outDir": "./dist"
2. Comment out "verbatimModuleSyntax": true,

So, finally your `tsconfig.json` in `apps/backend` should look like this:


```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    // "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}

```

#### Step 3

Being the `backend`, it should act like a server and serve something; right? Let's try to add some features by which this project behaves like a `backend` web app. Our goal is lofty: return `Hello` from the root url. :wink:

We will also be using `express`, the de-facto standard to handle http requests and responses. Let's install that first.

```bash
> npm install express
> npm install -D @types/express
```

#### Step 4

**Create a folder `src` within `apps/backend` folder. `src` is the place where we are going to keep all our source files. Run the following command from within `apps/backend` folder**
```bash
> mkdir src
```

**Create a file named main and serve `Hello` from default route, i. e., `/`. For the purpose, I have created a file `main.ts` within the `src` folder, containing the code below:**

> main.ts

```ts
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello`);
});

app.listen(port, () => {
  console.log(`Express listening on port http://localhost:${port}`);
});
```

#### Step 5

**Modify `package.json` of `apps/backend` project to include 2 important `npm` commands that should**

- Build the project
- Start a dev server

To do that open `package.json` and introduce the following lines in `scripts` section. So your `scripts` section of `package.json` should look like this:

```json
"scripts": {
  "build": "tsc",
  "start": "ts-node src/main.ts"
}
```

Running the first command, i. e.,

```bash
> npm run build
```

should build the project.

The second command, i. e.,

```bash
> npm run start
```

should start the project in `development` mode. You should be able to see `Hello` in `localhost:3000` after executing the command in shell.

#### Step 6

**Add workspaces (Sub projects within the root project)**

In the `package.json` of `root` directory add `workspaces`. To do that add the line

```json
  "workspaces":[
    "apps/*"
  ]
```

Add script to build sub-projects from `root`.

```json
  "scripts": {
    "build": "npm run build --workspaces"
  }
```

Once you made the changes, run the command from the `root` folder of your repository.

```bash
> npm run build
```

If things are OK, you should see your `backend` project being compiled.


#### Step 6

**Running the `dev` server from within the `root` folder.**

In addition to the `build` script within the `scripts` section of your root `package.json` file add the following line to start `backend` from the root folder.

> "start-backend": "npm run start --workspaces"

Therefore, your `scripts` section should now look like:

```json
  "scripts": {
    "build": "npm run build --workspaces",
    "start-backend": "npm run start --workspace=backend"
  }

```

Now run the command

```bash
> npm run start-backend
```

You should be able to see that your `backend` server is running and yields `Hello` if you visit `http://localhost:3000`

**Voila!!! We have reached a point when our first sub-project can be built and controlled from the `root` folder of the repository. It's time to setup another project, the `frontend` and push it in our `monorepo`**

</details>

<details>
<summary>Creating our second project (frontend) in the repository</summary>

**OK. So let's create a frontend app. For our purposes we will stick to `vanilla` `vite` application.**


#### Step 1
**Initialize a `vite` app in `apps` folder of `root`. Following is the series of commands that will do the job for you**

```bash
> mkdir apps/frontend
> cd apps/frontend
> npm create vite@latest .
```


**\* Remember to select `vanilla` when `vite` asks you to choose `Select a framework`**

**\* Select `TypeScript` when you are asked to select `Select a variant`**

Once you are done with the above commands you should be able to see a landing page generated by `vite` @ `http:localhost:5173`



#### Step 2

**Modify build scripts `(package.json)` in the `root` `monorepo` folder to start our `frontend` app.**

But before that you should check the following 2 things:

1. Whether `frontend` application is self-contained (yet) and is able to build itself as a standalone project. So in `apps/frontend` folder fire away the command
    ```bash
    > npm run build
    ```
    Should be able to build the application fine, if something didn't go wild somehow.

2. Whether both the `frontend` and `backend` application can be built from the `root` folder. Therefore, move to `root` folder of your project and enter the following `bash` commands.

    ```bash
    > npm run build
    ```

Add the following line in `scripts` section of `package.json` of the `root` folder.

> "start-frontend": "npm run dev --workspace=frontend"

So, your `scripts` section should look like this:

```json
  "scripts": {
    "build": "npm run build --workspaces",
    "start-backend": "npm run start --workspace=backend",
    "start-frontend": "npm run dev --workspace=frontend"
  }
```

With the given modifications, if we are to run 

```bash
> npm run start-frontend 
```

from the root folder, the `frontend` app should work.

**That's about everything which should enable us to control our `monorepo` to be able to handle 2 independent projects**

</details>

<details>
<summary>Starting both projects from the <b>monorepo</b></summary>

And add the following line in `root/package.json`

```json
"start-all": "npm run start-backend & npm run start-frontend"
```
So, finally your `scripts` section of `package.json` should look like this:

```json
  "scripts": {
    "build": "npm run build --workspaces",
    "start-backend": "npm run start --workspace=backend",
    "start-frontend": "npm run dev --workspace=frontend",
    "start-all": "run-p start-backend start-frontend"
  }
```

Now, equipped with the `script` we can start both the projects by ensuing the command

```bash
> npm run start-all
```
from the `root` folder of the `monorepo`
</details>

<details open>
<summary>
Adding the <b>utils</b> project
</summary>

#### Step 1
**

</details>

## Cheers!!!