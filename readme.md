# Setup

`npm install`

# Running tests locally

First:

`cd docs && npx serve -l 12345`

Then:

`cd test && npx cypress open`

# Run against hosted site

`cd test && npx cypress open --config baseUrl=https://bmordue.github.io/TableTestSite`
