package xyz.turtech.catalog.persistence.service;

import com.querydsl.core.types.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import xyz.turtech.catalog.persistence.domain.Product;

public interface ProductService {

    Product findOne(String id);
    Page<Product> findAllBy(Predicate predicate, PageRequest pageRequest);
}
