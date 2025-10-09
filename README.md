# 📱 AppStore Clone (React Project)

## 🧾 Description
This project is a **React-based App Store Clone** where users can view detailed information about different applications, including their downloads, ratings, and reviews.  
Users can also install an app, which will be saved in **localStorage**, so installed apps remain stored even after reloading the page.

## 🚀 Features
- View list of apps with details  
- See total downloads, reviews, and average ratings  
- Install button with toast notification  
- Save installed apps using `localStorage`  
- Dynamic app details page using React Router  
- Interactive rating chart using **Recharts**

## 🧠 Technologies Used
- ⚛️ **React.js** – Frontend framework  
- 🧭 **React Router** – For routing  
- 💾 **LocalStorage API** – To save installed apps  
- 📊 **Recharts** – For data visualization (rating bar chart)  
- 🎨 **Tailwind CSS & DaisyUI** – For styling  
- 🔔 **React Toastify** – For success notifications  
- 🛠️ **Vite** – Fast development and build tool


## 💡 How It Works
1. The user clicks the **Install** button.  
2. The app data is passed to `updatelocal()` which saves it to `localStorage`.  
3. The button becomes disabled showing **Installed**.  
4. A success toast message appears. 