# GitView Monolithic Next.js

![img_preview](/assets/preview.gif)

### Check this apps now!

[https://github-view.ainurrofiq.site](https://github-view.ainurrofiq.site)

## Features

-   **Fetch Repositories:** Search for repositories by organization name.
-   **Sort Repositories:** Sort repositories by various criteria such as name and order.
-   **View Commits:** View recent commits for a selected repository.
-   **Error Handling:** Displays error messages for invalid organization names.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MuhammadAinurR/GitView-Monolithic-Nextjs.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create and set `.env` variables based on `.env.example`:

```plaintext
NEXT_PUBLIC_GITHUB_API_URL=
NEXT_PUBLIC_GITHUB_API_TOKEN=
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open the App

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Manual Tests

### 1. Fetch Repositories

-   Enter an organization name (e.g., microsoft).
-   Click the "Search Organization" button.
-   Verify that the list of repositories is displayed.

### 2. Sort Repositories

-   Select a sorting criterion (e.g., Name).
-   Select a sorting order (e.g., Ascending).
-   Verify that the repositories are sorted accordingly.

### 3. View Commits

-   Click on a repository name.
-   Verify that the list of recent commits is displayed.

### 4. Error Handling

-   Enter an invalid organization name.
-   Verify that an error message is displayed.
-   give null or empty for organization name.
-   Verify that an error popup is displayed.
