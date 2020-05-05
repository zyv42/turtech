package xyz.turtech.cart.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "account-service")
public interface AccountServiceClient {


}
