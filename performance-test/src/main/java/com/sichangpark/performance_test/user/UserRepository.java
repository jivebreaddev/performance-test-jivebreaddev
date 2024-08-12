package com.sichangpark.performance_test.user;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
@Repository
public class UserRepository {
    private static final Map<UUID, User> values = new ConcurrentHashMap<>();

    public void addUser() {
        UUID uuid = UUID.randomUUID();

        values.put(uuid, new User(uuid, "hello"));
    }

    public List<User> findAll() {
        return values.values()
                .stream()
                .toList();
    }

}
