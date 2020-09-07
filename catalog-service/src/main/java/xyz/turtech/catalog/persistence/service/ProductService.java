package xyz.turtech.catalog.persistence.service;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import xyz.turtech.catalog.persistence.domain.Product;

public interface ProductService {

    Product findOne(Long productId);
    Page<Product> findAll(Predicate predicate, PageRequest pageRequest);
}
