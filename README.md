# Monorepo for Typescript Projects

## Why?
Here's my take on it. 
- Dependency Management
  - `.git` submodules is a time tested approach towards modular development distributed across multiple teams. However, designing and setting up such dependencies is not for the faint hearted.
- Development Setup
- Product Management
- Organization of Parts

## Schema
The not so hypothetical schema is to be able to house important parts in a `webapp` project. A `backend`, a `frontend` and a `library`/`utils` project, which is used by both `backend` and `frontend`. The keyword here is `project`. All of the above 3 are independent projects, probably maintained and developed by different teams.
