
# FRUIT.AI

Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.


## Tech Stack

**Client:** React, CSS

**Server:** Node, Express



## Run Locally

Clone the project

```bash
  git clone https://github.com/Prince-0001/fruitAi.git
```

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run dev
```


## Server
This server is a Node.js application that provides a RESTful API for to create, add, update and delete your own list of FaQs related to few fruits. The server uses MongoDB as its database and is built using Express.js.
## Deployment

To deploy the server

```bash
cd server
npm install
nodemon index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`IMAGE_kIT_ENDPOINT`

`IMAGE_KIT_PUBLIC_KEY`

`IMAGE_KIT_PRIVATE_KEY`

`CLIENT_URL`

`PORT`

`MONGO_URL`


## API Reference

#### Create a FAQ

```http
  POST /api/faq
```

#### Edit a FQA

```http
  PUT /api/faqs/:id
```
#### Get all the FAQ

```http
  GET /api/faqs
```
#### Delete the FAQ

```http
  Delete /api/faqs/:ID
```



## Getting Started

To get started with the website, simply navigate to the loginPage and register or login to website . Then, you will redirect to homePage where you can add FAQs.



## 🔗 Deploy -Links
`Frontend` (https://fruit-ai-rouge.vercel.app)

`Backend`  (https://fruitai-vyws.onrender.com)