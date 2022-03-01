
# Insta Cart Clone (Construct Week 4 Project)

The project is basically a clone of the instacart website.
Instacart is an American company that operates a grocery delivery and pick-up service in the United States and Canada. The company offers its
services via a website and mobile app.

## API Reference

#### Food API used in debouncing.

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `s` | `string` | **Required**. The first letter of the product |

#### Get item

```http
  GET /api/${category}
```

## Tech Stack

**Client:** JavaScript,HTML and CSS.

**Server:** Node,MongoDB,Express


## Authors

- [Yash Sakalley](https://github.com/yashsakalley-1997)
- [Madan Mohan](https://github.com/Maddy-O)
- [Dhruv Bhardwaj](https://github.com/Dhruv-bhardwaj99)
- [Paritosh Parihar](https://github.com/i-am-parihar)



## Screenshots
![image](https://user-images.githubusercontent.com/44356948/150669043-fb6c095f-2c03-497d-bca0-92327a5c58ad.png)

![Screenshot (192)](https://user-images.githubusercontent.com/44356948/156133043-7b02161d-bc34-4701-952a-242b7f50a950.png)

![Screenshot (193)](https://user-images.githubusercontent.com/44356948/156133293-2ec7632d-158f-4d2e-bcb2-6132ca2cf00b.png)

![image](https://user-images.githubusercontent.com/44356948/150652494-c7784e6b-77ca-4f5b-ab40-dab25b5f2b25.png)

![image](https://user-images.githubusercontent.com/44356948/150669067-3a65cabb-abb2-4c8e-b487-fa0ab7e1bbd1.png)

![image](https://user-images.githubusercontent.com/44356948/150652519-48f7b3c9-7d62-4f7a-9e3f-2815c62771c8.png)

![image](https://user-images.githubusercontent.com/44356948/150652538-55acaaa9-4876-44b5-b486-86d7ca3aa186.png)

![image](https://user-images.githubusercontent.com/44356948/156133512-9dc655cd-f4c0-44d9-a63b-2fe90edb1edf.png)

![image](https://user-images.githubusercontent.com/44356948/156133563-d1710593-ddce-49be-8408-fa880545b54e.png)

![image](https://user-images.githubusercontent.com/44356948/156133618-0f22b608-fccb-4faf-9ea9-3878288dde21.png)

![image](https://user-images.githubusercontent.com/44356948/150652644-f403fdc4-c275-481e-936a-3486427623fe.png)

![image](https://user-images.githubusercontent.com/44356948/150652652-b81dfabe-3763-405a-b27b-1dc67be11574.png)



## Walkthrough
- The first page is the landing page of the project where basic information about the website and login/register functionalities can be accessed.
- Then we come down to login and register where if the user successfully completes the registration process,is directed to the login page.
- After login the user is redirected to the products page where different catefories of products can be found.
- On clicking on any of the category on the products page we route to the add to cart page where products are filtered according to the category selected.
- In the add to cart page, user can also filter according to the subcategory. For every category we have sub-categories i.e. there's a one-to-many relationship between category and subcategory.
- On clicking the green coloured cart button on the navbar we can have a look at what all items are there in the cart and also remove them. 
- Once the user is sure about the products in the cart they can click the Go to checkout button, where they will be routed to the checkout page.
- After entering the required details. The order will be placed.


