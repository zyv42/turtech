package xyz.turtech.cart.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import xyz.turtech.cart.persistence.domain.Product;

import java.util.Optional;

@Component
public class ProductServiceClientFallback implements ProductServiceClient {

    private static final Logger LOG = LoggerFactory.getLogger(ProductServiceClientFallback.class);

    @Override
    public Optional<Product> getProduct(String productId) {
        LOG.error("Error during getting product with id: {}", productId);
        return Optional.empty();
    }
}
