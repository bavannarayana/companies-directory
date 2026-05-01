# Companies Directory

A modern and responsive frontend application built as a technical assessment for the Frontend Developer role.  
The application displays company data with powerful search, filtering, sorting, pagination, and multiple view options.

## Live Demo

🔗 https://companies-directory-pink.vercel.app/

## GitHub Repository

🔗 https://github.com/bavannarayana/companies-directory

---

## Features

- Responsive UI for mobile, tablet, and desktop
- View companies in **Grid** and **Table** layouts
- Search companies by name
- Filter by location
- Filter by industry
- Sort companies by:
  - Name (A-Z)
  - Employees (High to Low)
- Pagination support
- Reset filters
- Loading skeleton state
- Error handling with retry option
- Empty state when no results found
- Clean and reusable component architecture

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Hooks

---

## Folder Structure

```txt
src/
├── components/
│   ├── Navbar.jsx
│   ├── Stats.jsx
│   ├── SearchBar.jsx
│   ├── Filters.jsx
│   ├── ViewToggle.jsx
│   ├── CompanyCard.jsx
│   ├── CompanyTable.jsx
│   ├── Pagination.jsx
│   ├── Loader.jsx
│   └── EmptyState.jsx
│
├── hooks/
│   ├── useCompanies.js
│   ├── useDebounce.js
│   └── useFilteredCompanies.js
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── companies.json