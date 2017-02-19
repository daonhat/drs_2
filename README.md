# drs_2
Daily Report System
# ABOUT PROJECT

- This is a project 2 for trainee in Framgia Viet Nam. Forked from https://github.com/framgia/drs_2 . It's a website for trainee sent request or report every day and manager approve request , add member to division.

- Project is implemented in 10 days.


* User

  - can login, logout
  - Send request: In late(IL), Leave out (LO), Leave early(LE)
  - Update their request before manager approve
  - Authenticate via Facebook, Google
  - View profile
  - Update their profile: position, division, skill, uid ...
  - Create report by day
* Admin
  - Manage position
  - Manage division
  - Add manager to division
  - Manage user
  - View report of user and filter report
  - Export report to CSV, excel
  - View request chart and report chart

* Manager
  - Add member to division
  - Approve request of member
  - Search member by name, uid..

Website is deployed at: https://fr-drs-nd.herokuapp.com

  - Account user: usertest@gmail.com password user: 12345678
  - Account manager: manager-div@gmail.com password manager: 12345678
  - Account admin: admin@gmail.com password admin: 12345678

# MEMBER
 - 2 member is daonhat and trungduc . Leaded and managed by daonhat (email:daonhat12@gmail.com)

# INSTALL PROJECT

- Install Ruby
- Install Rails 4.2.6
- Download source code at branch develop in https://github.com/framgia/drs_2 and run
  - bundle install
  - rake db:migrate
  -  rake db:seed
