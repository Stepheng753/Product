# Product - Your To-Do App with a Gaming Twist

## Overview

Product is a mobile to-do application designed to help users manage their tasks with a fun and engaging points-based reward system. The app features a clean and attractive interface for easy task management and incorporates a "Gemini Boost" feature to provide helpful tips and information.

## Key Features

-   **Task Creation:** Users can easily input new to-do items with titles and optional descriptions.
-   **Due Dates:** Tasks can be assigned due dates, allowing users to stay organized.
-   **Overdue Tasks:** Tasks not completed by their due date will be marked as overdue. Overdue tasks will remain visible for 10 days before being automatically deleted. Overdue tasks will be indicated with a red clock icon.
-   **Reward Points:** During task creation, users can assign a point value or level of effort to each task.
-   **Completion Rewards:** Upon completion, the assigned points are added to the user's total score.
-   **Redeemable Rewards:** Users can redeem their accumulated points for rewards that are defined based on their preferences (this feature will be further developed).
-   **Gemini Boost:** A button next to each task will allow users to send the task details to the Gemini API.
    -   Gemini will return helpful tips, efficient steps, or other relevant information related to the task.
    -   For tasks mentioning a location, Gemini Boost will provide a link to Google Maps for that location, indicated by a map pin icon.
-   **Smart Reward Suggestions:** (Future Enhancement) The app will analyze redeemed rewards and point values to suggest the "next best" reward and its associated point cost.
-   **Notifications:** The app will send automatic notifications based on task due dates:
    -   Daily tasks will receive reminders every few hours.
    -   Weekly tasks will receive reminders once or twice a day.
    -   Tasks with active notifications will be indicated by a bell icon.

## Technology

-   **Frontend:** React Native (for cross-platform mobile development)
-   **Database:** SQLite (for local storage on the device)

## Database Schema (Initial Plan)

-   `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT) - Unique identifier for each task.
-   `title` (TEXT) - The title of the task.
-   `description` (TEXT, optional) - A more detailed description of the task.
-   `due_date` (DATE) - The date the task is due.
-   `is_completed` (BOOLEAN) - Indicates whether the task has been completed.
-   `points` (INTEGER) - The reward points assigned to the task.
-   `gemini_response` (TEXT) - The tips and information returned by the Gemini API for this task.
-   `created_at` (DATETIME) - Timestamp of when the task was created.
-   `updated_at` (DATETIME) - Timestamp of when the task was last updated.

## Architecture

The application will primarily reside on the mobile device. React Native will handle the user interface and logic. SQLite will store the application data locally on the user's device. The React Native frontend will directly interact with the Gemini API for the "Gemini Boost" feature using JavaScript libraries like `axios` or `fetch`.

## Next Steps

-   Further refinement of user stories to detail all user interactions.
-   Development of the user interface and visual design, potentially utilizing UI libraries such as React Native Elements or React Native Paper.
-   Implementation of the database schema using Expo SQLite within the React Native application.
-   Development of the core to-do list functionality (adding, displaying, checking off tasks).
-   Integration with the Gemini API for the "Gemini Boost" feature.
-   Implementation of the reward point system and redemption mechanism.
-   Development of the notification system based on task due dates.
