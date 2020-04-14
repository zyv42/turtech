package xyz.turtech.catalog.persistence.service.Impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.turtech.catalog.persistence.domain.Product;
import xyz.turtech.catalog.persistence.repository.ProductRepository;
import xyz.turtech.catalog.persistence.service.ProductService;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Product> findAll(PageRequest pageRequest) {
        return productRepository.findAll(pageRequest);
    }

    public Product findOne(Long id) {
        return productRepository.findById(id).orElse(null);
    }
}
