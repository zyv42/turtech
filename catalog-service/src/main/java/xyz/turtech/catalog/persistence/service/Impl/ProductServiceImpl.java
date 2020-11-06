package xyz.turtech.catalog.persistence.service.Impl;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.turtech.catalog.persistence.domain.Product;
import xyz.turtech.catalog.persistence.repository.ProductRepository;
import xyz.turtech.catalog.persistence.service.ProductService;

import java.util.Optional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product findById(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product was not found - " + productId));
    }

    public Page<Product> findAll(Predicate predicate, Pageable pageable) {
        return productRepository.findAll(predicate, pageable);
    }
}
