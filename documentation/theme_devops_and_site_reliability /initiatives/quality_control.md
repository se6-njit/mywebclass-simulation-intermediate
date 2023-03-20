# Initiative: Quality Control

## Description
Develop an automated quality control system to ensure that the project meets coding standards and accessibility requirements. This system will include automated tests for W3C validation, handicap accessibility, and JavaScript style. Additionally, generate a Lighthouse Report with videos and screenshots of failed tests when GitHub actions run and automatically upload it to view in GitHub Actions. Use Playwright to hit each page to run Lighthouse.

## Goals
- Develop an automated quality control system to ensure coding standards are met
- Implement automated tests for W3C validation, handicap accessibility, and JavaScript style
- Create a Lighthouse Report with videos and screenshots of failed tests when GitHub actions run and automatically upload it to view in GitHub Actions

## Scope
- Quality control system will be developed using existing technologies and tools
- System will cover coding standards relevant to the project: JavaScript, CSS, and HTML
- Automated tests for W3C validation, handicap accessibility, and JavaScript style will be included

## Outcomes
- Increased code quality
- Improved accessibility of the project
- Better visibility into the health of the project through Lighthouse Reports and automated testing

## Deliverables
- Automated quality control system
- Automated tests for W3C validation, handicap accessibility, and JavaScript style
- Lighthouse Report with videos and screenshots of failed tests
- Documentation on how to use the quality control system and run tests

## Milestones
- Milestone 1: Develop automated tests for W3C validation
- Milestone 2: Develop automated tests for handicap accessibility
- Milestone 3: Develop automated tests for JavaScript style
- Milestone 4: Generate Lighthouse Report with videos and screenshots of failed tests
- Milestone 5: Implement the automated quality control system

## Constraints
- Quality control system must work with existing technologies and tools
- Automated tests must cover relevant coding standards and accessibility requirements
- System must be efficient and not cause undue delays in development or deployment

## Assumptions
- Development team will actively participate in using the automated quality control system and running tests
- Lighthouse Reports will be regularly reviewed by the development team to identify areas for improvement

## Risks
- The automated quality control system may have bugs or errors that need to be fixed
- Development team may not fully embrace the automated testing and quality control system, leading to decreased use and effectiveness

## Dependencies
- Artillery and Playwright must be installed for automated testing
- GitHub Actions must be used for Lighthouse Report generation and upload
- Relevant coding standards and accessibility requirements must be defined and agreed upon by the development team
- Team members must be trained on how to use the quality control system and run tests
- CodeQL and ESLint must be installed for additional code quality checks

## Team
- Project Manager: Stephen Ebrahim
- Software Developers: Aryan Nesti
- Quality Assurance: Ebram Mekhail

## Epic(s)

- [Quality Control Epic](./epics/quality_control_epic.md)
