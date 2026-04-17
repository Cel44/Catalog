# Catalog Project

## Description

This project is a **product catalog web application** built using Next.js .
It displays products with details such as name, price, and categories.

The purpose of this project is to practice:

* Frontend development (React / Next.js)
* Component structure
* Data handling using dummy JSON (no backend yet)

---

## Features

* Product listing
* Basic UI for browsing catalog
* Uses dummy data (for frontend testing)

---

## Tech Stack

* **Framework**: Next.js
* **Language**: TypeScript / JavaScript
* **Styling**: Tailwind
* **Data Source**: Dummy JSON

---

## Installation & Setup (Step-by-Step)

### 1. Clone the repository

```bash
git clone https://github.com/Cel44/Catalog.git
```

### 2. Go to project folder

```bash
cd Catalog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

Go to:

```
http://localhost:3000
```

---

## Project Structure

```
Catalog/
├── app/                # Main pages (Next.js app router)
├── components/         # Reusable UI components
├── data/               # Dummy JSON data
├── public/             # Images and static files
└── README.md
```

---

## Data Explanation

This project currently uses **dummy JSON data** instead of a backend.

Example structure:

```json
{
  "categories": [
   { 
      "id": "C1",
      "name": "nama kategori"
   }
  ],
  "subcategories": [
   {
      "id": "S1",
      "categoryId": "C1",
      "name": "nama subkategori"
   }
  ], "brands": [
      { 
         "id": "B1",
         "subCategoryId": "S1",
         "name": "nama merek"
      },
  ], "products": [
      { 
         "id": "P1", 
         "brandId": "B1", 
         "name": "nama produk", 
         "price": 25000000 
      },
  ]
}
```

---

## 🧠 What I Learned

* How to structure a Next.js project
* How to separate components and pages
* How to simulate backend using dummy data
* How to manage UI state

---

## Screenshots

### Homepage
![Homepage](image.png)

### Catagories Filtering
![Categories filtering](image-1.png)!

### Filtering
![Filtering](image-2.png)

---

## Author
* GitHub: https://github.com/Cel44


