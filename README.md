# Pomodoro App

**Pomodoro App** is a highly modularized Pomodoro tracking system that helps users maintain focus and track tasks efficiently. It offers robust functionality, including task management, Pomodoro session tracking, and dynamic categorization.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Pending Enhancements](#pending-enhancements)
- [Development Notes](#development-notes)
- [Contributing](#contributing)
- [License & Contributions](#license)

---

## Features

- **Task Management**: Create, update, and delete tasks with associated notes and categories/projects.
- **Dynamic Categories and Projects**: Customize sub-sections via `data/Subs.js`.
- **Pomodoro Timer**: Track four Pomodoro sessions, including focus and break periods, with start/end times and task details.
- **Routes and Navigation**:
  - **Home**: Central hub with six navigational sections.
  - **Calendar**: Day-by-day task visualization.
  - **Create Task**: Add new tasks with associated metadata.
  - **Categories & Projects**: Dynamic list visualization and management.
  - **Manage Sections**: Administer categories and projects.
- **Selectors and Reducers**: Two reducers (`tasks`, `subs`) and selectors for filtering and organizing tasks and subsections.
- **Modular Design**: Over 50 components optimized for clarity and scalability.
- **Utility Helpers**: For formatting timestamps, datetime values, and maintaining clean visualizations.

---

## Installation

This project requires [Node.js](https://nodejs.org) and `npm`.

1. Clone the repository:
   ```bash
   git clone https://github.com/hector-oviedo/pomodoro-app
   cd pomodoro-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm run dev
   ```

For testing:

   ```bash
   npm run test
   ```

## Usage
- Run the Application: After installation, navigate to `http://localhost:5137` (default port).
- Task Operations: Add, remove, or modify tasks.
- Subsection Management: Manage Categories (default 'Categories' and 'Projects' defined at `src/data/Subs.js`) by adding and removing them.

## Project Structure

```
src/
├── components/
│   ├── CalendarPanel/
│   ├── Create/
│   ├── HeaderPanel/
│   ├── Home/
│   ├── Pomodoro/
│   ├── SubPanel/
│   ├── Task/
│   └── Utils/
├── contexts/
├── data/
├── helpers/
├── hooks/
├── reducers/
├── selectors/
└── main files: App.jsx, main.jsx, RoutesApp.jsx, globals.css
```

## Key Folders and Files:
- Components: Core UI logic, each with modular .jsx and .css files for clarity.
- Contexts: Centralized context management, exposing data and methods for router-level access.
- Reducers: Redux-inspired reducers for managing tasks and subsections dynamically.
- Selectors: Flexible filters for tasks and subsections.
- Helpers: Reusable utilities for formatting and data transformation.

## Pending Enhancements

- [x] Local Storage: Persist tasks and settings across sessions to eliminate reliance on keeping the app open.
- [ ] Add Management button in Subs: Add the button to manage (create, delete) at the Subs Panel component.
- [x] Tasks: Add "no entries" or similar when there are no tasks created at Calendar Panel component.
- [ ] Timeline Visualization: Enhanced day-by-day task timelines for improved scheduling.
- [ ] Infrastructure as Code (IaC): Automate deployment using Terraform.
- [ ] Dockerfile: Add Docker support for consistent and portable builds.
- [ ] Add alternatives of how to run the App.
- [ ] Create the test suits.
- [ ] Dont forget to modify `data/time.js` when finish debugging!.
- [ ] Add a config panel to edit colors, times and other possible set ups of the App.
- [ ] Improve styles of the sessions tracking visuals in Pomodoro component.

## Development Notes
- Scalability: The app transitioned to a dynamic architecture for flexibility. Categories and projects were unified into a single reducer for simplicity and maintainability.
- Challenges:
1. Consolidating Pomodoro and break states while ensuring stability.
2. Designing modular, scalable selectors and reducers for flexibility in task management.
3. Future Directions: Add comprehensive test suites to improve code reliability and ease of extension.

## License

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request for review.
Feel free to clone, modify and distribute this repo.