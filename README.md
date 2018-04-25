# CICD

[![CircleCI](https://circleci.com/gh/sinhaaayush01/CICD/tree/master.svg?style=svg)](https://circleci.com/gh/sinhaaayush01/CICD/tree/master)


- Engineering Practices
	- Setup Distributed Version control system
	- Create a project with
		- Server
		- Client
	- CI & CD
		- Setup CI - Continuous Integration
		- Setup CD - Continuous Deployment (running app)/Delivery (artifact)
		- https://travis-ci.org/
		- https://circleci.com/
		- Version control system should have badges for CI/CD displayed
	- Agile project tracking (SCRUM style)
		- Trello for Agile project Tracking, SCRUM Boards (Backlog, Doing, Done)
	- Setup Lint, code smell detection, any thing which improves quality of code (coding conventions)
	- Slack Integration for Version control, Agile tracking, CI & CD
	- Code review/refactoring process
	- Branching disciplines
		- master (protected, only merge)
			|
			|--> integration (protected, only merge)
						|
						|---> development (protected, only merge)
										|
										|--->feature branch
										|
										|--->feature branch
										|
										|--->feature branch
