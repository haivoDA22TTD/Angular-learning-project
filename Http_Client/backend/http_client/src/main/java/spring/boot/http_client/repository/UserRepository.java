package spring.boot.http_client.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.http_client.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
     Optional<User> findByEmail(String email);
}
