# React Debugging Example

This project serves as an example of debugging a React application using React Developer Tools.

## Setup

To run this project locally:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd react-debug-example
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Debugging Process

### Step 1: Set Up the Sample React Application

- Created a new React application using `npx create-react-app`.
- Set up components with state management and props passing.

### Step 2: Installed React Developer Tools

- Installed the React Developer Tools extension in Chrome/Firefox.

### Step 3: Inspected the Components Tree

- Opened the React Developer Tools and inspected the components tree.
- Verified that components (`Greeting` and `Counter`) were rendered correctly.

### Step 4: Identified Issues

#### Issue 1: Incorrect State Values in `Counter` Component

- **Diagnosis:** `Counter` component's state was not updat
