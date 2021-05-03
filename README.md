# Cookbook-Backend

Endpoint https://my-app-123.jelastic.metropolia.fi/graphql
Needs bearer token from login to use mutations
# Example queries

# Login
query{
  login(
    username: "YourUsername"
  	password: "Yourpassword"){
    id
  username
    token
  }
}

# Register
mutation{
  register(
  username:"YourUsername"
  password:"Yourpassword"
	){
    username
  	id}
}

# Get all recipes
query{recipes{
  recipeName
  steps
  ingredients
  id
}
}
# Get single recipe with id
query{recipe(id:"ID of some recipe"){recipeName id ingredients steps}}

# Get recipes by user
query{recipesByUser(author:"YourUsername"){id recipeName ingredients steps}}
# Add recipe
mutation{addRecipe(recipeName:"nuudelit8"
  ingredients:["SomeIngredient"]
  steps:["SomeStep"]
	author: "YourUsername"
  file: file
){recipeName ingredients steps author file }}
