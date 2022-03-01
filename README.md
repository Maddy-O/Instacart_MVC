
# Insta Cart Clone (Construct Week 3 Project)

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

![image](https://user-images.githubusercontent.com/44356948/150669067-3a65cabb-abb2-4c8e-b487-fa0ab7e1bbd1.png)

![image](https://user-images.githubusercontent.com/44356948/150652494-c7784e6b-77ca-4f5b-ab40-dab25b5f2b25.png)

![image](https://user-images.githubusercontent.com/44356948/150652519-48f7b3c9-7d62-4f7a-9e3f-2815c62771c8.png)

![image](https://user-images.githubusercontent.com/44356948/150652538-55acaaa9-4876-44b5-b486-86d7ca3aa186.png)

![image](https://user-images.githubusercontent.com/44356948/156133512-9dc655cd-f4c0-44d9-a63b-2fe90edb1edf.png)

![image](https://user-images.githubusercontent.com/44356948/156133618-0f22b608-fccb-4faf-9ea9-3878288dde21.png)

![image](https://user-images.githubusercontent.com/44356948/156133563-d1710593-ddce-49be-8408-fa880545b54e.png)

![image](https://user-images.githubusercontent.com/44356948/150652644-f403fdc4-c275-481e-936a-3486427623fe.png)

![image](https://user-images.githubusercontent.com/44356948/150652652-b81dfabe-3763-405a-b27b-1dc67be11574.png)



## Walkthrough

- The first page is the index.html page where the basic info about instacart can be displayed, including header and footer.
- In the header component of the index.html iteself we are having sign up and login functionalities.
- The second page is the landing page which will be displayed once the user logs in.
- On clicking on any of the category on landing page we route to the products page where products are filtered according to the category selected.
- From the products page itself. Items can be added into the cart as shown in the screenshot.
- On clicking the green coloured cart button on the navbar of the products page we can route to the checkout page where on entering the required details one can place the orer as illustrated in the screenshot. 


