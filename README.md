# CRUD Full Stack 

This project purpose is to practice MEAN programming using MongoDB, Express, Angular and NodeJS following the Udemy course of [Tomas Ruiz Diaz](https://www.udemy.com/course/crud-productos-stack-mean/)


## Tech Stack

**Client:** Angular

**Server:** Node, Express

**Database:** Mongo


## Features

- CRUD with Angular, Node, Express and Mongo.
- Use of forms using Reactive Forms with its validations.  
- SOLID Principles.
- Libraries: Toastr, Google Fonts and Bootstrap 5.
- Package Manager: pnPM.
- Testing: JEST


## Run Locally

Clone the project

```bash
  git clone https://github.com/AxelWar/mean-crud-01.git
```

Go to the project directory

```bash
  cd mean-crud-01
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  pnpm install
```

Start the client

```bash
  pnpm run start
```

Open new terminal in server directory and install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
## Running Tests

To run tests, run the following command

```bash
  pnpm run test
```
![App UT]([https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYR6UCxPNl8S709L1J7CAuFdxtv6xsSoonlTWJfminOZt2WfHyuNgLMn2Haqu02xdB7nhvKpSqnfYZypXR3Iq85IMYon=w1920-h945](https://lh3.google.com/u/0/d/1ykZH_fQKQxs7HRgR64tZG9Ibv3Q8jpKu=w1920-h945-iv2))

## API Reference

#### Get all products

```http
  GET /api/products/
```

#### Get product

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete product

```http
  DELETE /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to delete |

#### Add new product

```http
  POST /api/products/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Product`      | `Product` | **Required**. product to save |

#### Edit product

```http
  PUT /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |
| `Product`      | `Product` | **Required**. product to save |

## Screenshots

![App Screenshot](https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYR6UCxPNl8S709L1J7CAuFdxtv6xsSoonlTWJfminOZt2WfHyuNgLMn2Haqu02xdB7nhvKpSqnfYZypXR3Iq85IMYon=w1920-h945)

![App Screenshot](https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTlB3bwf9-43Lq4MPzWMKGZMNDTMOe3ysM6U_LrNExYe5_BrUGGpNgJqfkKbh0xs_JVa9Eb9CDucuD8lTJnu4wKw2gbeA=w1920-h945)
## License
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## Authors

- [@axelwar](https://www.github.com/axelwar)

