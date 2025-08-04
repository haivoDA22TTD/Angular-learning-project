package spring.boot.http_client.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.boot.http_client.model.User;
import spring.boot.http_client.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @SuppressWarnings("unused")
    @PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {
    if (userService.emailExists(user.getEmail())) {
        return ResponseEntity
            .badRequest()
            .body(Collections.singletonMap("error", "Email đã tồn tại!"));
    }

    userService.saveUser(user);
    return ResponseEntity
        .status(201)
        .body(Collections.singletonMap("message", "Đăng ký thành công!"));
}
    @GetMapping("/all")
        public ResponseEntity<?> getAllUsers(){
            List<User> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        }
   @GetMapping("/id")
        public ResponseEntity<?> getUserById(@RequestParam("id") List<Long> ids) {
            List<User> users = userService.findById(ids);
            return ResponseEntity.ok(users);
}

}