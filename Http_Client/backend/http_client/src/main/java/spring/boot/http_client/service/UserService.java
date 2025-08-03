package spring.boot.http_client.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.boot.http_client.model.User;
import spring.boot.http_client.repository.UserRepository;

@Service
public class UserService {
     @Autowired
    private UserRepository userRepository;

    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public List<User> findById(List<Long> ids) {
    return userRepository.findAllById(ids);
}
}
