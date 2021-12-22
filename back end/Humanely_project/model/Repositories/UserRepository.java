package com.example.Humanely_project.model.Repositories;

import com.example.Humanely_project.model.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <Users, Integer> {
}
