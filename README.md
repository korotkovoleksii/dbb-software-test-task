# Test Task React Developer DBB Software

## Description

React Web Application of basic file explorer should be provided as a result of this assignment. The UI part should consist of the toolbar and content area. There can be any number of buttons on the toolbar; any non‐functional buttons should be “stubs” and give users a “Not implemented” message when clicked.

It is required to implement the navigation part of the file explorer, i.e., open files and sub-folders.
It is required to read data from a remote source via REST service.
Ideally, a document list from a public Dropbox folder (via Server app) would be considered a first-class application.

Please fully document your solution and ensure that it will build easily on the reviewer’s PC. If any extra steps to compile are required, please list these in a separate readme.

You can visit https://www.dropbox.com/home to look for an example.

This project implements a Kanban board that displays issues from a GitHub repository.

## Installation and Usage

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create .env file with

```
VITE_TOKEN=yourTokenFromDropBoxDevConsole
VITE_SHARED_LINK=https://www.dropbox.com/scl/fo/linkToPublicFolder
```

4. Run the app with `npm run dev`.

## Technologies Used

- React
- TypeScript
- Vite
- MUI
- DropBox SDK

## Contributors

- Oleksii Korotkov
