# FINTRACK 💰

FINTRACK is a cool app made with Angular that helps you keep track of your money. It's super easy to use and has a nice dashboard that shows you all your spending. You can add your expenses, see where your money is going, and even import your spending from a CSV file. Everything is saved with Firebase, so your information stays up-to-date automatically!



## 🚀 Key Features
*   **User Authentication & Authorization**
    *   Secure user registration and login via Firebase Authentication.
    *   Protected routes with authentication guards to ensure data privacy.
*   **Comprehensive Dashboard**
    *   Visualizations of expense summaries through interactive charts (category, monthly, source).
    *   Data filtering and sorting for customized views.
    *   Bulk editing and deletion of expenses.
    *   Tabular display of all expenses.
*   **Efficient Expense Management**
    *   Add, edit, and delete expenses with ease.
    *   Categorization and tracking of expense sources/payment types.
*   **Settings and Customization**
    *   Manage custom expense categories and source types.
    *   User-specific settings persistence.
*   **Data Import**
    *   Import expenses directly from CSV files.
    *   Column mapping for flexible data import.
    *   Handling of negative amounts (omit, credit, debit).
    *   Review and confirmation of imported data before saving.
*   **Technical Stack**
    *   Built with Angular (v19), leveraging its component-based architecture and reactive programming.
    *   Firebase integration for backend services (authentication, database).
    *   Angular Material for a modern, Material Design 3 UI.
    *   Highcharts for sophisticated data visualization.
    *   Bootstrap for responsive layout and utility classes.
    *   TypeScript for strong typing and maintainable code.



## 🛠️ Tech Stack
![Social Icons](https://www.readmecodegen.com/api/social-icon?name=angular%2Cfirebase%2Cjasmine%2Cbootstrap&reverseBackground=true)
*   **Frontend:** Angular (v19), TypeScript, HTML, CSS, Bootstrap, Angular Material, Highcharts, Highcharts-Angular
*   **Backend:** Firebase (Authentication, Realtime Database)
*   **Development Tools:** Angular CLI, ESLint, Prettier, Karma, Jasmine



## 📦 Installation & Setup
1.  **Prerequisites:**
    *   Node.js and npm (or yarn) installed.
    *   Angular CLI installed globally: `npm install -g @angular/cli`
    *   Firebase CLI installed globally: `npm install -g firebase-tools`

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/snehaKB4326/FINTRACK.git
    cd FINTRACK
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Firebase Configuration:**
    *   Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    *   Add your web app to the Firebase project.
    *   Copy your Firebase configuration details (`apiKey`, `authDomain`, `projectId`, etc.) from your Firebase project settings.
    *   Replace the placeholder values in `src/app/app.firebase.config.ts` with your actual Firebase configuration.

    ```typescript
    // src/app/app.firebase.config.ts
    export const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      databaseURL: 'YOUR_DATABASE_URL',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    };
    ```

5.  **Initialize Firebase Hosting (if deploying):**
    ```bash
    firebase init
    ```
    Follow the prompts, selecting your Firebase project and configuring the public directory (usually `dist/<your-app-name>`).



## 💻 Development Server
To start the application in development mode:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will live-reload on code changes.



## 🏗️ Building the Project
To build the project for production:

```bash
ng build
```

This command compiles and optimizes the application for deployment, placing the output in the `dist/` directory.



## 🧪 Running Tests
*   **Unit Tests:**
    ```bash
    ng test
    ```
*   **End-to-End Tests:** (Angular CLI doesn't bundle E2E tests by default, but if configured):
    ```bash
    ng e2e
    ```



## 🎨 Code Styling & Linting
*   **Linting:**
    ```bash
    ng lint
    ```
*   **Formatting:**
    ```bash
    npm run format
    ```
    (Uses Prettier and ESLint for code quality and consistency).



## 🚀 Deployment
To deploy the application to Firebase Hosting:

1.  **Build for production:**
    ```bash
    ng build --prod
    ```

2.  **Deploy:**
    ```bash
    firebase deploy
    ```



## 📂 Project Structure
The project follows a standard Angular structure:

```
FINTRACK/
├── src/
│   ├── app/
│   │   ├── core/       # Core services, components, modules
│   │   ├── dashboard/
│   │   ├── expense-settings/
│   │   ├── import-expenses/
│   │   ├── log-expense/
│   │   ├── login/
│   │   ├── shared/       # Reusable components, directives, services
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── main.ts
│   ├── assets/
│   ├── environments/
│   ├── favicon.ico
│   ├── index.html
│   ├── styles.scss
├── .editorconfig
├── .firebaserc
├── .prettierignore
├── .prettierrc
├── angular.json
├── eslint.config.js
├── firebase.json
├── karma.conf.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```



## 🔗 Important Links
*   **Live Demo:** [https://fin-track006.netlify.app)



## 🤝 Contributing
Contributions are welcome! Please feel free to:

*   Fork the repository.
*   Create a new branch for your feature (`git checkout -b feature/your-feature`).
*   Commit your changes (`git commit -m 'Add some feature'`).
*   Push to the branch (`git push origin feature/your-feature`).
*   Open a Pull Request.

Please ensure your code adheres to the project's linting and formatting standards.



## ⚖️ License
This project is not explicitly licensed. Please refer to the repository for any licensing information.