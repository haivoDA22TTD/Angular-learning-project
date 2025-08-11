# Angular Reactive Form – Dự án Angular-learning-project

## 🧠 Mô tả
Phần này của dự án tập trung vào việc học và thực hành **Reactive Forms trong Angular** — sử dụng `FormGroup`, `FormControl`, `FormBuilder` để tạo form động và áp dụng validation.

---

## ✅ Chức năng chính

- Tạo form bằng Reactive Forms thay vì Template-driven.
- Quản lý trạng thái form qua `FormGroup`, `FormControl`.
- Áp dụng các loại validation:
  - `required`, `minLength`, `maxLength`, `email`, custom validator...
- Bắt sự kiện submit để lấy dữ liệu form.
- Hiển thị thông báo lỗi tương ứng khi form không hợp lệ.
- Cập nhật giá trị form động bằng `setValue()`, `patchValue()`.
- Reset form về trạng thái ban đầu.
- Có thể mở rộng thêm nhiều field hoặc form con (nested forms) khi cần.
  
> 👉 Đây là nền tảng rất quan trọng để sau này bạn có thể:
> - Tạo form đăng ký, đăng nhập, quản lý thông tin người dùng...
> - Tích hợp với backend API để gửi/nhận dữ liệu form.
> - Kết hợp nhiều loại form field: input, select, checkbox, radio, v.v.

---

## 🚀 Cài đặt & chạy
```bash
# Clone project (nếu chưa làm)
git clone https://github.com/haivoDA22TTD/Angular-learning-project.git
cd Angular-learning-project/Reactive\ Form

# Cài đặt thư viện
npm install

# Chạy project
ng serve

