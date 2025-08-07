# 📡 Angular HTTP Client Example

Thư mục `Http_Client` chứa ví dụ về cách sử dụng **HttpClient** trong Angular để gửi các yêu cầu HTTP như `GET`, `POST`, `PUT`, `DELETE` tới một API bên ngoài (hoặc giả lập bằng JSON server).

## 📁 Cấu trúc thư mục Frontend

```bash
Http_Client/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── post.service.ts       # Service gọi API
│   │   ├── components/
│   │   │   └── post-list/            # Component hiển thị danh sách bài viết
│   │   ├── app.module.ts             # Import HttpClientModule ở đây
│   │   └── app.component.ts
├── package.json
└── README.md
```
## 🚀 Hướng dẫn sử dụng
  ```bash
      cd frontend
      npm install
  ```
## Khởi động Angular project
  ```bash
      ng serve
  ```
## Truy cập
    ```bash
       http://localhost:4200
    ```
## 📁 Cấu trúc thư mục Backend
  ```bash
      spring-boot-backend/
├── src/
│ ├── main/
│ │ ├── java/com/example/backend/
│ │ │ ├── controller/
│ │ │ │ └── UserController.java
│ │ │ ├── model/
│ │ │ │ └── User.java
│ │ │ ├── repository/
│ │ │ │ └── UserRepository.java
│ │ │ ├── service/
│ │ │ │ └── UserService.java
│ │ │ └── BackendApplication.java
│ │ └── resources/
│ │ └── application.properties
├── pom.xml
└── README.md
  ```
## ⚙️ Cài đặt & chạy
  ### 1. Yêu cầu

- Java 21+
- Maven

### 2. Chạy bằng Maven Wrapper

```bash
  cd backend
  mvn spring-boot:run
```
### 3. Ứng dụng sẽ chạy tại:
  ```bash
      http://localhost:8080
  ```
### 4. Logo
  <img width="715" height="436" alt="image" src="https://github.com/user-attachments/assets/1f0a1024-8cb1-4087-8bec-a7d9317df881" />
