
## About the Project

This application was developed as part of a technical assessment.
The goal was to build a clean, maintainable, and scalable frontend using modern tooling while integrating with a GraphQL API.

## How to Run the Project

Install dependencies

```bash
npm install
```

Configure `.env.local` file based on `.env.local.example`

Start the development server

```bash
npm run dev
```

## Architecture Overview

The project follows a simple and organized folder structure to keep responsibilities separated and easy to find:

- components/ – Reusable UI components used across the app

- pages/ – Top-level screens that compose the main routes

- graphql/ – GrapQl Queries and API related helpers

- hooks/ – Custom React hooks that encapsulate logic or shared behavior

- providers/ – Global providers such as theme or data layers

- routes/ – Routing configuration and navigation setup

- types/ – Shared TypeScript types and interfaces

- utils/ – Helper functions and small utilities used throughout the project

This structure keeps the codebase straightforward, modular, and easy to maintain.

## Technical Decisions

### React Query

Used to handle server state because it simplifies caching, loading states, retries, and request synchronization.
It removes a lot of boilerplate and keeps data-fetching logic clean and centralized.

### GraphQL

GraphQL was chosen because the challenge provides a GraphQL-based version of the API and, during the interview, it was mentioned that the project will use GraphQL. It also simplifies certain requests by allowing the client to fetch only the fields it needs in a single query, avoiding multiple REST calls and reducing overfetching or underfetching.

## Testing

The project includes unit tests for components.
Some areas are not fully covered due to time constraints, especially integration cases involving nested data and React Query behaviors.

### Planned improvements:

- Increase overall test coverage, testing hooks and api calls

- Add integration tests for server state flows

- Expand component tests for edge cases

## Areas for Improvement

- More complete test coverage

- Better error handling and fallback UI

- Small accessibility refinements

- Adding e2e tests (Cypress)

## Final Notes

The project reflects a clean structure, solid conventions, and a focus on maintainability.
Despite some limitations due to the API, the implementation is stable and easy to build upon.