
# House of Mozes 
### Link: https://houseofmozes.herokuapp.com/
### Redux: https://youtu.be/EgSgbxLCEsw
### Fork/Clone: https://github.com/suzannemozes/project2hom


## Description
In the interest of saving millions of gallons of water and literal tons of wasted fabric every year, the fashion industry has begun sourcing remnant fabrics instead of simply putting them into landfills when a season is over. This shop obtains high fashion fabrics and sells them at discounted prices.


## User Stories

    When a user goes to the "/fabrics" route they will see an index of textile products, the names of each fabric or product rendered to the page.

    When a user clicks on the name or image of the fabric, the user will be taken to that fabric's Show page, and will see the fabric's name, description, price and image.

    When a user goes to "/fabrics/new" a user sees a form that allows them to create a new product, and then redirects the user back to the Index.

    When a user goes to the Show page there will be two buttons one that allows them to delete the fabric and get taken back to the Index page and one that takes them to "/fabric/:id/edit" that shows them a form which allows them to edit the data and save to the database.

## Restful Routes

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/fabrics/ | index of fabrics |
GET | /api/v1/fabrics/:id | show page for selected fabrics |
GET | /api/v1/fabrics/new | page to add fabrics |
POST | /api/v1/fabrics/ | add a fabric |
GET | /api/v1/fabrics/:id/edit | page to edit a fabric |
PUT | /api/v1/fabrics/:id | edit/update a fabric |
DELETE | /api/v1/fabrics/:id | delete a fabric |

## Color References

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#1f4954](https://via.placeholder.com/10/1f4954?text=+) #1f4954 |
| Example Color | ![#e2dfdf](https://via.placeholder.com/10/e2dfdf?text=+) #e2dfdf |
| Example Color | ![#ff00d0](https://via.placeholder.com/10/ff00d0?text=+) #ff00d0 |

##  List Of Technologies

* Javascript
* Node.js
* HTML 5
* CSS
* Express
* React

## Future Plans

* Add a dropdown menu to "SHOP" in top nav bar
* Add SEARCH capability
* Add a blog and link to the top nav "JOURNAL"
* Add a garment and child section to the top nav
* Create functionality for the banner along the top of the page
* Code an image carousel for each product so multiple images are available
* Learn authentication to enable profile and cart functionality
* Extend the schema categories so the SEARCH function can narrow any topic/category

## Authors

Suzanne Mozes (https://www.github.com/suzannemozes)
Please see the list of contributors below who participated in this project.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://suzannemozes.com)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suzannemozes)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/suzannemozes)

## Contributing

Dylan Comeau (github.com/dcomeau): clear, and patient, instruction on the depreciation process for "stock" and buy buttons as well as sorting categories.

## Acknowledgements
*  Thank you to my instructor for helping me countless times, specifically with heroku deployment.
*  Thank you to our patient TA for working one-on-one with me.
*  I deeply appreciate the kindness of my classmates.
*  Inspiration via rachelcomey.com and prada.com
