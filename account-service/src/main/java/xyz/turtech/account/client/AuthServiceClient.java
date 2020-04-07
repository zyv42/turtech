package xyz.turtech.account.client;

import xyz.turtech.account.persistence.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {

    @PostMapping(value = "/uaa/users", consumes = MediaType.APPLICATION_JSON_VALUE)
    void createUser(User user);
}
