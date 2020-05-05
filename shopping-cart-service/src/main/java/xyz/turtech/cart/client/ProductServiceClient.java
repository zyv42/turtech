package xyz.turtech.cart.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import xyz.turtech.cart.persistence.domain.Product;

import java.util.Optional;

@FeignClient(name = "product-service", fallback = ProductServiceClientFallback.class)
public interface ProductServiceClient {

    @GetMapping(value = "/catalog/{productId}")
    Optional<Product> getProduct(@PathVariable("productId") String productId);
}
