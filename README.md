# JEERA PLATFORM
Task Management Tool

Jeera platform is task management tool for mobile/web. 

## Isomorphic React
This project use structure isormorphic React

The goal of isomorphic React projects is to write code that is shared between web and native compilations.

This is achieved using the Container/Component pattern, with separate view components for web and native.

## Top Level Structure
All javascript source code lives in the `src` repository. There are three folders in `src` -

- `/native` - native top-level entry point and native-specific top-level code (i.e. data store info)
- `/web` - web top-level entry point and web-specific top-level code (i.e. `index.html`)
- `/shared` - all shared code

In the `/shared` directory, there are `modules` and `utils`

- each `module` is a container for a screen in the application
- `utils` holds shared utilities (i.e. requests, utility functions)

Each folder in the `modules` directory logically represents a screen in the application.

There is also a special `Root` folder in `/modules`, which holds the static application wrapper.

## Component Structure

Each component has a boilerplate set of files:

- `index.js`
- `Component.js`
- `Component.native.js`
- `styles.js`

**In the current, we have not seperated structure to isomorphic react yet, because we have not planned for web yet too.**

Screenshot:
![Jeera](https://github.com/youngt-studio/jeera-platform/blob/master/brochure/Simulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202019-11-22%20at%2022.43.59.png)
