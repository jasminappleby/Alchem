# Ideas on how I want the app to look/function

## Management console components: 
- Header (Logo/Site name and a navigation button to the simulator)
- Visualise the DB
- Show the DB physically refreshing to the user
- Countdown until next refresh (I'm thinking maybe 10-15 seconds seems decent?)
- Maybe a little refreshing circling gif for added UI
- API to make the refreshing content actually work 

## Simulator components
- Header (Logo/Site name and a navigation button back to the management console)
- Data entry fields (All fields of the db, maybe in a form, so user can input data + confirm via button)
- Could additionally have a pop up showing how their inputs would look in the DB once confirmed (a table of just their row, and a confirmation "does this look correct", yes or no buttons) (nice to have - not essential)
- Could also have the same component refreshing under the form or even to the left of the form

## Tests
- Verify DB data input is working
- Verify DB is refreshing correctly (API)
- Verify DB is displaying refreshed content


## Stack
- Angular
- REST API using Flask
- Python
- PostgreSQL
