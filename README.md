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
![App UT](https://lh3.googleusercontent.com/fife/AGXqzDm8Pjwmyj1tILl6-vPs98Ny4G9dtv4nuazXcplMx1icqFFgzoZQOEGq27VGwnhXLXdnCN2vk8E7usxSqDE8MuyGlGn2Eknv3WEgdAf4n7L6msdIxT8nl5GidUgzrUnqouatyIypxSdp9IoQctBFCxuvGabqEPHOn7g8Htlp3TmgtQLHXd5X_BjafYu1dlq64aTNUx4jx9dFcGc8dokSiqQYFcUBeUqoHHZcculjzLuiTTd1K4CVLhgjRLTXwpyEJo5-MXBZL30946tgjQdk71nWJZEJuX5eKwW6TXN08vF2DX-UNI3JXI94opnVkhap3nYRfhni5ztqaekuaTVSdBkfL3chbnYGPvaNmq1kulGvfLmuY8Ei5w4X1wfmmyHbWKuOr_HQAJIn295po6_5OjQWjgeZxZlqzpVQi-_jsQ2Mz7RB54OseiDs2d5qZftKuCm49JkhKp_gw_w9_PawVP4Ux5Kn5j2hit8SP_3INFO3yhgYifTsrmeblOgdeb9jFy8c1wqoS_jAkeZXMUOO_9Rzng23LJ3gDAXZYI3sF8hYXVrfPOzfdTN-z5ch0teT73vxM32P__c0Auo7Wpc9ueJYlDhXf_ikO1UA96TL-idX-iKuDeGHCFmmALF1ongiNicqds6HCHnJViTN7vllG6-_Kx62ZF_vo_nUHAqyyOpxqNQPnwru_BLL-KlWWOSXvS4NavIAB9mJlAsRvwdO1VgG8_fl-4UC3sjHL9EpVrA3AGb_eFrwc3nxWnX6SOsBtLwpA-GcM-1dxYy0lw8EprY331qB1A_2q_ugoahTkOFgjT3YSQ1vpkIUtkK1qxJD2u3mnFsTB_FIWAJu9lQAXkfY6ppsf0Qee1kSLqutPiqe12ZAC7FkF7Mfq-_tjlBkw1cDcSB2s9V2tNbNieVhZKmC-ESxWaUDMGfKAUwDCz7sJPLi_GTfIWma8AVjJbfh4YxMzXe12Cmqh8tXaywbEqSynaZJGRigefqcHhXZ5rrhmpEuMtw_ivJyH_NZ59biqZ9HDJY6_DUSS4wZQP0rsd7AJM0NJogmZzmFob7TsYyQAip6okL1Dzxvi9io9YOVh1X6xjqNZbvt7_S-IDbL12MuXFveEgZoEKFC0MuppxEq6ktA2t7mI3NmXNxYq532kQTNd6HvriYfjChrg19SDpIcxmIisDEvPnPExu8-E-wgvqRnLZpkAbQoJJqpUnW9JRhpDMa-Q5umhyZO0ARnia3BZ3VRUTwbPzrjSUhZz5HUKSorrtARFQSswmMc6EL0QP7YygORVxw1vDsH9drMUJ2W9rWzCx8iRbvS_AUhL6sz8gn85qPaD-aAStLMgFqlRo_oFgC5pmCXinjGBP1XwMHUEQM16pmzP5fTVwGSNW8fBmE3oPuwmw3AuT4Xa_BPs4qH_y2JoYUNKTvklvaHfKjeILP8ADf25yhT79mfN21a5pAIy8vCIRHE8tf09sV7erId-nB8EnVQQ7UIMXO_KDwjiVuoBXuvXFs82WM_61OvzxGOki6V-8D-gA=w1920-h945)

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

