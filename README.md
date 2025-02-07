# Phishing Awareness Website

## 🚀 Project Overview
This project is a **Phishing Awareness Campaign Website** designed to educate company employees about phishing attacks. It includes theoretical courses, quiz rooms for testing knowledge, and an AI chatbot for assistance.

## 📌 Features
- **Landing Page:** Basic phishing awareness information and latest news articles.
- **Blog Page:** Provides real life reports of other users who experienced phishing.
- **Courses:** Theoretical lessons on identifying phishing attacks.
- **Rooms:** Quiz challenges where users identify phishing attempts.
- **AI Chatbot:** Provides guidance and answers related to phishing.

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Backend:** Django
- **Database:** sqlite

## 🏗️ Setup & Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/hashom-team/Phishing-Awareness-Campaign.git
   cd Phishing-Awareness-Campaign
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   npm install vite --save-dev\n
   pip install django
   ```
   - For Windows
   ```
   pip install django
   pip install djangorestframework\n
   pip show djangorestframework\n
   pip install --upgrade djangorestframework\
   ```
   
   - For Linux
   ```
   python --version\n
   python3.12 -m pip --version\n
   python3.12 -m ensurepip --default-pip\n
   python3.12 -m pip install djangorestframework\n
   sudo apt install python3-djangorestframework\n
   ```

4. **Setup Environment Variables:**
   Create a `.env` file in the root directory and configure the required variables:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

5. **Run the Application:**
   
   To start frontend
   ```bash
    cd frontend
    npm run dev
   ```
   To start backend
   ```
   cd backend
   ```
   - For Windows
   ```
   python manage.py runserver
   ```
   - For Linux
   ```
   bash runserver.sh
         or
   python3 -m venv venv
   source venv/bin/activate
   python manage.py runserver
   ```


## 📂 Folder Structure
```
📁 Phishing-Awareness-Campaign
 ├── 📂 backend    # Django backend
 ├── 📂 frontend    # React frontend
 ├── 📂 node module    # Node modules
 ├── 📜 LISCENSE  # MIT License
 ├── 📜 README.md  # Project documentation
 ├── 📜 architecture.pdf  # Project architecture documentation
 ├── 📜 figma_reference.txt  # Project figma documentation
 ├── 📜 package-lock.json  
 ├── 📜 package.json  
 ├── 📜 presentation.pdf  # Presentation documentation
```

## 🤝 Team Member's
- [Om Joshi](https://github.com/iamomjoshi)
- [Jay Sharma](https://github.com/jaysantosh)
- [Yash Patkar](https://github.com/YashPatkar)
- [Nikunj Pandey](https://github.com/nikunjpandey1607)

## 📜 License
This project is licensed under the **MIT License**.

---
💡 *Feel free to update this README as needed!*

