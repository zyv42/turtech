package xyz.turtech.cart.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import xyz.turtech.cart.persistence.domain.User;

import java.util.Optional;

@FeignClient(name = "account-service")
public interface AccountServiceClient {

    @GetMapping(value = "/accounts/{accountName}")
    Optional<User> getAccount(@PathVariable("accountName") String accountName);
}
