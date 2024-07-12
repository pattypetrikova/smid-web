# Nuxt Template from Dentsu

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## How to use as template
First [create your new repository](https://bitbucket.org/isobarczechrepublic/workspace/create/repository) for a project you're creating.

Then clone this repository and push it to your new repository:

```bash
git clone git@github.com:dentsu-cz/nuxt-template.git

mv nuxt-template name-of-your-repository ## or rename instead of mv on Windows

cd name-of-your-repository

git remote set-url origin git@bitbucket.org:isobarczechrepublic/name-of-your-repository.git

git remote add template git@github.com:dentsu-cz/nuxt-template.git
```

Now setup branches and tags (these can be launched all at once (just copy&paste&enter all lines):

```bash
git branch master
git branch test
git branch devel
git tag init
git push -u origin master test devel init
```

**Don't forget** to create test and devel branch and start your work from new branch based on devel.

TODO: create script that will do these initial steps automatically

## Setup

First copy app/.env-local as app/.env

Then make sure to install the dependencies:

```bash
cd app # for all following commands always be in app folder
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

If using SSR, build the application for production:

```bash
pnpm build:production
```

If not using SSR but SSG, use:

```bash
pnpm generate:production
```

Both generate and build commands can also be used with :test instead of :production for testing environment.
Test environment should have password protection defined in .env-test file.

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
