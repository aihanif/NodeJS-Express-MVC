# NodeJS-Express-MVC

# 📝 Todo Task App (Node.js + Express + MVC)
  
A simple and clean Todo list application built with **Node.js**, **Express**, and the **MVC (Model-View-Controller)** pattern. This app features a responsive interface using **Bootstrap 5** and handles tasks in memory.
<img width="1690" height="693" alt="image" src="https://github.com/user-attachments/assets/b121cb9b-0208-43e8-8b67-1f4bb2888c8f" />

  
## 🚀 Features  
- ✅ Add, edit, and delete tasks  
- ✏️ Edit tasks using a Bootstrap modal  
- 🗂️ Organized with MVC folder structure  
- 📱 Responsive design with Bootstrap 5  
- ⚙️ Easy to customize and extend  

    
## 📂 Project Structure    
<img width="197" height="421" alt="image" src="https://github.com/user-attachments/assets/f6bf2b31-634a-4e15-8d2d-3c774db59d70" />


1. Initiate npm  
   npm init -y  
   
2. Install Dependencies  
   npm install express ejs  
   
3. Run the App  
   node app.js  
  
Visit the app at: http://localhost:3000 

💡 Notes 
  
Tasks are stored in memory and will be lost on server restart.  
To make data persistent, integrate a database in models/taskModel.js.  
Bootstrap 5 is included via CDN in the header.ejs partial.  
