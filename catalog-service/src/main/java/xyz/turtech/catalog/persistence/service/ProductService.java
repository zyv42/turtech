package xyz.turtech.catalog.persistence.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import xyz.turtech.catalog.persistence.domain.Product;

public interface ProductService {

    Page<Product> findAll(PageRequest pageRequest);
    Product findOne(String id);
}
