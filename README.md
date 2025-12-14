# 👥 Team/User Management Dashboard

A modern **Team/User Management Dashboard** built with **Next.js App Router** and a robust, type-safe frontend architecture.

This project demonstrates real-world patterns for global state management, schema-based validation, and advanced data display expected from a production-ready application.

---

## 🚀 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Full-stack framework leveraging SSR, CSR, and RSC. |
| **Language** | **TypeScript (Strict Mode)** | Ensures type safety across all layers. |
| **State** | **Zustand** | Lightweight, fast, and centralized global state management. |
| **Validation** | **Zod** | Schema-based data validation and type inference. |
| **Data Tables** | **TanStack Table** | Headless library for powerful, customizable data tables. |
| **Styling** | **Tailwind CSS** | Utility-first framework for rapid, responsive styling. |
| **Components** | **shadcn/ui** | Accessible, modern UI components (e.g., Modals, Forms). |

---

## ✨ Features

### 🧑‍💻 User Management CRUD
- **View:** Users displayed in a paginated, sortable table.
- **Add:** Create new users via a strongly typed form.
- **Edit:** Modify existing user details.
- **Delete:** Remove users with confirmation for safety.

### 🔍 Search & Sort Capabilities
- **Search:** Users can be filtered instantly by **name** or **email**.
- **Sort:** Table data can be sorted by **name** or **email** columns.

### 📋 Detailed Information Display
- Clicking a table row opens a **User Detail Panel** (overlay) for viewing complete user information without leaving the main page context.

### 📝 Forms & Type Safety
- **Zod-Powered Validation:** Ensures data integrity with runtime and compile-time checks.
- **Inline Error Messages:** Provides immediate feedback to the user on validation failures.
- **Strong Typing:** All form data is strictly typed, inferred directly from the Zod schemas.

### 🎨 UI / UX
- Light & Dark mode support (system preference-aware).
- Fully responsive design for desktop and mobile views.
- Accessible components (utilizing shadcn/ui primitives).

---

## 🧠 Architecture Decisions

### State Management (`lib/store/userStore.ts`)
A **centralized Zustand store** manages all application data flow:
* User list (`users: User[]`)
* Current editing and selected user states.
* Modal and panel visibility.
* Search and sorting parameters.

This design prevents prop drilling and ensures a single source of truth for the dashboard state.

### Separation of Concerns
Application logic is clearly delineated to maintain code clarity:
* **Table Row Click** $\rightarrow$ Opens **User Detail Panel**.
* **Action Button Click** $\rightarrow$ Opens **Edit/Add User Form (Modal)**.
* Logic prevents conflicting interactions and simplifies component responsibilities.

### Data Validation
Zod is used to define the core data contracts (`lib/schemas/userSchema.ts`). This allows:
* **Schema-as-Type:** TypeScript types are inferred from the Zod schema, ensuring consistency.
* **Reliability:** Validation is performed immediately upon form submission for robust error handling.

---

## 📂 Project Structure

src/ ├─ app/ │ ├─ users/ │ │ ├─ UserListClient.tsx // Main client component with table logic │ │ ├─ UserDetailPanel.tsx // Detail view for selected user │ │ ├─ UserForm.tsx // Reusable form for Add/Edit actions │ │ ├─ ActionsCell.tsx // Delete/Edit buttons column │ │ └─ columns.tsx // TanStack Table column definitions │ └─ layout.tsx // Next.js App Router layout │ ├─ components/ │ ├─ DataTable.tsx // Generic, reusable TanStack Table wrapper │ └─ ui/ // shadcn/ui components │ ├─ lib/ │ ├─ store/ │ │ └─ userStore.ts // Centralized Zustand store │ └─ schemas/ │ │ └─ userSchema.ts // Zod schema for user validation │ ├─ styles/ │ └─ globals.css // Tailwind imports and base styles


---

## 📌 Notes & Extensibility

* **Data Source:** Data is currently handled via an in-memory, dummy store for immediate functionality and isolation.
* **Extensibility:** The project architecture is designed to be easily extended to integrate with:
    * **Prisma + Database:** Migrating the in-memory store to a persistent backend.
    * **API Routes/Server Actions:** Integrating data fetching and mutations through Next.js backend features.
    * **Authentication:** Integrating user sessions and permissions.

## 🎯 Why This Project?

This dashboard was built to demonstrate proficiency in:
* Real-world, scalable **Next.js App Router patterns**.
* Implementing **type-safe forms and data tables**.
* Architecting clean, predictable state management with **Zustand**.
* Applying **senior-level frontend architecture** and decision-making.

---

## 👨‍💻 Author
Built with ❤️ by Irosh
Frontend Developer | Next.js | TypeScript | React

## 📜 License
This project is open-source and available for learning and evaluation purposes.
