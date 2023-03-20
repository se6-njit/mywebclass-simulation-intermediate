# Task Title: Calculate Productivity Rating for Developer

## User Story:

- [Productivty Log System](../prod_log_system.md)

## Description:

This task involves developing formula that can calculate a productivity rating
for each developer based on their productivity log data. It should take into
account factors such as the amount of time spent on each task, the number of
completed tasks, and the number of distractions -- which are gauged by the story
points and the number of issues. Thus:

Total number of points completed by developer / number of issues

## Acceptance Criteria:

- The computation should accurately calculate the productivity rating for each
  developer based on their productivity log data.
- The productivity rating should be between 0 and 100, with higher numbers
  representing higher productivity levels.
- The algorithm should be able to handle different types of tasks and account
  for different levels of complexity.
- The algorithm should take into account the time spent on distractions and
  deduct points from the overall productivity rating accordingly.
- The algorithm should be well-documented and easy to understand for future
  maintenance.

## Effort Estimate: 2 hours

## Assigned To: Stephen Ebrahim

## Priority: Low

## Status: Done

## Notes:

This task is dependent on the completion of the "Implement the Productivity Log
System" user story.
